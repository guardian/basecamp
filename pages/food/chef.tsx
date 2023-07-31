import { css } from "@emotion/react";
import {
  Button,
  Footer,
  SvgGuardianLogo,
} from "@guardian/source-react-components";
import { fonts, from, palette, space } from "@guardian/source-foundations";
import { Image } from "../../shared/Image";
import Head from "next/head";
import { Bullet } from "../../src/components/Bullet";

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
          line-height: 130%;
          
          /////
          display: flex;
          ////

          ${from.tablet} {
            border-left: 1px solid ${palette.neutral[86]};
            border-right: 1px solid ${palette.neutral[86]};
            padding: 0 ${space[5]}px;
            padding-right: 0;
            margin: 0;
            margin-left: -10px;
            margin-right: 5px;
          }
        `}
      >
        <div css={css`min-width: 50%; padding-right: ${space[4]}px;`}>
        <h1
          css={css`
            font-family: ${fonts.titlepiece};
            font-size: 50px;
            font-weight: 700;
            line-height: 115%;
          `}
        >
          The best chefs at your fingertips
        </h1>

        <p>Unleash your culinary creativity: discover a world of delicious dishes to make at home. </p>
        <p>For the first time, access thousands of recipes by star chefs from the Guardian and the Observer. From weeknight delights to special occasion meals that impress. Search thousands of recipes by diet, cuisine or ingredient, save your favourites and share with a friend. </p>
          <ul css={css`list-style: none; padding-left: 0;`}>
            <Bullet text="Unlimited access to Guardian and Observer recipes from your favourite chefs" />
            <Bullet text="Discover new cuisines with exclusive recipes and tips published each week" />
            <Bullet text="Save your favourite recipes to your Cookbook and connect with other home chefs" />
          </ul>
        <br />
        </div>

        <div css={css`flex-basis: 50%; max-width: 50%; min-width: 50%; overflow: hidden;`}>
      <img
          src={
            "https://media.guim.co.uk/cbc320f9252d33f17c88353a3bc7945901b2549f/0_0_640_775/640.jpg"
          }
          alt="Ottolenghi’s salad"
          css={css`object-fit: cover;`}
        />
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
