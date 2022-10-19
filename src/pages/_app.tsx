import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";

import Header from "@components/common/Header";
import Layout from "@components/common/Layout";
import Footer from "@components/common/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>FADE-IN</title>
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
