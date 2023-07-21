import Layout from "@/components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <p className="bg-chestnut text-white font-headline">Hello world!</p>
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
