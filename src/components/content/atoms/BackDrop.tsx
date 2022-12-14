import Image from "next/image";
import styled from "styled-components";

import useContentDetail from "@hooks/useContentDetail";

const BackDrop = () => {
  const { data } = useContentDetail();

  return (
    <Box>
      <ImageWrap>
        {data?.backdrop && (
          <Image
            src={data.backdrop}
            className="autoImg"
            layout="fill"
            alt="backDropImg"
          />
        )}
      </ImageWrap>
    </Box>
  );
};

export default BackDrop;

const Box = styled.div`
  overflow: hidden;
  width: 100vw;
  margin-left: -4.2rem;
  margin-top: -3.1rem;
  height: 22vw;
`;

const ImageWrap = styled.div`
  width: calc(100vw + 4rem);
  position: relative;

  & > span {
    position: unset !important;

    &:after {
      position: absolute;
      display: block;
      width: 100%;
      height: 22vw;
      content: "";
      top: 0;
      left: 0;
      box-shadow: inset -2rem 0 10px 15px #141414;
    }

    .autoImg {
      position: relative !important;
      object-fit: contain !important;
      height: auto !important;
      filter: blur(0.6rem);
    }
  }
`;
