import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";

import Auth from "@components/auth/Auth";
import Header from "@components/common/Header";
import Layout from "@components/common/Layout";
import Footer from "@components/common/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script src="https://accounts.google.com/gsi/client" async defer />
      <Script
        src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2-nopolyfill.js"
        async
      />
      <RecoilRoot>
        <RecoilNexus />
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Auth />
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
