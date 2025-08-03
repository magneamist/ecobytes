// ./src/app/blog/[uid]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { RichText } from "@/components/RichText";
import { ArticleCard } from "@/components/ArticleCard";

type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("article", params.uid)
    .catch(() => notFound());

  return {
    title: prismic.asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();

  // Fetch the current blog post page being displayed by the UID of the page
  const page = await client
    .getByUID("article", params.uid)
    .catch(() => notFound());

  const posts = await client.getAllByType("article", {
    predicates: [prismic.filter.not("my.article.uid", params.uid)],
    orderings: [
      { field: "my.article.publication_date", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
    limit: 3,
  });

  // Destructure out the content of the current page
  const { slices, title, publication_date, description, featured_image } =
    page.data;

  return (
    <div className="flex flex-col gap-12 w-full">
      <section
        id="hero"
        className="flex flex-col gap-4 sm:grid sm:grid-cols-12 sm:gap-8 sm:h-[80vh]"
      >
        <PrismicNextImage
          field={featured_image}
          priority
          className="sm:col-span-8 w-full h-[40vh] sm:h-[80vh] shadow-lg rounded-md object-cover"
        />
        <div className="sm:col-span-4 sm:col-start-9 flex flex-col justify-between">
          <span> {new Date(publication_date || "").toLocaleDateString()}</span>
          <div className="flex flex-col gap-4">
            <RichText field={title} />
            <p>
              <RichText field={description} />
            </p>
          </div>
        </div>
      </section>
      {/* Display the content of the blog post */}
      <SliceZone slices={slices} components={components} />

      {/* Display the Recommended Posts section using the posts we requested earlier */}
      <h2>Recommended Posts</h2>
      <section className="flex flex-col sm:grid sm:grid-cols-12 gap-8 w-full">
        {posts.map((post) => (
          <div className="sm:col-span-4">
            <ArticleCard key={post.id} post={post} />
          </div>
        ))}
      </section>
    </div>
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
