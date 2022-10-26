import styled from "styled-components";

import PrevIcon from "@images/prev_arrow_icon.svg";
import NextIcon from "@images/next_arrow_icon.svg";

interface IProps {
  currentYM: string;
  onClickPrev: () => void;
  onClickNext: () => void;
}

function Control({ currentYM, onClickPrev, onClickNext }: IProps) {
  return (
    <Box>
      <button className="btn" onClick={onClickPrev}>
        <PrevIcon width="1rem" fill="white" />
      </button>
      <span>{currentYM}</span>
      <button className="btn" onClick={onClickNext}>
        <NextIcon width="1rem" fill="white" />
      </button>
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
    padding: 0.7rem 1.3rem 0.3rem 1.3rem;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
