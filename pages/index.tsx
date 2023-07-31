import { readdir } from "node:fs/promises";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { fonts, palette } from "@guardian/source-foundations";
import { css } from "@emotion/react";
import config from "../next.config";

const basePath = config.basePath ?? "";

const endsWithTsx = /\.tsx$/;

export const getStaticProps: GetStaticProps<{ links: string[] }> = async () => {
  const files = await readdir("./pages", { recursive: true });
  const links = files
    .filter((file) => file.match(endsWithTsx) && file !== "_app.tsx")
    .map((file) => file.replace(endsWithTsx, ""));
  return { props: { links } };
};

const Home = ({ links }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <main
    css={css`
      background-color: ${palette.neutral[100]};
      min-height: 90dvh;
      padding: 2rem;
      font-family: ${fonts.textSans};
    `}
  >
    <h1>Basecamp development server</h1>

    <p>
      This page is only to help development and is not meant to be
      public-facing.
    </p>

    <ul>
      {links.map((link) => (
        <li>
          <Link key={link} href={basePath + link.replace("index", "")}>
            {link.replaceAll(/-/g, " ")}
          </Link>
        </li>
      ))}
    </ul>
  </main>
);

export default Home;
