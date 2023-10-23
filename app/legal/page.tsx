import Layout from "@/app/components/Layout";
import { client } from "@/sanity";
import { About as AboutType } from "@/types/Response";
import { Theme } from "@/types/Theme";
import { groq } from "next-sanity";
import "../components/About/about.scss";
import BlockContent from "../components/BlockContent";

const Legal = async () => {
  const legal = await getLegal();
  return (
    <Layout siteTitle="legal" theme={Theme.About} hideLogo>
      <div className="about">
        <div className="about__content">
          {legal?.title && (
            <h1 className="about__title">
              <span className="f-headline about__title-line">
                {legal?.title}
              </span>
            </h1>
          )}
          {legal?.text && (
            <div className="about__text">
              <BlockContent value={legal?.text} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

const getLegal = async (): Promise<AboutType> => {
  const legal = await client.fetch(groq`*[_type == "imprint"][0]`);

  return legal;
};

export default Legal;
