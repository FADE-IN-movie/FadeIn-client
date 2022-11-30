import { ReactNode } from "react";
import styled from "styled-components";

import SubTitle from "../atoms/SubTitle";
import WarnText from "../atoms/WarnText";

interface IProps {
  required?: boolean;
  title: string;
  warn?: string;
  children: ReactNode;
}
const FormItem = ({ required, title, warn, children }: IProps) => {
  return (
    <Box>
      <div className="titleBox">
        <SubTitle>{title}</SubTitle>
        {required && <span className="requiredMark">*</span>}
      </div>
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

  .titleBox {
    display: flex;
    align-items: flex-end;
    gap: 0.3rem;

    .requiredMark {
      font-size: 1.8rem;
      color: #c0c0c0;
    }
  }

  .valueBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
