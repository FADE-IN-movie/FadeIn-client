import { ReactNode } from "react";
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: normal;
  overflow: hidden;
  height: calc(1.4 * 3rem);
  font-size: 1.4rem;
  color: ${theme.palette.light_gray};

  @media screen and (min-width: 801px) {
    width: calc(100% - 38rem);
  }
`;
