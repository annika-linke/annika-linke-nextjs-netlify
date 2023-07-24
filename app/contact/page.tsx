import Layout from "@/app/components/Layout";
import Link from "next/link";

const Contact = () => {
  return (
    <Layout>
      <p className="bg-slate-300">Hello Contact from app!</p>
      <ul>
        <li>
          <Link href="/">Menu</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default Contact;
