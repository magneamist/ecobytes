import { type Metadata } from "next";

import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import { ArticleCard } from "@/components/ArticleCard";

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
//     <>
//       <SliceZone slices={home.data.slices} components={components} />

//       {/* Map over each of the blog posts created and display a `Article` for it */}
//       <section className="flex flex-col sm:grid sm:grid-cols-12 gap-8 gap-y-20">
//         {posts.map((post) => (
//           <div id="me" className="col-span-6" key={post.id}>
//             <ArticleCard post={post} />
//           </div>
//         ))}
//       </section>
//     </>
//   );
// }
export default async function ArticlePage() {
  const client = createClient();

  try {
    const home = await client.getByUID("page", "article-list");
    const posts = await client.getAllByType("article", {
      orderings: [
        { field: "my.article.publication_date", direction: "desc" },
        { field: "document.first_publication_date", direction: "desc" },
      ],
    });

    console.log("Number of posts fetched:", posts.length);
    console.log("First post:", JSON.stringify(posts[0]?.id));

    return (
      <>
        <SliceZone slices={home.data.slices} components={components} />
        <section className="flex flex-col sm:grid sm:grid-cols-12 gap-8 gap-y-20">
          {posts.map((post) => (
            <div id="me" className="col-span-6" key={post.id}>
              <ArticleCard post={post} />
            </div>
          ))}
        </section>
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading content: {(error as Error).message}</div>;
  }
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
