import {
  PortableText,
  PortableTextProps,
  PortableTextReactComponents,
} from "@portabletext/react";
import { blockComponents } from "./components";

const BlockContent = ({ components, ...props }: PortableTextProps) => {
  return <PortableText components={blockComponents} {...props} />;
};

export default BlockContent;
