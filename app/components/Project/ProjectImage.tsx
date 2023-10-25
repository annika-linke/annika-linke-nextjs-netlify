"use client";

import { SanityImage, SanityVideo } from "@/types/Response";
import classNames from "classnames";
import Image from "../Image/Image";
import { urlForImage } from "@/sanity";
import { useState } from "react";

const ProjectImage = ({
  image,
}: {
  image: (SanityImage | SanityVideo) & { shadow?: boolean };
}) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <figure
      className={classNames(
        "project__picture",
        image._type === "video" && "project__picture--video",
        image.shadow && "project__picture--shadow",
        imageLoading && image._type === "image" && "project__picture--loading"
      )}
      key={image.alt}
    >
      {image._type === "video" ? (
        <video
          className="project__video"
          autoPlay
          muted
          loop
          poster={urlForImage(image.poster || "").url()}
        >
          <source src={image.asset.url} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          alt={image.alt || ""}
          image={image}
          onLoadingComplete={() => setImageLoading(false)}
        />
      )}
      {image.caption && (
        <figcaption className="project__caption">{image.caption}</figcaption>
      )}
    </figure>
  );
};

export default ProjectImage;
