import { Project as ProjectType } from "@/types/Response";
import BlockContent from "../BlockContent";
import ButtonLink from "../ButtonLink/ButtonLink";
import ProjectHeader from "../ProjectHeader/ProjectHeader";
import ProjectImage from "./ProjectImage";
import "./project.scss";

const Project = ({
  title,
  year,
  technology,
  role,
  details,
  images,
  links,
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

                {links && (
                  <div className="project__links">
                    {links.map((link) => (
                      <ButtonLink href={link.url} key={link.url}>
                        {link.text}
                      </ButtonLink>
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </div>

      <div className="project__images">
        {images &&
          images.map((image) => <ProjectImage image={image} key={image.alt} />)}
      </div>
    </div>
  );
};

export default Project;
