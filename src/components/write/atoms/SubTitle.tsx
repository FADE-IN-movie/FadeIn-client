import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

interface IProps {
  children: ReactNode;
  isError?: boolean;
}

type TitlePropsType = {
  isError?: boolean;
};

const SubTitle = ({ children, isError }: IProps) => {
  return <Title isError={isError}>{children}</Title>;
};

export default SubTitle;

const Title = styled.h3<TitlePropsType>`
  font-size: 1.7rem;
  color: ${(props) => props.isError && `${theme.palette.red}`};
`;
