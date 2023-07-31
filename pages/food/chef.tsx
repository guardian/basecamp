import { css } from "@emotion/react";
import {
  Button,
  Footer,
  SvgGuardianLogo,
} from "@guardian/source-react-components";
import {
  fontWeights,
  fonts,
  from,
  palette,
  space,
  until,
} from "@guardian/source-foundations";
import Head from "next/head";
import { Bullet } from "../../src/components/Bullet";
import { Content, Grid, Lines } from "../../shared/Grid";
import { Image } from "../../shared/Image";

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

    <Grid
      style={{
        backgroundColor: palette.brand[400],
        gridTemplateRows: "auto 38px",
        rowGap: "12px",
      }}
      type="header"
    >
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
    </Grid>

    <Grid style={{ backgroundColor: palette.neutral[100] }} type="main">
      {/* <section
        css={css`
          grid-column-start: content;
          grid-column-end: content;
          font-family: ${fonts.body};
          min-height: 70dvh;
          line-height: 130%;
          display: flex;
          flex-direction: column-reverse;
          ${from.tablet} {
            border-left: 1px solid ${palette.neutral[86]};
            border-right: 1px solid ${palette.neutral[86]};
            padding: 0 ${space[5]}px;
            padding-right: 0;
            margin: 0;
            margin-left: -10px;
            margin-right: 5px;
          }
          ${from.desktop} {
            flex-direction: row;
          }
        `}
      > */}
      <Lines />
      <div
        css={css`
          grid-row-start: 1;
          grid-column-start: content;
          grid-column-end: content;
          ${from.desktop} {
            grid-column-end: span 7;
          }
          min-width: 50%;
          padding-right: ${space[4]}px;
        `}
      >
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

        <p>
          Unleash your culinary creativity: discover a world of delicious dishes
          to make at home.{" "}
        </p>
        <p>
          For the first time, access thousands of recipes by star chefs from the
          Guardian and the Observer. From weeknight delights to special occasion
          meals that impress. Search thousands of recipes by diet, cuisine or
          ingredient, save your favourites and share with a friend.{" "}
        </p>
        <ul
          css={css`
            list-style: none;
            padding-left: 0;
          `}
        >
          <Bullet text="Unlimited access to Guardian and Observer recipes from your favourite chefs" />
          <Bullet text="Discover new cuisines with exclusive recipes and tips published each week" />
          <Bullet text="Save your favourite recipes to your Cookbook and connect with other home chefs" />
        </ul>
        <br />
      </div>

      {/* <div css={css`${from.desktop} {display: none;}`}>
      <img
          src={
            "https://media.guim.co.uk/f15e099752e2d2150c2cd013da43fb004e879183/0_0_700_420/700.jpg"
          }
          alt="recipe images mobile"
          css={css`max-width: 100%;`}
        />
        </div> */}

      <div
        css={css`
          grid-row-start: 1;
          grid-column-end: content-end;
          margin-right: -9px;
          display: none;
          ${from.desktop} {
            grid-column-start: 9;
            display: block;
          }
        `}
      >
        <Image
          src="https://media.guim.co.uk/cbc320f9252d33f17c88353a3bc7945901b2549f/0_0_640_775/640.jpg"
          width={640}
          height={755}
          alt="recipe images"
        />
      </div>
      {/* </section> */}
    </Grid>
    <Grid
      type="footer"
      style={{ color: palette.neutral[100], gridTemplateRows: "auto auto" }}
    >
      <Content
        styles={css`
          grid-row-start: 1;
          font-family: ${fonts.body};
        `}
      >
        <nav style={{ gridColumn: "content" }}>
          (Need to add the Navigation links here)
        </nav>
      </Content>
      <div
        css={css`
          grid-column: content;
          font-family: ${fonts.textSans};
          font-weight: ${fontWeights.regular};
          font-size: 12px;
          margin-top: ${space[2]}px;
        `}
      >
        © 2023 Guardian News and Media Limited or its affiliated companies. All
        rights reserved.
      </div>
      <Lines bottom={true} colour={palette.brand[600]} />
    </Grid>
  </>
);

export default Home;
