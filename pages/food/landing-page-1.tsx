import { css } from "@emotion/react";
import { Button, Footer } from "@guardian/source-react-components";

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
