import Layout from "@/app/components/Layout";
import Link from "next/link";

const About = () => {
  return (
    <Layout siteTitle="about">
      <p className="bg-slate-300">Hello About! from app</p>
      <ul>
        <li>
          <Link href="/">Menu</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default About;
