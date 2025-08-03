import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { RichText } from "./RichText";
import { Content } from "@prismicio/client";
import { JSX } from "react";
import ArrowIcon from "@/app/icons/arrow";

export const ArticleCard = ({
  post,
}: {
  post: Content.ArticleDocument;
}): JSX.Element => {
  const { data } = post;

  return (
    <PrismicLink document={post} className="flex flex-col gap-4">
      <div className="relative bg-amber-400/35 pb-[66.67%]">
        <PrismicNextImage
          field={data.featured_image}
          className="shadow-lg w-full h-full rounded-lg absolute object-cover"
        />
        <div className="absolute inset-0 bg-black/20 hover:bg-black/0 duration-200 rounded-lg"></div>
        <div className="bg-white/10 backdrop-blur-sm flex items-center py-2 px-4 rounded-full border border-white absolute top-3 left-3">
          <span className="text-white text-sm">
            {new Date(data?.publication_date || "").toLocaleDateString()}
          </span>
        </div>
        <button className="bg-white/10 backdrop-blur-sm flex items-center gap-3 p-4 rounded-full border border-white absolute bottom-3 right-3">
          <span className="text-white font-bold text-xl hidden">Read more</span>
          <ArrowIcon />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="self-stretch">
          <PrismicText field={data.title} />
        </h2>
        <RichText field={data.description} />
      </div>
    </PrismicLink>
  );
};
