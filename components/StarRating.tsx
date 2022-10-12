import React from "react";
import styled from "styled-components";

import Image from "next/image";

function StarRating() {
  return (
    <Box>
      <Background
        src="/images/star-background.png"
        alt="background"
        layout="fill"
      />
    </Box>
  );
}

export default StarRating;

const Box = styled.div`
  position: relative;
  width: 200px;
  height: 36px;
`;

const Background = styled(Image)``;
