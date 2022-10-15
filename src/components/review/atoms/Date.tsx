import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface IProps {
  children: ReactNode;
  isToday?: boolean;
}

type DatePropsType = {
  isToday?: boolean;
  isValid: boolean;
};

function Date({ children, isToday }: IProps) {
  return (
    <Td isToday={isToday} isValid={children !== ""}>
      <div>{children}</div>
    </Td>
  );
}

export default Date;

const Td = styled.td<DatePropsType>`
  font-size: 1.2rem;
  padding: 0.1rem 0.1rem;
  border-radius: 50%;

  div {
    padding: 1rem;
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
      div {
        background: #ffd255;
        border-radius: 50%;
        color: white;
      }
    `}
`;
