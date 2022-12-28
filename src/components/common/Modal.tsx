import { useEffect, useRef, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

import { clickOutside } from "@utils/display";
import CloseIcon from "@images/close_icon.svg";

interface IProps {
  children: ReactNode;
  isStatic?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

type BoxPropsType = {
  isStatic?: boolean;
};

const Modal = ({ children, isStatic, setIsOpen }: IProps) => {
  const boxRef = useRef<HTMLDivElement>(null);

  const onCloseModal = () => setIsOpen(false);

  useEffect(() => {
    const onClickHandler = ({ target }: Event) => {
      if (!boxRef.current || !target) return;
      clickOutside(target, boxRef.current, setIsOpen);
    };

    document.addEventListener("mousedown", onClickHandler);
    return () => document.removeEventListener("mousedown", onClickHandler);
  }, [boxRef, setIsOpen]);

  return (
    <Background>
      <Box ref={boxRef} isStatic={isStatic}>
        <CloseBtn onClick={onCloseModal}>
          <CloseIcon fill={theme.palette.light_gray} />
        </CloseBtn>
        <div className="content">{children}</div>
      </Box>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 1000;
`;

const Box = styled.div<BoxPropsType>`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  margin: 4rem;
  min-width: ${(props) => !props.isStatic && "30rem"};
  min-height: ${(props) => !props.isStatic && "16rem"};
  background: ${theme.palette.dark_gray};
  padding: 2rem 3rem;
  border-radius: 5px;

  .content {
    width: 100%;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;
