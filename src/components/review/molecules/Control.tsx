import React from "react";
import styled from "styled-components";

import PrevBtn from "@images/prev_arrow_icon.svg";
import NextBtn from "@images/next_arrow_icon.svg";

interface IProps {
  onClickPrev: () => void;
  onClickNext: () => void;
}

function Control({ onClickPrev, onClickNext }: IProps) {
  return (
    <Box>
      <PrevBtn className="btn" onClick={onClickPrev}>
        &lt;
      </PrevBtn>
      <NextBtn className="btn" onClick={onClickNext}>
        &gt;
      </NextBtn>
    </Box>
  );
}

export default Control;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .btn {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
