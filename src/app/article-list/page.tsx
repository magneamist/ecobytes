import { type Metadata } from "next";

import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import { ArticleCard } from "@/components/ArticleCard";

export default async function ArticleList() {
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
    <div className="container mx-auto px-4">
      <SliceZone slices={home.data.slices} components={components} />
      {/* Debug info */}
      <div className="bg-gray-100 p-4 my-4">
        Debug: Found {posts.length} posts
      </div>
      {posts.length > 0 ? (
        <section className="flex flex-col sm:grid sm:grid-cols-12 gap-8 gap-y-20">
          {posts.map((post) => (
            <div id="me" className="col-span-6" key={post.id}>
              <ArticleCard post={post} />
            </div>
          ))}
        </section>
      ) : (
        <div className="text-center py-10">No posts available to display</div>
      )}
    </div>
  );
}
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
