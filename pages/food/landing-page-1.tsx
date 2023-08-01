import { css } from "@emotion/react";
import { Button } from "@guardian/source-react-components";
import {
  fontWeights,
  fonts,
  palette,
  space,
} from "@guardian/source-foundations";
import { Image } from "../../shared/Image";
import Head from "next/head";
import {
  Content,
  Grid,
  LeftColumn,
  MainColumn,
  Lines,
} from "../../shared/Grid";
import { Header } from "../../shared/Header";
import { Footer } from "../../shared/Footer";

const Home = () => (
  <>
    <Head>
      <title>Basecamp | Guardian</title>
    </Head>

    <Header />

    <Grid type="main" style={{ backgroundColor: palette.neutral[100] }}>
      <LeftColumn>
        <div
          css={css`
            font-family: ${fonts.body};
            padding-top: ${space[3]}px;
          `}
        >
          Content for the left column
        </div>
      </LeftColumn>

      <MainColumn
        styles={css`
          min-height: 70dvh;
        `}
      >
        <h1
          css={css`
            margin: 0;
            padding-top: ${space[2]}px;
            font-family: ${fonts.headline};
            font-weight: 500;
          `}
        >
          Let’s get cooking!
        </h1>

        <p
          css={css`
            font-family: ${fonts.body};
          `}
        >
          Some text about this page…
        </p>

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

        <ol
          css={css`
            font-family: ${fonts.body};
          `}
        >
          <li>First thing</li>
          <li>Second thing</li>
          <li>Third thing</li>
        </ol>
      </MainColumn>
      <Lines />
    </Grid>

    <Footer />
  </>
);

export default Home;
