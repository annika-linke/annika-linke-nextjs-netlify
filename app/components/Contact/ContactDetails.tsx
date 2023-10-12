import { Contact } from "@/types/Response";
import BlockContent from "../BlockContent";
import ButtonLink from "../ButtonLink/ButtonLink";
import { LinkedIn, Xing } from "../Icon";
import "./contact-details.scss";
import { TypedObject } from "sanity";

const Icon = ({ name }: { name?: "xing" | "linkedIn" }) => {
  if (name === "xing") {
    return <Xing className="icon contact__social-icon" />;
  }
  if (name === "linkedIn") {
    return <LinkedIn className="icon contact__social-icon" />;
  }
  return null;
};

const ContactDetails = ({
  email,
  text,
  socialLinks,
}: {
  email?: string;
  text?: TypedObject | TypedObject[];
  socialLinks?: {
    platform?: "xing" | "linkedIn" | undefined;
    url?: string | undefined;
  }[];
}) => {
  return (
    <>
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
                  <a
                    href={socialLink.url}
                    target="_blank"
                    rel="noreferrer"
                    className="contact__social-link"
                  >
                    <Icon name={socialLink.platform} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default ContactDetails;
