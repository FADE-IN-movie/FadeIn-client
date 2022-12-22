import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";
import { SkeletonTheme } from "react-loading-skeleton";

import Alert from "@components/common/Alert";
import Auth from "@components/auth/Auth";
import Layout from "@components/common/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
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
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js"
        integrity="sha384-eKjgHJ9+vwU/FCSUG3nV1RKFolUXLsc6nLQ2R1tD0t4YFPCvRmkcF8saIfOZNWf/"
        crossOrigin="anonymous"
      />
      <RecoilRoot>
        <RecoilNexus />
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <SkeletonTheme baseColor="#2e2e2e" highlightColor="#444">
            <Auth />
            <Alert />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SkeletonTheme>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
