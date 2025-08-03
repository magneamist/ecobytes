import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "../RichText/index.module.css";

/**
 * Props for `Video`.
 */
export type VideoProps = SliceComponentProps<Content.VideoSlice>;

/**
 * Component for "Video" Slices.
 */
const Video: FC<VideoProps> = ({ slice }) => {
  const embedHtml = slice.primary.embed_section?.html || "";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className=""
    >
      <div
        dangerouslySetInnerHTML={{ __html: embedHtml }}
        className={styles["youtube-video"]}
      />
      <h1></h1>
    </section>
  );
};

export default Video;
