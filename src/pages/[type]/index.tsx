import type { NextPage } from "next";
import styled from "styled-components";

import SEO from "@components/common/SEO";
import MainPageTemplate from "@components/main/templates/MainPageTemplate";

const Home: NextPage = () => {
  return (
    <Wrap>
      <SEO />
      <MainPageTemplate />
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div``;
