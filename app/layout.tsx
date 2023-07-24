import "../styles/globals.css";
import { Pathway_Gothic_One, Source_Sans_3 } from "next/font/google";

const pathway = Pathway_Gothic_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pathway-gothic-one",
  weight: "400",
});
const sourcesans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-3",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${pathway.variable} ${sourcesans.variable} font-sans bg-beige`}
      >
        {children}
      </body>
    </html>
  );
}
