import { readdir } from "node:fs/promises";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

const endsWithTsx = /\.tsx$/;

export const getStaticProps: GetStaticProps<{ links: string[] }> = async () => {
  const files = await readdir("./pages/food");
  const links = files.map((file) => file.replace(endsWithTsx, ""));
  return { props: { links } };
};

const Home = ({ links }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <main>
      <h1>Basecamp development server</h1>

      <ul>
        {links.map((link) => (
          <li>
            <Link key={link} href={`food/${link}`}>
              {link.replaceAll(/-/g, " ")}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  </>
);

export default Home;
