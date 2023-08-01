import { css } from "@emotion/react";
import { from, palette } from "@guardian/source-foundations";
import { SvgGuardianLogo } from "@guardian/source-react-components";
import { Grid, Lines } from "./Grid";
import { Navigation } from "./Navigation";

export const Header = () => (
  <Grid
    style={{
      backgroundColor: palette.brand[400],
      gridTemplateRows: "35px auto auto",
      rowGap: "12px",
    }}
    type="header"
  >
    <div
      css={css`
        grid-row-start: 1;
        grid-column: viewport;
        background-color: ${palette.brand[300]};
      `}
    />
    <div
      css={css`
        width: 225px;
        grid-column: -4 / span 2;
        grid-row-start: 2;
        justify-self: end;

        ${from.desktop} {
          width: 300px;
          grid-column: -6 / span 3;
        }
      `}
    >
      <SvgGuardianLogo textColor={palette.neutral[100]} />
    </div>
    <Navigation gridRowStart={3} />
    <Lines top={true} colour={palette.brand[600]} gridRowStart={3} />
  </Grid>
);
