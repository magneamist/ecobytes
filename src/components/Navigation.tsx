import { Client, Content, isFilled } from "@prismicio/client";
import { PrismicLink } from "@prismicio/react";
import Link from "next/link";
import { JSX } from "react";
import { ResponsiveLogo } from "./ResponsiveLogo";

export const Navigation = async ({
  client,
}: {
  client: Client<Content.AllDocumentTypes>;
}): Promise<JSX.Element> => {
  const navigation = await client.getSingle("navigation");

  return (
    <div className="flex h-20 justify-between items-center sticky top-0 z-50">
      <Link href="/">
        <ResponsiveLogo />
      </Link>
      <nav className="text-xl self-center">
        <ul className="flex gap-6">
          {isFilled.group(navigation.data.menu_items) &&
            navigation.data.menu_items.map((item) => {
              return (
                <li key={item.label} className="hover:underline">
                  <PrismicLink field={item.link}>{item.label}</PrismicLink>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};
