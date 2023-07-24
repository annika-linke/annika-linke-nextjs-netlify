import Layout from "@/app/components/Layout";
import Link from "next/link";

const Work = () => {
  return (
    <Layout>
      <p className="font-headline text-2xl">Hello work from app!</p>
      <ul>
        <li>
          <Link href="/">Menu</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="/work/test">First</Link>
        </li>
        <li>
          <Link href="/work/second">Second</Link>
        </li>
        <li>
          <Link href="/work/third">third</Link>
        </li>
        <li>
          <Link href="/work/fourth">fourth</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default Work;
