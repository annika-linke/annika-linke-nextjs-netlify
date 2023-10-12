"use client";
import { About, SanityImage } from "@/types/Response";
import BlockContent from "../BlockContent/BlockContent";
import Image from "../Image/Image";
import "./about.scss";
import ContactDetails from "../Contact/ContactDetails";
import { Breakpoints, Media } from "@/styles/media";
import { cubicBezier, motion } from "framer-motion";

const MediaImage = ({
  image,
  isDesktop,
}: {
  image: SanityImage;
  isDesktop: boolean;
}) => {
  return (
    <div className="about__media">
      <motion.div
        className="about__holder"
        style={{ originY: 0 }}
        animate={{
          translateY: [-390, 40, 20, 0],
          translateX: [0, 30, -30, 10, -10, 0],
          // rotate: [0, -10, 10, -5, 5, 0],
        }}
        transition={{
          translateY: {
            timing: [0, 0.05, 0.6, 1],
            duration: 2,
            ease: "circOut",
          },
          translateX: {
            timing: [0, 0.05, 0.6, 0.8, 0.9, 1],
            duration: 4,
            ease: "easeInOut",
          },
          rotate: {
            timing: [0, 0.05, 0.6, 0.8, 0.9, 1],
            duration: 4,
            delay: 0.2,
            ease: "easeInOut",
          },
        }}
      />
      <motion.div
        className="about__image"
        style={{ originY: 0 }}
        animate={{
          translateY: [-390, 290, 230, 250],
          translateX: [0, 30, -30, 10, -10, 0],
          rotate: [0, -10, 10, -5, 5, 0],
        }}
        transition={{
          translateY: {
            timing: [0, 0.05, 0.6, 1],
            duration: 2,
            ease: "circOut",
          },
          translateX: {
            timing: [0, 0.05, 0.6, 0.8, 0.9, 1],
            duration: 4,
            ease: "easeInOut",
          },
          rotate: {
            timing: [0, 0.05, 0.6, 0.8, 0.9, 1],
            duration: 4,
            delay: 0.2,
            ease: "easeInOut",
          },
        }}
      >
        <Image
          image={image}
          alt={image.alt || "profile picture"}
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
};

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
          <>
            <Media lessThan={Breakpoints.m}>
              <MediaImage image={image} isDesktop={false} />
            </Media>

            <Media
              greaterThanOrEqual={Breakpoints.m}
              className="about__animated"
            >
              <MediaImage image={image} isDesktop={true} />
            </Media>
          </>
        )}
      </div>
    </div>
  );
};

export default About;
