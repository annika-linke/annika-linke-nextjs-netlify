import Layout from "@/app/components/Layout";
import { client } from "@/sanity";
import { ProjectSlug } from "@/types/Response";
import { groq } from "next-sanity";
import WorkSlider from "../components/WorkSlider/WorkSlider";
import { Theme } from "@/types/Theme";

const Work = async () => {
  const props = await getProjectSlugs();
  return (
    <Layout siteTitle="work" theme={Theme.WorkDetail}>
      {props && <WorkSlider items={props} />}
    </Layout>
  );
};

const getProjectSlugs = async (): Promise<ProjectSlug[]> => {
  const project = await client.fetch(
    groq`*[_type == "project"]{
      ...,
      slug{
        "current" : 'work/' + current
      }
    } | order(priority asc)`
  );

  return project;
};

export default Work;
