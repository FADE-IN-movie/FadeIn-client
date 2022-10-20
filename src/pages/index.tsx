import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";

import StarRating from "@components/StarRating";

const Home: NextPage = () => {
  return (
    <Wrap>
      <StarRating />
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div``;
