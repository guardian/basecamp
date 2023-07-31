import { ThemeProvider, css } from "@emotion/react";
import { brandAlt, fonts, from, neutral, palette, textSans } from "@guardian/source-foundations";
import { LinkButton, SvgArrowRightStraight, SvgGuardianLogo, buttonThemeReaderRevenue } from "@guardian/source-react-components";
import { Grid, Lines } from "./Grid";
import { footerMenuStyles, footerMenuUlStyles, footerMenuLiStyles, footerLinkStyles, supportStyles, supportTitleStyles, supportButtonContainerStyles, footerMenuStylesSecond } from "./footer/footer";
import { footerLinks } from "./footer/footerlinks";
import { SyntheticEvent } from "react";

const emailSignUpStyles = css`
grid-column-start: content;
grid-row-start: 1;
  padding: 0;
  border: 0;
  width: 100%;
  margin: 0;
  ${from.leftCol} {
    width: 340px;
  }
  ${from.wide} {
    width: 460px;
  }
`;

const fillEmailSignup = (_: SyntheticEvent<HTMLIFrameElement>) => {
    // Placeholder method to autofill user email when the iframe is hosted on the same hostname
    return;
};


const navLink = css`
  color: ${palette.neutral[ 100 ]};
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
    border-right: 1px solid ${palette.brand[ 600 ]};
  }

  :hover {
    ::before {
      transform: translateY(0);
    }
  }
`;

const emailSignUpIframeStyles = css`
  min-height: 150px;
`

const privacyButtonCss = css`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  display: inline-block;
  padding: 6px 0;
  color: ${neutral[ 100 ]};
  ${textSans.medium()};
  font-size: 16px;
  line-height: 19.2px;
  text-decoration: none;
  :hover {
    color: ${brandAlt[ 400 ]};
    cursor: pointer;
  }
`

export const Footer = () => {
    return (
        <div css={css`grid-column-start:content; grid-column-end: content;`}>
            <nav
                css={css`
                grid-column: content;
                grid-row-start: 1;
                font-family: ${fonts.headline};
                font-weight: 900;
                display: flex;
      `}
            >
                <a
                    style={{ borderColor: palette.news[ 500 ], paddingLeft: 10 }}
                    css={navLink}
                    href="https://www.theguardian.com/news"
                >
                    News
                </a>
                <a
                    style={{ borderColor: palette.opinion[ 500 ] }}
                    css={navLink}
                    href="https://www.theguardian.com/commentisfree"
                >
                    Opinion
                </a>
                <a
                    style={{ borderColor: palette.sport[ 500 ] }}
                    css={navLink}
                    href="https://www.theguardian.com/sport"
                >
                    Sport
                </a>
                <a
                    style={{ borderColor: palette.culture[ 500 ] }}
                    css={navLink}
                    href="https://www.theguardian.com/culture"
                >
                    Culture
                </a>
                <a
                    style={{ borderColor: palette.lifestyle[ 500 ] }}
                    css={navLink}
                    href="https://www.theguardian.com/lifeandstyle"
                >
                    Lifestyle
                </a>
            </nav>
            <Lines bottom={true} colour={palette.brand[ 600 ]} gridRowStart={1} left={true} right={true}/>
            <Grid type="main">
                <Lines />
            <div css={emailSignUpStyles}>
                <iframe
                    title="Guardian Email Sign-up Form"
                    src={`https://www.theguardian.com/email/form/footer/today-uk`}
                    scrolling="no"
                    seamless={false}
                    frameBorder="0"
                    data-form-success-desc="We will send you our picks of the most important headlines tomorrow morning."
                    data-node-uid="2"
                    height="86px"
                    onLoad={(emailForm) => fillEmailSignup(emailForm)}
                    css={emailSignUpIframeStyles} />
            </div>
            {footerLinks.map((linkList, i) => (
                <ul key={i} css={footerMenuUlStyles}>
                    {linkList.map(({ title, link, titleUSA, privacyCmp }) => (
                        <li key={title} css={footerMenuLiStyles}>
                            <a href={link} css={footerLinkStyles}>
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
            ))}
            <div css={supportStyles}>
                <div css={supportTitleStyles}>Support The&nbsp;Guardian</div>
                <ThemeProvider theme={buttonThemeReaderRevenue}>
                    <div css={supportButtonContainerStyles}>
                        <LinkButton
                            iconSide="right"
                            icon={<SvgArrowRightStraight />}
                            nudgeIcon={true}
                            size="small"
                            css={css`
                        padding: 0 14px;
                      `}
                            href="https://support.theguardian.com/uk/contribute"
                        >
                            Contribute
                        </LinkButton>
                    </div>
                    <LinkButton
                        iconSide="right"
                        icon={<SvgArrowRightStraight />}
                        nudgeIcon={true}
                        size="small"
                        css={css`
                      padding: 0 14px;
                    `}
                        href="https://support.theguardian.com/uk/subscribe"
                    >
                        Subscribe
                    </LinkButton>
                </ThemeProvider>
            </div>
            </Grid>
        </div>)
}
