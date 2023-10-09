import { Pathway_Gothic_One, Source_Sans_3 } from "next/font/google";
import "../styles/abstracts/_variables-css.scss";
import "../styles/main.scss";
import { mediaStyles } from "@/styles/media";

const pathway = Pathway_Gothic_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pathway-gothic-one",
  weight: "400",
});
const sourcesans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pathway.variable} ${sourcesans.variable}`}>
      <head>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{ __html: mediaStyles }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
