import { PortableTextReactComponents } from "@portabletext/react";
import ImageBlock from "./ImageBlock";

//TODO when needed
export const blockComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h1: ({ children }) => <h2 className="f-headline">{children}</h2>,
    h2: ({ children }) => <h3 className="f-headline">{children}</h3>,
    h3: ({ children }) => <h4 className="f-headline">{children}</h4>,
  },
  list: {
    bullet: ({ children }) => <ul className="">{children}</ul>,
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
        <a href={href} className="">
          {children}
        </a>
      );
    },
    link: ({ value, children }) => {
      const { href = "", blank } = value;
      const classNames = "";
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

  unknownBlockStyle: ({ children }) => <p>{children}</p>,
  unknownList: ({ children }) => <ul>{children}</ul>,
  unknownListItem: ({ children }) => <li>{children}</li>,
  types: {
    image: ImageBlock,
  },
};
