import Layout from "@/app/components/Layout";
import { client } from "@/sanity";
import { Contact as ContactType } from "@/types/Response";
import { Theme } from "@/types/Theme";
import { groq } from "next-sanity";
import Contact from "../components/Contact/Contact";

const ContactPage = async () => {
  const contact = await getContact();
  return (
    <Layout siteTitle="contact" theme={Theme.Contact} hideLogo>
      <Contact {...contact} />
    </Layout>
  );
};

const getContact = async (): Promise<ContactType> => {
  const contact = await client.fetch(groq`*[_type == "contact"][0]`);

  return contact;
};

export default ContactPage;
