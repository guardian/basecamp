import { css } from "@emotion/react";
import { Button, SvgGuardianLogo } from "@guardian/source-react-components";
import {
  fontWeights,
  fonts,
  from,
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
