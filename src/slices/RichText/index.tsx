import { type FC } from "react";
import { type Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  type SliceComponentProps,
  type JSXMapSerializer,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>;
  },
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
  heading1: ({ children }) => <h1 className="pt-8 pb-3">{children}</h1>,
  heading2: ({ children }) => <h2 className="pt-8 pb-3">{children}</h2>,
  heading3: ({ children }) => <h3 className="pt-8 pb-3">{children}</h3>,
  paragraph: ({ children }) => <p>{children}</p>,
};

/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText: FC<RichTextProps> = ({ slice }) => {
  return (
    <section className="grid grid-cols-12 py-20 gap-8">
      <div className="col-span-full sm:col-span-6 sm:col-start-7">
        <PrismicRichText
          field={slice.primary.content}
          components={components}
        />
      </div>
    </section>
  );
};

export default RichText;
