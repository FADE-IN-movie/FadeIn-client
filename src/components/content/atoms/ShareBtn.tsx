import { ReactNode } from "react";
import Image from "next/image";

import styled from "styled-components";

interface IProps {
  children: ReactNode;
  imgUrl: string;
  handleClick: () => void;
}

const ShareBtn = ({ children, imgUrl, handleClick }: IProps) => {
  return (
    <Button onClick={handleClick}>
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
    display: inline-block;
    width: 9rem;
    word-break: keep-all;
    word-wrap: break-word;
  }
`;
