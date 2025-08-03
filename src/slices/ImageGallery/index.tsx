import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ImageGallery`.
 */
export type ImageGalleryProps = SliceComponentProps<Content.ImageGallerySlice>;

/**
 * Component for "ImageGallery" Slices.
 */
const ImageGallery: FC<ImageGalleryProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-8 sm:h-screen sm:max-h-[800px] overflow-hidden"
    >
      <div className="col-span-1 row-span-2 h-full">
        <PrismicNextImage
          field={slice.primary.image_1}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="col-span-1 row-span-1">
        <PrismicNextImage
          field={slice.primary.image_2}
          className="shadow-lg h-full rounded-md object-cover"
        />
      </div>
      <div className="col-span-1 row-span-1">
        <PrismicNextImage
          field={slice.primary.image_3}
          className="shadow-lg h-full rounded-md object-cover"
        />
      </div>
    </section>
  );
};

export default ImageGallery;
