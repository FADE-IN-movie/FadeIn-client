import styled from "styled-components";
import Image from "next/image";

import { useRecoilValue } from "recoil";
import { contentDetailInfoState } from "@states/contents";

interface IProps {
  width: string;
  height: string;
  outline?: boolean;
}

const Poster = ({ width, height, outline }: IProps) => {
  const { data } = useRecoilValue(contentDetailInfoState);

  return (
    <ImageWrap outline={outline} width={width} height={height}>
      <Image src={data.poster} alt="posterImg" layout="fill" />
    </ImageWrap>
  );
};

export default Poster;

const ImageWrap = styled.div<IProps>`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.outline && "1px solid white"};
`;
