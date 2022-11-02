import styled from "styled-components";
import Image from "next/image";

import { IMovieInfo } from "@typings/info";

interface IProps {
  info: IMovieInfo;
  width?: number;
}

type TitlePropsType = {
  isDigit?: boolean;
};

type CardPropsType = {
  width?: number;
};

function InfoCard({ info }: IProps) {
  return (
    <Container>
      <div>
        <CardFront>
          <ImageWrap>
            <Image
              src="/assets/images/poster_img.jpg"
              className="autoImg"
              layout="fill"
              alt="posterImg"
            />
          </ImageWrap>
        </CardFront>
        <CardBack>
          <h3 className="backTitle">{info.title}</h3>
          <span className="genres">{info.genres.join(", ")}</span>
          <p className="overview">{info.overview}</p>
        </CardBack>
      </div>
      <InfoBox>
        <div className="rank">{info.rank}</div>
        <Title isDigit={info.rank && info.rank < 10 ? true : false}>
          {info.title}
        </Title>
      </InfoBox>
    </Container>
  );
}

export default InfoCard;

const CardBack = styled.div<CardPropsType>`
  opacity: 0;
  position: absolute;
  height: calc(100% - 1.6em);
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  z-index: 1;
  border-radius: 5px;
  padding: 2rem 1.8rem;

  .backTitle {
    color: #ffffff;
    font-size: 1.1em;
    line-height: 1.2;
    margin-bottom: 0.3em;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .genres {
    display: inline-block;
    color: #c3c3c3;
    font-size: 0.85em;
    margin-bottom: 0.8em;
  }

  .overview {
    color: #a4a4a4;
    font-size: 0.75em;
    line-height: 1.35;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const CardFront = styled.div`
  width: 100%;
`;

const Container = styled.div`
  position: relative;
  cursor: pointer;

  .cardContainer {
    border: 1px solid gray;
  }

  @media screen and (min-width: 1651px) {
    width: calc(12.5% - 0.9rem);
  }
  @media screen and (max-width: 1650px) {
    width: calc(14.25% - 0.85rem);
  }
  @media screen and (max-width: 1400px) {
    width: calc(16.67% - 0.85rem);
  }
  @media screen and (max-width: 1200px) {
    width: calc(20% - 0.85rem);
  }
  @media screen and (max-width: 950px) {
    width: calc(25% - 0.85rem);
  }
  @media screen and (max-width: 720px) {
    width: calc(33.3% - 0.85rem);
  }
  @media screen and (max-width: 500px) {
    width: calc(50% - 0.85rem);
  }
  @media screen and (max-width: 300px) {
    width: 100%;
  }

  &:hover {
    ${CardBack} {
      opacity: 1;
    }
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;

  & > span {
    position: unset !important;
    & .autoImg {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  }
`;

const InfoBox = styled.div`
  display: flex;

  .rank {
    color: #f1f1f1;
    font-size: 3em;
    font-weight: bold;
    margin: -0.45em 1rem 0 0.2rem;
    z-index: 3;
    text-shadow: 5px 0px 5px rgba(0, 0, 0, 0.5);
  }
`;

const Title = styled.span<TitlePropsType>`
  font-size: 0.9em;
  color: #bbbbbb;
  margin-top: 0.7em;
  width: ${(props) => (props.isDigit ? "12.5rem" : "10rem")};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
