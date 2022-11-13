import { ReactNode } from "react";
import styled from "styled-components";

import SubTitle from "../atoms/SubTitle";
import WarnText from "../atoms/WarnText";

interface IProps {
  title: string;
  warn?: string;
  children: ReactNode;
}
const FormItem = ({ title, warn, children }: IProps) => {
  return (
    <Box>
      <SubTitle>{title}</SubTitle>
      <div className="valueBox">
        {warn && <WarnText>{warn}</WarnText>}
        {children}
      </div>
    </Box>
  );
};

export default FormItem;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .valueBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
