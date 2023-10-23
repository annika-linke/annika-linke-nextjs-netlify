"use client";
import { Project as ProjectType } from "@/types/Response";
import classNames from "classnames";
import BlockContent from "../BlockContent";
import Image from "../Image/Image";
import ProjectHeader from "../ProjectHeader/ProjectHeader";
import "./project.scss";
import { urlForImage } from "@/sanity";

const Project = ({
  title,
  year,
  technology,
  role,
  details,
  images,
}: ProjectType) => {
  return (
    <div className="project">
      <div className="project__content">
        <div className="project__content-inner">
          <ProjectHeader
            headline={title}
            kicker={year}
            info={[
              { title: "Technology", content: technology },
              { title: "Role", content: role },
            ]}
            className="project__header"
          />
          <section className="project__details-wrap">
            <h2 className="f-headline project__title">Details</h2>
            {details && (
              <div className="project__details">
                <BlockContent value={details} />
              </div>
            )}
          </section>
        </div>
      </div>

      <div className="project__images">
        {images &&
          images.map((image) => (
            <figure
              className={classNames(
                "project__picture",
                image._type === "video" && "project__picture--video"
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
                <Image alt={image.alt || ""} image={image} />
              )}
              {image.caption && (
                <figcaption className="project__caption">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
      </div>
    </div>
  );
};

export default Project;
