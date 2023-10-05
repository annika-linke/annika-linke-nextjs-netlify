import Layout from "@/app/components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout siteTitle="start">
      <p className="test">Hello world! from app</p>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default Index;
