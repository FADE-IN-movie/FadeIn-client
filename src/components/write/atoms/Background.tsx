import Image from "next/image";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { reviewDetailState } from "@states/reviews";

interface IProps {
  height: number;
}

const Background = ({ height }: IProps) => {
  const { content } = useRecoilValue(reviewDetailState);

  return (
    <ImageWrap height={height}>
      <Image src={content.backdrop || ""} layout="fill" alt="backgroundImg" />
    </ImageWrap>
  );
};

export default Background;

const ImageWrap = styled.div<IProps>`
  position: absolute;
  top: 6rem;
  left: 0;
  width: 100vw;
  height: ${(props) => `${props.height - 0.5}px`};

  img {
    filter: blur(4rem);
    object-fit: fill;
  }
`;
