"use client";
import { Contact } from "@/types/Response";
import "./contact.scss";
import { motion } from "framer-motion";
import { Brand, LinkedIn, Xing } from "../Icon";
import BlockContent from "../BlockContent";
import ButtonLink from "../ButtonLink/ButtonLink";

const Icon = ({ name }: { name?: "xing" | "linkedIn" }) => {
  if (name === "xing") {
    return <Xing className="icon contact__social-icon" />;
  }
  if (name === "linkedIn") {
    return <LinkedIn className="icon contact__social-icon" />;
  }
  return null;
};

const Contact = ({ email, text, socialLinks }: Contact) => {
  return (
    <div className="contact">
      <div className="contact__header">
        <motion.div
          className="contact__bell"
          animate={{ rotate: 55 }}
          transition={{
            from: -55,
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
          }}
          style={{ originX: 0.5, originY: 0 }}
        >
          <Brand className="icon contact__bell-icon" />
        </motion.div>
        <h2 className="f-headline contact__header-line">
          <span>Ring the Bell</span>
          <span className="contact__header-kicker">Please</span>
        </h2>
      </div>
      <div className="contact__content">
        <ButtonLink
          className="contact__mail"
          target="_blank"
          rel="noreferrer"
          href={`mailto:${email}`}
        >
          {email}
        </ButtonLink>
        {text && <BlockContent value={text} />}
      </div>

      {socialLinks && (
        <div className="contact__socials">
          <ul className="contact__social-list">
            {socialLinks.map((socialLink, index) => {
              return (
                <li key={index}>
                  <ButtonLink
                    href={socialLink.url}
                    target="_blank"
                    rel="noreferrer"
                    className="contact__social-link"
                  >
                    <Icon name={socialLink.platform} />
                  </ButtonLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Contact;
