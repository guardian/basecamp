import { css } from "@emotion/react";
import { fonts, from, palette } from "@guardian/source-foundations";
import { SvgGuardianLogo } from "@guardian/source-react-components";
import { Grid, Lines } from "./Grid";

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
    top: 0;
    left: 0;
    width: 100%;
    border-top-width: 4px;
    border-top-style: solid;
    border-top-color: inherit;
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

export const Header = () => (
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
        style={{ borderColor: palette.news[500], paddingLeft: 10 }}
        css={navLink}
        href="https://www.theguardian.com/news"
      >
        News
      </a>
      <a
        style={{ borderColor: palette.opinion[500] }}
        css={navLink}
        href="https://www.theguardian.com/commentisfree"
      >
        Opinion
      </a>
      <a
        style={{ borderColor: palette.sport[500] }}
        css={navLink}
        href="https://www.theguardian.com/sport"
      >
        Sport
      </a>
      <a
        style={{ borderColor: palette.culture[500] }}
        css={navLink}
        href="https://www.theguardian.com/culture"
      >
        Culture
      </a>
      <a
        style={{ borderColor: palette.lifestyle[500] }}
        css={navLink}
        href="https://www.theguardian.com/lifeandstyle"
      >
        Lifestyle
      </a>
    </nav>
    <Lines top={true} colour={palette.brand[600]} gridRowStart={2} />
  </Grid>
);
