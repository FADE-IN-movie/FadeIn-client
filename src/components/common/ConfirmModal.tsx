import { MouseEvent } from "react";

import styled from "styled-components";
import { theme } from "@styles/theme";

import CustomBtn from "./CustomBtn";
import Modal from "./Modal";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  mainText: string;
  subText?: string;
  acceptText?: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onClickAccept: (e: MouseEvent<HTMLButtonElement>) => void | (() => void);
}

const ConfirmModal = ({
  mainText,
  subText,
  acceptText,
  setIsOpen,
  onClickAccept,
}: IProps) => {
  const onClickCancelBtn = () => setIsOpen(false);

  return (
    <Modal setIsOpen={setIsOpen}>
      <ModalBox>
        <div className="textBox">
          <p className="main">{mainText}</p>
          <p className="sub">{subText}</p>
        </div>
        <div className="btnBox">
          <CustomBtn color="#3F3F3F" onClickHandler={onClickCancelBtn}>
            취소
          </CustomBtn>
          <CustomBtn color={theme.primary_color} onClickHandler={onClickAccept}>
            {acceptText ? acceptText : "확인"}
          </CustomBtn>
        </div>
      </ModalBox>
    </Modal>
  );
};

export default ConfirmModal;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 0rem 1rem 0rem 1rem;
  margin-bottom: -1rem;
  /* border: 1px solid gray; */

  .main {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }

  .sub {
    font-size: 1.3rem;
    color: ${theme.palette.light_gray};
  }

  .btnBox {
    display: flex;
    gap: 1.5rem;
  }
`;
