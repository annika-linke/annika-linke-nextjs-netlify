import Layout from "@/app/components/Layout";
import Project from "@/app/components/Project";
import WorkNavigator from "@/app/components/WorkNavigator/WorkNavigator";
import { client } from "@/sanity";
import { Project as ProjectResponse } from "@/types/Response";
import { Theme } from "@/types/Theme";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const ProjectDetail = async ({ params }: { params: IParams }) => {
  const project = await getProject(params);

  return (
    <>
      <Layout siteTitle="Work" theme={Theme.Work}>
        <Project {...project} />
      </Layout>
      <WorkNavigator
        to={`/work/wewillsee`}
        index={project?.priority || 1 + 1}
        title={"next project"}
      />
    </>
  );
};

const getProject = async (params: IParams): Promise<ProjectResponse> => {
  const { slug = "" } = params;
  const project = await client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0]
  `,
    { slug }
  );

  return project;
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const paths: string[] = await client.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );

  return paths.map((slug) => ({ slug }));
}

export default ProjectDetail;
