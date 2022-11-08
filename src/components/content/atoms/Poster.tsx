import styled from "styled-components";
import Image from "next/image";

const Poster = () => {
  return (
    <ImageWrap>
      <Image
        src="/assets/images/poster_img.jpg"
        alt="posterImg"
        layout="fill"
      />
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
