"use client";
import { About } from "@/types/Response";
import BlockContent from "../BlockContent/BlockContent";
import ContactDetails from "../Contact/ContactDetails";
import Image from "../Image/Image";
import "./about.scss";

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
          <div className="about__text">
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

      <div className="about__media-wrap">
        {image && (
          <div className="about__media">
            <div className="about__image">
              <Image
                image={image}
                alt={image.alt || "profile picture"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
