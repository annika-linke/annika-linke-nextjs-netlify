import { About } from "@/types/Response";
import BlockContent from "../BlockContent/BlockContent";
import Image from "../Image/Image";
import "./about.scss";
import ContactDetails from "../Contact/ContactDetails";

const About = ({ title, text, image, contact }: About) => {
  return (
    <div className="about">
      <div className="about__content">
        {title && (
          <h1 className="about__title">
            <span className="about__kicker">Annika Linke</span>
            <span className="f-headline about__title-line">{title}</span>
          </h1>
        )}
        {text && (
          <div>
            <BlockContent value={text} />
          </div>
        )}

        {contact && (
          <div className="about__contact block-content">
            <h2 className="f-headline">Connect</h2>

            <ContactDetails {...contact} />
          </div>
        )}
      </div>

      <div className="about__media">
        {image && (
          <div className="about__image">
            <div className="about__holder">
              <div className="about__string"></div>
              <div className="about__string"></div>
            </div>
            <Image
              image={image}
              alt={image.alt || "profile picture"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
