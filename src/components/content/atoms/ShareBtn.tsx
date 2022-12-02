import { ReactNode } from "react";
import Image from "next/image";
import styled from "styled-components";

import { useSetRecoilState } from "recoil";
import { isShareModalOpenState } from "@states/contents";

interface IProps {
  children: ReactNode;
  imgUrl: string;
  handleClick: () => void;
}

const ShareBtn = ({ children, imgUrl, handleClick }: IProps) => {
  const setIsShareModalOpen = useSetRecoilState(isShareModalOpenState);

  const onClickBtn = () => {
    handleClick();
    setIsShareModalOpen(false);
  };

  return (
    <Button onClick={onClickBtn}>
      <div className="imageWrap">
        <Image src={imgUrl} layout="fill" alt="shareIcon" />
      </div>
      <span>{children}</span>
    </Button>
  );
};

export default ShareBtn;

const Button = styled.button`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .imageWrap {
    position: relative;
    width: 5rem;
    height: 5rem;
  }

  > span {
    width: max-content;
    word-break: keep-all;
    word-wrap: break-word;
  }
`;
