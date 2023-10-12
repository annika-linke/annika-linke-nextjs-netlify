"use client";
import { Contact } from "@/types/Response";
import { motion } from "framer-motion";
import { Brand } from "../Icon";
import ContactDetails from "./ContactDetails";
import "./contact.scss";

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
      <ContactDetails email={email} text={text} socialLinks={socialLinks} />
    </div>
  );
};

export default Contact;
