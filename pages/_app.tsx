// These styles apply to every route in the application
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

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

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main className={`${pathway.variable} ${sourcesans.variable} font-sans`}>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </main>
  );
}
