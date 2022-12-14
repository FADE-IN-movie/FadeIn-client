import { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";

import SubTitle from "../atoms/SubTitle";
import WarnText from "../atoms/WarnText";
import { theme } from "@styles/theme";

interface IProps {
  required?: boolean;
  isNullError?: boolean;
  errorCnt?: number;
  title: string;
  warn?: string;
  children: ReactNode;
}

type BoxPropsType = {
  isError?: boolean;
};

const FormItem = ({
  required,
  errorCnt,
  isNullError,
  title,
  warn,
  children,
}: IProps) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxRef.current || errorCnt === 0 || errorCnt === undefined) return;
    boxRef.current.classList.add("vibrate");
  }, [errorCnt, boxRef]);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const removeClass = () => box.classList.remove("vibrate");
    box.addEventListener("animationend", removeClass);
    return () => box.removeEventListener("animationend", removeClass);
  }, []);

  return (
    <Wrap>
      <Box ref={boxRef} isError={isNullError}>
        <div className="titleBox">
          <SubTitle isError={isNullError}>{title}</SubTitle>
          {required && (
            <span
              className="requiredMark"
              style={{ color: isNullError ? `${theme.palette.red}` : "" }}
            >
              *
            </span>
          )}
        </div>
        <div className="valueBox">
          {warn && <WarnText>{warn}</WarnText>}
          {children}
        </div>
      </Box>
    </Wrap>
  );
};

export default FormItem;

const Wrap = styled.div`
  @keyframes vibration {
    from {
      margin-left: -1rem;
    }
    to {
      margin-left: 1rem;
    }
  }

  .vibrate {
    animation: vibration 0.2s;
  }
`;

const Box = styled.div<BoxPropsType>`
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
