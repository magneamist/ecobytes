import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "../RichText";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col sm:grid sm:grid-cols-12 gap-8 sm:h-[80vh]"
    >
      <PrismicNextImage
        field={slice.primary.image}
        sizes="100vw"
        className="col-span-8 w-full h-[40vh] sm:h-[80vh] shadow-lg rounded-md object-cover"
      />
      <div className="col-span-4 col-start-9 flex flex-col justify-between">
        <span className="uppercase">{slice.primary.eyebrow_text}</span>
        <div className="flex flex-col gap-4">
          <h1>{slice.primary.title}</h1>
          <p>{slice.primary.body_text}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
