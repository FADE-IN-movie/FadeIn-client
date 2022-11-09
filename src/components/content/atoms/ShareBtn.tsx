import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

const ShareBtn = ({ children }: IProps) => {
  return <button>{children}</button>;
};

export default ShareBtn;
