import { PortableTextReactComponents } from "@portabletext/react";
import ImageBlock from "./ImageBlock";

export const blockComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p className="mb-6">{children}</p>,
    h1: ({ children }) => (
      <h2 className="mt-16 mb-10 text-4xl font-bold font-headline first:mt-0 lg:mt-[90px]">
        {children}
      </h2>
    ),
    h2: ({ children }) => (
      <h3 className="mt-16 mb-3 text-2xl font-bold lg:mb-10 font-headline lg:mt-[90px] first:mt-0">
        {children}
      </h3>
    ),
    h3: ({ children }) => (
      <h4 className="mt-16 mb-3 text-base font-bold lg:mb-10 first:mt-0 lg:mt-[90px]">
        {children}
      </h4>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="pl-5 list-disc">{children}</ul>,
    number: ({ children }) => <ol className="">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
  },
  marks: {
    internalLink: ({ value, children }) => {
      const { slug = {} } = value;
      const href = `/${slug.current}`;
      return (
        <a
          href={href}
          className="underline decoration-green underline-offset-2 hover:decoration-greige focus:decoration-greige"
        >
          {children}
        </a>
      );
    },
    link: ({ value, children }) => {
      const { href = "", blank } = value;
      const classNames =
        "underline decoration-green underline-offset-2 hover:decoration-greige focus:decoration-greige";
      return blank ? (
        <a href={href} target="_blank" rel="noopener" className={classNames}>
          {children}
        </a>
      ) : (
        <a href={href} className={classNames}>
          {children}
        </a>
      );
    },
  },

  unknownBlockStyle: ({ children }) => <p className="mb-6">{children}</p>,
  unknownList: ({ children }) => <ul className="list-disc">{children}</ul>,
  unknownListItem: ({ children }) => <li>{children}</li>,
  types: {
    image: ImageBlock,
  },
};
