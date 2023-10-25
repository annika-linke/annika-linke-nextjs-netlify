import Layout from "@/app/components/Layout";
import Project from "@/app/components/Project";
import WorkNavigator from "@/app/components/WorkNavigator/WorkNavigator";
import { client } from "@/sanity";
import { Project as ProjectResponse } from "@/types/Response";
import { Theme } from "@/types/Theme";
import { groq } from "next-sanity";
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
        {project.next && (
          <WorkNavigator
            to={project.next.slug?.current}
            index={project?.next?.priority}
            title={
              project?.next?.short || project?.next?.title || "Next Project"
            }
          />
        )}
      </Layout>
    </>
  );
};

const getProject = async (params: IParams): Promise<ProjectResponse> => {
  const { slug = "" } = params;
  const project = await client.fetch(
    groq`*[_type == "project" && slug.current == $slug]{
      ...,
      "images": images[]{
        ...,
        "asset": select(
          _type == "video" => asset->{url, metadata},
          asset->{...,metadata}
        )
      },
      "next": *[_type == "project" && priority == select(
      ^.priority + 1 > count(*[_type == "project"]) => 1,
      ^.priority + 1
    )][0]{title, slug, priority},
      
  }[0]
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
