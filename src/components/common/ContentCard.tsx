import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

import { IContentInfo } from "@typings/info";

interface IProps {
  info: IContentInfo;
  width?: number;
  responsive?: boolean;
}

type TitlePropsType = {
  digit?: number;
};

type CardPropsType = {
  responsive?: boolean;
};

type CardBackPropsType = {
  isRank: boolean;
};

const ContentCard = ({ info, responsive }: IProps) => {
  const router = useRouter();

  return (
    <Container
      responsive={responsive}
      onClick={() =>
        router.push({
          pathname: `/content`,
          query: { type: info.type, id: info.id },
        })
      }
    >
      <div>
        <CardFront>
          <ImageWrap>
            <Image
              src={info.poster}
              layout="fill"
              loading="lazy"
              alt="posterImg"
            />
          </ImageWrap>
        </CardFront>
        <CardBack isRank={info.rank !== undefined && info.rank > 0}>
          <h3 className="backTitle">{info.title}</h3>
          <span className="genre">{info.genre?.slice(0, 4).join(", ")}</span>
          <p className="overview">{info.overview}</p>
        </CardBack>
      </div>
      <InfoBox>
        {info.rank !== undefined && info.rank > 0 && (
          <div className="rank">{info.rank}</div>
        )}
        <Title digit={info.rank ? (info.rank < 10 ? 1 : 2) : 0}>
          {info.title}
        </Title>
      </InfoBox>
    </Container>
  );
};

export default ContentCard;

const CardBack = styled.div<CardBackPropsType>`
  opacity: 0;
  position: absolute;
  height: calc(100% - 1.5em);
  height: ${(props) => props.isRank && "calc(100% - 1.8em)"};
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  width: 100%;
  z-index: 1;
  border-radius: 5px;
  padding: 1.3em 1.1em;

  .backTitle {
    color: #ffffff;
    font-size: 1.1em;
    line-height: 1.2;
    margin-bottom: 0.1em;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .genre {
    display: inline-block;
    color: #c3c3c3;
    font-size: 0.8em;
    margin-bottom: 0.9em;
    line-height: 1.2;
  }

  .overview {
    color: #a4a4a4;
    font-size: 0.7em;
    line-height: 1.35;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const CardFront = styled.div`
  width: 100%;
  background: #222222;
  border-radius: 5px;
`;

const Container = styled.div<CardPropsType>`
  position: relative;
  flex-shrink: 0;
  cursor: pointer;
  width: 10em;

  &:hover {
    ${CardBack} {
      opacity: 1;
    }
  }
`;

const ImageWrap = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  height: 14.5em;
  cursor: pointer;
`;

const InfoBox = styled.div`
  display: flex;

  .rank {
    color: #f1f1f1;
    font-size: 4em;
    font-weight: bold;
    margin: -0.55em 1rem 0 0.2rem;
    z-index: 3;
    text-shadow: 5px 0px 5px rgba(0, 0, 0, 0.5);
  }
`;

const Title = styled.span<TitlePropsType>`
  font-size: 0.9em;
  color: #bbbbbb;
  margin-top: 0.7em;
  width: ${(props) => {
    const digit = props.digit;
    if (digit === 0) return "15rem";
    if (digit === 1) return "12.5rem";
    else return "10rem";
  }};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
