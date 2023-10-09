"use client";
import { Project as ProjectType } from "@/types/Response";
import classNames from "classnames";
import BlockContent from "../BlockContent";
import Image from "../Image/Image";
import ProjectHeader from "../ProjectHeader/ProjectHeader";
import "./project.scss";

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
      <div className={classNames("project__content")}>
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
            <figure className="project__picture" key={image.alt}>
              <Image alt={image.alt || ""} image={image} />
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
