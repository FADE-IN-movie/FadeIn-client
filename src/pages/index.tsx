import type { NextPage } from "next";
import styled from "styled-components";

import MainPageTemplate from "@components/main/templates/MainPageTemplate";

const Home: NextPage = () => {
  return (
    <Wrap>
      <MainPageTemplate />
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div``;
