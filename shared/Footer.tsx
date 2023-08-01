import {
  fontWeights,
  fonts,
  palette,
  space,
} from "@guardian/source-foundations";
import { Grid, Lines } from "./Grid";
import { css } from "@emotion/react";
import { Navigation } from "./Navigation";

export const Footer = () => (
  <Grid
    type="footer"
    style={{ color: palette.neutral[100], gridTemplateRows: "auto auto" }}
  >
    <Navigation gridRowStart={1} />
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
);
