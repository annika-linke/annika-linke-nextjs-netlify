import Layout from "@/components/Layout";
import Link from "next/link";

const About = () => {
  return (
    <Layout>
      <p className="bg-slate-300">Hello About!</p>
      <ul>
        <li>
          <Link href="/">Menu</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default About;
