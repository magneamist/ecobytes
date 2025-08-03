import { type Metadata } from "next";

import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import { ArticleCard } from "@/components/ArticleCard";

export default async function Home() {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  // Get all of the article documents created on Prismic ordered by publication date
  const posts = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
    limit: 3,
  });

  // <SliceZone> renders the page's slices.
  return (
    <>
      <SliceZone slices={home.data.slices} components={components} />

      {/* Display the Recommended Posts section using the posts we requested earlier */}
      <h2 className="pb-8">Recommended Posts</h2>
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
