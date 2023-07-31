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
    0px
    [content-start]
    repeat(4, minmax(0, 1fr))
    [content-end]
    0px;

  column-gap: 10px;

  ${from.mobileLandscape} {
    column-gap: 20px;
  }

  ${from.tablet} {
    grid-template-columns:
      minmax(0, 1fr)
      [content-start]
      repeat(12, 40px)
      [content-end]
      minmax(0, 1fr);
  }

  ${from.desktop} {
    grid-template-columns:
      minmax(0, 1fr)
      [content-start]
      repeat(12, 60px)
      [content-end]
      minmax(0, 1fr);
  }
  ${from.leftCol} {
    grid-template-columns:
      minmax(0, 1fr)
      [content-start]
      repeat(14, 60px)
      [content-end]
      minmax(0, 1fr);
  }

  ${from.wide} {
    grid-template-columns:
      minmax(0, 1fr)
      [content-start]
      repeat(16, 60px)
      [content-end]
      minmax(0, 1fr);
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
    </header>

    <main style={{ backgroundColor: palette.neutral[100] }} css={grid}>
      <section
        css={css`
          grid-area: content;
          font-family: ${fonts.body};
          min-height: 70dvh;
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
