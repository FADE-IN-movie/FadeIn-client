import { useEffect, useState, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

interface IProps {
  children: ReactNode;
}

const Text = ({ children }: IProps) => {
  return <StyledText>{children}</StyledText>;
};

export default Text;

const StyledText = styled.span`
  font-size: 1.4rem;
  color: ${theme.palette.light_gray};

  @media screen and (min-width: 801px) {
    width: calc(100% - 38rem);
  }
`;
