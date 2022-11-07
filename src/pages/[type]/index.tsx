import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { useSetRecoilState } from "recoil";
import { currentPageState } from "@states/pages";

import SEO from "@components/common/SEO";
import MainPageTemplate from "@components/main/templates/MainPageTemplate";

const Home: NextPage = () => {
  const setCurrentPage = useSetRecoilState(currentPageState);
  const {
    query: { type },
  } = useRouter();

  useEffect(() => {
    if (type === "movie" || type === "tv") setCurrentPage(type as string);
  }, [type, setCurrentPage]);

  return (
    <Wrap>
      <SEO />
      <MainPageTemplate />
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div``;