import { css } from "@emotion/react";
import {
  fonts,
  from,
  palette,
  space,
} from "@guardian/source-foundations";
import Head from "next/head";
import { Bullet } from "../../shared/Bullet";
import { Grid, Lines } from "../../shared/Grid";
import { Image } from "../../shared/Image";
import { Header } from "../../shared/Header";
import Footer from "../../shared/footer/footer";

const Home = () => (
  <>
    <Head>
      <title>Basecamp | Guardian</title>
    </Head>

    <Header />
    <Grid style={{ backgroundColor: palette.neutral[ 100 ] }} type="main">
      {from.desktop && <Lines />}
      <div
        css={css`
            grid-column-start: content;
            grid-column-end: content;
            grid-row-start: 1;
            grid-row-end: 3 span;
            margin: 0 -10px;
            ${from.mobileLandscape} {
              margin: 0 -20px;
            }
            ${from.tablet} {
              margin: 0 -10px;
            }
            ${from.desktop} {
              grid-row-start: content;
              display: none;
            }
          `}
      >
        <Image
          src="https://media.guim.co.uk/f15e099752e2d2150c2cd013da43fb004e879183/0_0_700_420/700.jpg"
          width={700}
          height={420}
          alt="recipe images mobile"
        />
      </div>
      <div
        css={css`
          grid-row-start: 1;
          grid-column-start: content;
          grid-column-end: content;
          font-family: ${fonts.body};
          font-size: 17px;
          line-height: 130%;
          padding: ${space[ 2 ]}px;
          grid-row-start: 5;
          grid-row-end: 3 span;
          ${from.desktop} {
            grid-row-start: 1;
            grid-row-end: content;
            grid-column-end: span 7;
            padding-left: ${space[ 4 ]}px;
            padding-right: ${space[ 4 ]}px;
          }
          min-width: 50%;
        `}
      >
        <h1
          css={css`
            font-family: ${fonts.titlepiece};
            font-size: 42px;
            ${from.tablet} {
              font-size: 50px;
            }
            font-weight: 700;
            line-height: 115%;
            margin-top: ${space[ 4 ]}px;
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
          src="https://media.guim.co.uk/a619525a9e0eee22889cb2321157477903223313/0_0_640_775/640.jpg"
          width={640}
          height={755}
          alt="recipe images"
        />
      </div>
    </Grid>
    {/* <Grid type='main' style={{
      backgroundColor: palette.brand[400],
      gridTemplateRows: "auto 38px",
      rowGap: "12px",
    }}>
       */}
    <Footer />
    {/* </Grid> */}
  </>
);

export default Home;
