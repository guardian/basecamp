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
          grid-row-start: 1;
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
          grid-column: content;
          grid-row-start: 2;
          font-family: ${fonts.headline};
          font-weight: 900;
          display: flex;
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
      <Lines top={true} colour={palette.brand[600]} gridRowStart={2} />
    </Grid>

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
