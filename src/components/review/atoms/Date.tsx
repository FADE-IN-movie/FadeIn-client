import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface IProps {
  children: ReactNode;
  isToday?: boolean;
  isReviewExist?: boolean;
}

type DatePropsType = {
  isToday?: boolean;
  isValid?: boolean;
  isReviewExist?: boolean;
};

function Date({ children, isToday, isReviewExist }: IProps) {
  return (
    <Td
      isToday={isToday}
      isValid={children !== ""}
      isReviewExist={isReviewExist}
    >
      <div className="text">{children}</div>
      {isReviewExist && <div className="sign" />}
    </Td>
  );
}

export default Date;

const Td = styled.td<DatePropsType>`
  position: relative;
  font-size: 1.05rem;
  padding: 0.3rem 0.4rem 0.2rem 0.4rem;
  border-radius: 50%;

  .text {
    padding: 0.55rem;
    margin: 0.3rem;
  }

  .sign {
    position: absolute;
    /* left: 45%;
    bottom: 0.3rem; */
    left: 69%;
    top: 10%;
    border-radius: 50%;
    width: 0.4rem;
    height: 0.4rem;
    background: #ff5d5d;
  }

  ${(props) =>
    props.isValid &&
    css`
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    `}

  ${(props) =>
    props.isToday &&
    css`
      .text {
        background: #ffd255;
        border-radius: 50%;
        color: white;
      }
    `}
`;
