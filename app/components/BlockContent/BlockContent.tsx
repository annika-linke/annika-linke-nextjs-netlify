import { PortableText, PortableTextProps } from "@portabletext/react";
import { blockComponents } from "./components";
import "./block-content.scss";

const BlockContent = ({ components, ...props }: PortableTextProps) => {
  return (
    <div className="block-content">
      <PortableText components={blockComponents} {...props} />
    </div>
  );
};

export default BlockContent;
