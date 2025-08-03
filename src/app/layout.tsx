import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import "./global.css";
import localFont from "next/font/local";
import { Navigation } from "@/components/Navigation";

const myFont = localFont({
  src: "./fonts/UncutSans-Variable.ttf",
  variable: "--font-uncut-sans",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = createClient();
  return (
    <html lang="en">
      <Navigation client={client} />
      <body className={`${myFont.variable} mx-4 sm:mx-16 pb-10 sm:pb-20`}>
        {children}
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
