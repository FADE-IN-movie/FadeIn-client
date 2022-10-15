import React from "react";
import styled from "styled-components";

import PrevBtn from "@images/prev_arrow_icon.svg";
import NextBtn from "@images/next_arrow_icon.svg";

interface IProps {
  currentYM: string;
  onClickPrev: () => void;
  onClickNext: () => void;
}

function Control({ currentYM, onClickPrev, onClickNext }: IProps) {
  return (
    <Box>
      <PrevBtn className="btn" onClick={onClickPrev}>
        &lt;
      </PrevBtn>
      <span>{currentYM}</span>
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
  align-items: center;
  padding: 0.5rem 0;
  margin: 1rem 0;

  span {
    font-size: 1.4rem;
    font-weight: 700;
  }

  .btn {
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
