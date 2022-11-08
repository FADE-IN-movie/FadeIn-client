import Image from "next/image";
import styled from "styled-components";

interface IProps {
  info: any;
}

const CastInfoBox = ({ info }: IProps) => {
  return (
    <Box>
      <ImageWrap>
        <Image src={info.imgUrl} layout="fill" alt="castImg" />
      </ImageWrap>
      <div className="infoBox">
        <span className="name">{info.name}</span>
        <span className="role">{info.role} 역</span>
      </div>
    </Box>
  );
};

export default CastInfoBox;

const Box = styled.div`
  display: flex;
  background: #222222;
  border-radius: 4px;

  .infoBox {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 0.7rem;
    padding: 1.5rem;

    .name {
      font-size: 1.3rem;
      font-weight: 700;
    }

    .role {
      color: #bbbbbb;
    }
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 7rem;
  height: 9rem;

  img {
    border-radius: 3px;
  }
`;
