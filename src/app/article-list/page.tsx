import { type Metadata } from "next";

import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import { ArticleCard } from "@/components/ArticleCard";

export default async function Home() {
  const client = createClient();
  const home = await client.getByUID("page", "article-list");

  // Get all of the article documents created on Prismic ordered by publication date
  const posts = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  // <SliceZone> renders the page's slices.
  return (
    <>
      <SliceZone slices={home.data.slices} components={components} />

      {/* Map over each of the blog posts created and display a `Article` for it */}
      <section className="flex flex-col sm:grid sm:grid-cols-12 gap-8 gap-y-20">
        {posts.map((post) => (
          <div id="me" className="col-span-6" key={post.id}>
            <ArticleCard  post={post} />
          </div>
        ))}
      </section>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}
