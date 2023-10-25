"use client";

import { useNextSanityImage } from "next-sanity-image";
import { SanityImage } from "@/types/Response";
import Img, { ImageProps } from "next/image";
import { client } from "../../../sanity";
import { useState } from "react";
import classNames from "classnames";
import "./image.scss";

const Image = ({
  image,
  ...options
}: {
  image: SanityImage;
} & Omit<ImageProps, "src">) => {
  const imageProps = useNextSanityImage(client, image);
  const [loading, setLoading] = useState(true);

  const onLoadComplete = (img: any) => {
    options?.onLoadingComplete?.(img);
    setLoading(false);
  };

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
      onLoadingComplete={onLoadComplete}
      className={classNames(props.className, loading && "image--loading")}
    />
  );
};

export default Image;
