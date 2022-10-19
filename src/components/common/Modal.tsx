import React, { ReactNode } from "react";
import styled from "styled-components";

import Image from "next/image";

interface IProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function Modal({ children, isOpen, setIsOpen }: IProps) {
  const onCloseModal = () => setIsOpen(false);

  if (!isOpen) return null;
  return (
    <Background>
      <Box>
        <CloseBtn onClick={onCloseModal}>
          <Image
            src="/assets/images/close_icon.svg"
            width="15"
            height="15"
            alt="closeIcon"
          />
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
  z-index: 5;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  min-width: 34rem;
  min-height: 18rem;
  background: white;
  padding: 3rem 4rem;
  border-radius: 10px;
  z-index: 6;

  .content {
    width: 100%;
    margin-top: 1.5rem;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;
