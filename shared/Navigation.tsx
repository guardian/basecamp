import { css } from "@emotion/react";
import { fonts, from, palette } from "@guardian/source-foundations";

const navLink = css`
  color: ${palette.neutral[100]};
  text-decoration: none;
  box-sizing: border-box;

  padding: 9px 5px 5px;
  position: relative;
  overflow: visible;

  font-size: 15.4px;

  ${from.phablet} {
    font-size: 18px;
  }

  ${from.tablet} {
    font-size: 22px;
    padding-right: 20px;
  }

  ${from.desktop} {
    grid-column-end: span 2;
    padding-top: 5px;
  }

  ::after {
    content: "";
    position: absolute;
    right: -10px;
    top: 0;
    height: 70%;
    border-right: 1px solid ${palette.brand[600]};
  }
`;

const pillarColour = css`
  position: absolute;
  top: 0;
  left: -10px;
  right: -10px;
  height: 4px;
  transform-origin: top;
  transform: scaleY(0);
  transition: transform 0.3s;

  *:hover > & {
    transform: scaleY(1);
  }
`;

const pillars = [
  { name: "News", colour: palette.news[500], path: "/news" },
  { name: "Opinion", colour: palette.opinion[500], path: "/commentisfree" },
  { name: "Sport", colour: palette.sport[500], path: "/sport" },
  { name: "Culture", colour: palette.culture[500], path: "/culture" },
  { name: "Lifestyle", colour: palette.lifestyle[500], path: "/lifeandstyle" },
] as const satisfies ReadonlyArray<{
  name: string;
  colour: string;
  path: `/${string}`;
}>;

type Props = {
  gridRowStart: number;
};
export const Navigation = ({ gridRowStart }: Props) => (
  <nav
    style={{ gridRowStart }}
    css={css`
      grid-column: content;

      font-family: ${fonts.headline};
      font-weight: 900;

      display: grid;
      grid-template-columns: repeat(5, auto) 1fr;
      gap: 20px;

      ${from.desktop} {
        grid-template-columns: repeat(10, 60px) 1fr;
      }
    `}
  >
    {pillars.map(({ name, path, colour }, index) => (
      <a key={path} css={navLink} href={`https://www.theguardian.com${path}`}>
        <div
          style={{
            backgroundColor: colour,
            left: index === 0 ? "-19px" : undefined,
          }}
          css={pillarColour}
        />
        {name}
      </a>
    ))}
  </nav>
);
