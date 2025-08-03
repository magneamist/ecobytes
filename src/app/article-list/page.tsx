import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import { asText } from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { ArticleCard } from "@/components/ArticleCard";
/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "article-list");

  return {
    title: asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

export default async function ArticleList() {
  const client = createClient();
  const articlelist = await client.getByUID("page", "article-list");

  // Get all of the article documents created on Prismic ordered by publication date
  const posts = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return (
    <>
      <SliceZone slices={articlelist.data.slices} components={components} />

      {/* Display the Recommended Posts section using the posts we requested earlier */}
      <section className="flex flex-col gap-4 sm:grid sm:grid-cols-12 sm:gap-8 w-full">
        {posts.map((post) => (
          <div key={post.id} className="sm:col-span-4">
            <ArticleCard post={post} />
          </div>
        ))}
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("article");

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
