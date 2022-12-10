import styled from "styled-components";
import { theme } from "@styles/theme";

import CustomBtn from "./CustomBtn";
import Modal from "./Modal";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  mainText: string;
  subText?: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onClickAccept: () => void;
}

const ConfirmModal = ({
  mainText,
  subText,
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
            확인
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
  gap: 3rem;
  padding: 2rem 2rem 1rem 2rem;

  .main {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  .sub {
    font-size: 1.3rem;
    color: ${theme.palette.light_gray};
  }

  .btnBox {
    display: flex;
    gap: 1rem;
  }
`;
