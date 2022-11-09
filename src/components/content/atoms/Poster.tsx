import styled from "styled-components";
import Image from "next/image";

import { useRecoilValue } from "recoil";
import { contentDetailInfoState } from "@states/contents";

const Poster = () => {
  const { data } = useRecoilValue(contentDetailInfoState);

  return (
    <ImageWrap>
      <Image src={data.poster} alt="posterImg" layout="fill" />
    </ImageWrap>
  );
};

export default Poster;

const ImageWrap = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  height: 25rem;
  width: 17.5rem;
  border: 1px solid white;
`;
