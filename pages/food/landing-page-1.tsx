import { css } from "@emotion/react";
import { Button, Footer } from "@guardian/source-react-components";
import { Image } from "../../shared/Image";

const Home = () => (
  <>
    <main
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <h1>Let’s get cooking</h1>

      <p>Some text about this page</p>

      <Button>Click me</Button>

      <Image
        src={
          "https://media.guim.co.uk/1a863deb14a607837e27466c05939aa98c410bb5/0_651_3717_3717/3717.jpg"
        }
        alt="Ottolenghi’s salad"
        width={300}
        height={300}
      />

      <ol>
        <li>First thing</li>
        <li>Second thing</li>
        <li>Third thing</li>
      </ol>
    </main>
    <Footer />
  </>
);

export default Home;
