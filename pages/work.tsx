import Layout from "@/components/Layout";
import Link from "next/link";

const Work = () => {
  return (
    <Layout>
      <p className="bg-slate-300">Hello work!</p>
      <ul>
        <li>
          <Link href="/">Menu</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="/project/test">First</Link>
        </li>
        <li>
          <Link href="/project/second">Second</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default Work;
