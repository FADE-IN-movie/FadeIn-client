import styled from "styled-components";
import Image from "next/image";

function BackgroundImg() {
  return (
    <Box>
      <div className="darkFilter"></div>
      <ImgWrap>
        <Img src="/assets/images/main_img.jpg" layout="fill" alt="mainImg" />
      </ImgWrap>
    </Box>
  );
}

export default BackgroundImg;

const Box = styled.div`
  position: relative;
  margin-top: -2rem;
  margin-left: -4rem;
  width: calc(100% + 8rem);

  .darkFilter {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: radial-gradient(rgba(20, 20, 20, 0.2), rgba(20, 20, 20, 1));
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
