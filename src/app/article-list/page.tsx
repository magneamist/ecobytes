// import { type Metadata } from "next";

// import { asText } from "@prismicio/client";
// import { SliceZone } from "@prismicio/react";

// import { createClient } from "@/prismicio";
// import { components } from "@/slices";

// import { ArticleCard } from "@/components/ArticleCard";

// export default async function ArticleList() {
//   const client = createClient();
//   const home = await client.getByUID("page", "article-list");

//   // Get all of the article documents created on Prismic ordered by publication date
//   const posts = await client.getAllByType("article", {
//     orderings: [
//       { field: "my.article.publication_date", direction: "desc" },
//       { field: "document.first_publication_date", direction: "desc" },
//     ],
//   });

//   // <SliceZone> renders the page's slices.
//   return (
//     <div className="container mx-auto px-4">
//       <SliceZone slices={home.data.slices} components={components} />
//       {/* Debug info */}
//       <div className="bg-gray-100 p-4 my-4">
//         Debug: Found {posts.length} posts
//       </div>
//       {posts.length > 0 ? (
//         <section className="flex flex-col sm:grid sm:grid-cols-12 gap-8 gap-y-20">
//           {posts.map((post) => (
//             <div id="me" className="col-span-6" key={post.id}>
//               <ArticleCard post={post} />
//             </div>
//           ))}
//         </section>
//       ) : (
//         <div className="text-center py-10">No posts available to display</div>
//       )}
//     </div>
//   );
// }
// export async function generateMetadata(): Promise<Metadata> {
//   const client = createClient();
//   const home = await client.getByUID("page", "article-list");

//   return {
//     title: asText(home.data.title),
//     description: home.data.meta_description,
//     openGraph: {
//       title: home.data.meta_title ?? undefined,
//       images: [{ url: home.data.meta_image.url ?? "" }],
//     },
//   };
// }

// ./src/app/blog/[uid]/page.tsx

// import { Metadata } from "next";
// import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
// import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
// import { PrismicNextImage } from "@prismicio/next";
// import { RichText } from "@/components/RichText";
import { ArticleCard } from "@/components/ArticleCard";
/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ uid: string }>;
// }): Promise<Metadata> {
//   const { uid } = await params;
//   const client = createClient();
//   const page = await client.getByUID("article-list", uid).catch(() => notFound());

//   return {
//     title: prismic.asText(page.data.title),
//     description: page.data.meta_description,
//     openGraph: {
//       title: page.data.meta_title || undefined,
//       images: [
//         {
//           url: page.data.meta_image.url || "",
//         },
//       ],
//     },
//   };
// }

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
