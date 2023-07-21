import Layout from "@/components/Layout";
import { client } from "@/sanity";
import { GetStaticProps } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

type Props = {
  project: any;
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Project = ({ project }: Props) => {
  return (
    <Layout>
      <article>
        <p>{project?.slug?.current}</p>
        <h1>{project?.title}</h1>
        <Link href="/">Main</Link>
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths: string[] = await client.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params as IParams;
  const project = await client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0]
  `,
    { slug }
  );

  return {
    props: {
      project,
    },
  };
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const paths: string[] = await client.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default Project;
