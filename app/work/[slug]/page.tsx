import Layout from "@/app/components/Layout";
import { client, urlForImage } from "@/sanity";
import { Project } from "@/types/Response";
import { GetStaticProps } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Project = async ({ params }: { params: IParams }) => {
  const project = await getProject(params);
  return (
    <Layout>
      <article>
        <p>{project?.slug?.current}</p>
        <h1>{project?.title}</h1>
        <Link href="/work">All Work</Link>
        {project.image && (
          <img
            alt=""
            src={urlForImage(project.image).url()}
            width={100}
            height={100}
          />
        )}
      </article>
    </Layout>
  );
};

const getProject = async (params: IParams): Promise<Project> => {
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

export default Project;
