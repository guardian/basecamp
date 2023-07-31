import { css } from "@emotion/react";
import {
  Button,
  Footer,
  SvgGuardianLogo,
} from "@guardian/source-react-components";
import { fonts, from, palette } from "@guardian/source-foundations";
import { Image } from "../../shared/Image";
import Head from "next/head";

const grid = css`
  display: grid;

  grid-template-columns:
    [viewport-start]
    0px
    [content-start]
    repeat(4, minmax(0, 1fr))
    [content-end]
    0px
    [viewport-start];

  column-gap: 10px;

  ${from.mobileLandscape} {
    column-gap: 20px;
  }

  ${from.tablet} {
    grid-template-columns:
      [viewport-start]
      minmax(0, 1fr)
      [content-start]
      repeat(12, 40px)
      [content-end]
      minmax(0, 1fr)
      [viewport-end];
  }

  ${from.desktop} {
    grid-template-columns:
      [viewport-start]
      minmax(0, 1fr)
      [content-start]
      repeat(12, 60px)
      [content-end]
      minmax(0, 1fr)
      [viewport-end];
  }
  ${from.leftCol} {
    grid-template-columns:
      [viewport-start]
      minmax(0, 1fr)
      [content-start]
      repeat(14, 60px)
      [content-end]
      minmax(0, 1fr)
      [viewport-end];
  }

  ${from.wide} {
    grid-template-columns:
      [viewport-start]
      minmax(0, 1fr)
      [content-start]
      repeat(16, 60px)
      [content-end]
      minmax(0, 1fr)
      [viewport-end];
  }
`;

const navLink = css`
  color: ${palette.neutral[100]};
  text-decoration: none;
  box-sizing: border-box;

  padding: 5px;
  position: relative;

  font-size: 15.4px;
  ${from.phablet} {
    font-size: 18px;
    padding-right: 20px;
  }

  ${from.tablet} {
    font-size: 22px;
  }

  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    height: 4px;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--colour, aquamarine);
    transform: translateY(-4px);
    transition: transform 120ms;
  }

  ::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 70%;
    border-right: 1px solid ${palette.brand[600]};
  }

  :hover {
    ::before {
      transform: translateY(0);
    }
  }
`;

const Home = () => (
  <>
    <Head>
      <title>Basecamp | Guardian</title>
    </Head>

    <header style={{ backgroundColor: palette.brand[400] }} css={grid}>
      <div
        css={css`
          width: 225px;
          grid-column: -4 / span 2;
          justify-self: end;

          ${from.desktop} {
            width: 300px;
            grid-column: -6 / span 3;
          }
        `}
      >
        <SvgGuardianLogo textColor={palette.neutral[100]} />
      </div>
      <nav
        css={css`
          grid-area: viewport;

          border-top: 1px solid ${palette.brand[600]};

          font-family: ${fonts.headline};
          font-weight: 900;
          display: flex;

          ${from.tablet} {
            grid-area: content;
            border-left: 1px solid ${palette.brand[600]};
            border-right: 1px solid ${palette.brand[600]};
            margin: 0 -10px;
          }
        `}
      >
        <a
          // @ts-expect-error -- custom variables need to be declared
          style={{ "--colour": palette.news[500], paddingLeft: 10 }}
          css={navLink}
          href="https://www.theguardian.com/news"
        >
          News
        </a>
        <a
          // @ts-expect-error -- custom variables need to be declared
          style={{ "--colour": palette.opinion[500] }}
          css={navLink}
          href="https://www.theguardian.com/commentisfree"
        >
          Opinion
        </a>
        <a
          // @ts-expect-error -- custom variables need to be declared
          style={{ "--colour": palette.sport[500] }}
          css={navLink}
          href="https://www.theguardian.com/sport"
        >
          Sport
        </a>
        <a
          // @ts-expect-error -- custom variables need to be declared
          style={{ "--colour": palette.culture[500] }}
          css={navLink}
          href="https://www.theguardian.com/culture"
        >
          Culture
        </a>
        <a
          // @ts-expect-error -- custom variables need to be declared
          style={{ "--colour": palette.lifestyle[500] }}
          css={navLink}
          href="https://www.theguardian.com/lifeandstyle"
        >
          Lifestyle
        </a>
      </nav>
    </header>

    <main style={{ backgroundColor: palette.neutral[100] }} css={grid}>
      <section
        css={css`
          grid-area: content;
          font-family: ${fonts.body};
          min-height: 70dvh;

          ${from.tablet} {
            border-left: 1px solid ${palette.neutral[86]};
            border-right: 1px solid ${palette.neutral[86]};
            padding: 0 9px;
            margin: 0 -10px;
          }
        `}
      >
        <h1
          css={css`
            font-family: ${fonts.headline};
            font-weight: 500;
          `}
        >
          Let’s get cooking!
        </h1>

        <p>Some text about this page…</p>

        <Button>Click me</Button>

        <br />

        <Image
          src={
            "https://media.guim.co.uk/1a863deb14a607837e27466c05939aa98c410bb5/0_651_3717_3717/3717.jpg"
          }
          alt="Ottolenghi’s salad"
          width={300}
          height={300}
        />

        <ol>
          <li>First thing</li>
          <li>Second thing</li>
          <li>Third thing</li>
        </ol>
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
