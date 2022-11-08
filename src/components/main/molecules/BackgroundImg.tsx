import styled from "styled-components";
import Image from "next/image";

const BackgroundImg = () => {
  return (
    <Box>
      <div className="darkFilter" />
      <ImgWrap>
        <Img src="/assets/images/main_img.png" layout="fill" alt="mainImg" />
      </ImgWrap>
      <div className="fadeOutFilter" />
    </Box>
  );
};

export default BackgroundImg;

const Box = styled.div`
  position: relative;
  margin-top: -2rem;
  margin-left: -4rem;
  width: 98vw;

  .darkFilter {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: radial-gradient(rgba(20, 20, 20, 0.2), rgba(20, 20, 20, 1));
  }

  .fadeOutFilter {
    position: absolute;
    background: linear-gradient(to top, rgba(20, 20, 20), rgba(20, 20, 20, 0));
    bottom: 0;
    width: 100%;
    height: 10rem;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  position: relative;
  & > span {
    position: unset !important;
  }
`;

const Img = styled(Image)`
  height: auto !important;
  position: relative !important;
`;
