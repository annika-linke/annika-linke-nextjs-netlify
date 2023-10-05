"use client";

import { useNextSanityImage } from "next-sanity-image";
import { SanityImage } from "@/types/Response";
import Img, { ImageProps } from "next/image";
import { client } from "../../../sanity";

const Image = ({
  image,
  ...options
}: {
  image: SanityImage;
} & Omit<ImageProps, "src">) => {
  const imageProps = useNextSanityImage(client, image);

  const props = options.fill
    ? {
        src: imageProps.src,
        loader: imageProps.loader,
        ...options,
        alt: image.alt || "",
      }
    : {
        ...imageProps,
        ...options,
        alt: image.alt || "",
      };

  return (
    <Img
      sizes="(max-width: 800px) 100vw, 800px"
      placeholder={image?.asset?.metadata?.lqip ? "blur" : "empty"}
      blurDataURL={image?.asset?.metadata?.lqip}
      {...props}
    />
  );
};

export default Image;
