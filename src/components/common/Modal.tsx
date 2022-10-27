import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

import CloseIcon from "@images/close_icon.svg";

interface IProps {
  children: ReactNode;
  isStatic?: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

type BoxPropsType = {
  isStatic?: boolean;
};

function Modal({ children, isStatic, isOpen, setIsOpen }: IProps) {
  const onCloseModal = () => setIsOpen(false);

  if (!isOpen) return null;
  return (
    <Background>
      <Box isStatic={isStatic}>
        <CloseBtn onClick={onCloseModal}>
          <CloseIcon fill={theme.palette.light_gray} />
        </CloseBtn>
        <div className="content">{children}</div>
      </Box>
    </Background>
  );
}

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
  z-index: 20;
`;

const Box = styled.div<BoxPropsType>`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  min-width: ${(props) => !props.isStatic && "34rem"};
  min-height: ${(props) => !props.isStatic && "18rem"};
  background: ${theme.palette.dark_gray};
  padding: 3rem 4rem;
  border-radius: 5px;
  z-index: 21;

  .content {
    width: 100%;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;
