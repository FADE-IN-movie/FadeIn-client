import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";

import Header from "@components/common/Header";
import Layout from "@components/common/Layout";
import Footer from "@components/common/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Header />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
