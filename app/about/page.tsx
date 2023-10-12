import Layout from "@/app/components/Layout";
import { client } from "@/sanity";
import { About as AboutType } from "@/types/Response";
import { Theme } from "@/types/Theme";
import { groq } from "next-sanity";
import About from "../components/About/About";

const AboutPage = async () => {
  const about = await getAbout();
  return (
    <Layout siteTitle="about" theme={Theme.About} hideLogo>
      <About {...about} />
    </Layout>
  );
};

const getAbout = async (): Promise<AboutType> => {
  const about = await client.fetch(groq`*[_type == "about"]{
    ...,
    "contact": *[_type == "contact"][0],
  }[0]`);

  return about;
};

export default AboutPage;
