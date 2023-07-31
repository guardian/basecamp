import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import "../shared/styles.css";
import "../shared/fonts.css";

const cache = createCache({ key: "next" });

const App = ({ Component, pageProps }: AppProps) => (
  <CacheProvider value={cache}>
    <Component {...pageProps} />
  </CacheProvider>
);

export default App;
