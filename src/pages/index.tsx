import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";

import StarRating from "@components/StarRating";
import SearchBar from "@components/common/SearchBar";

const Home: NextPage = () => {
  return (
    <Wrap>
      <StarRating />
      <SearchBar main width="43rem" />
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div``;
