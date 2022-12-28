import styled from "styled-components";

import useContentDetail from "@hooks/useContentDetail";
import { IContentDetailInfo } from "@typings/info";
import { MESSAGE } from "@data/message";

import CustomTitle from "@components/common/CustomTitle";
import CastInfoBox from "../molecules/CastInfoBox";

const CastSection = () => {
  const { cast } = useContentDetail();

  return (
    <Section>
      <div className="titleWrap">
        <CustomTitle>주요 출연진</CustomTitle>
      </div>
      {cast?.length > 1 ? (
        <div className="castInfoContainer">
          {cast?.slice(1).map((info: IContentDetailInfo, i: number) => (
            <CastInfoBox key={i} info={info} />
          ))}
        </div>
      ) : (
        `(${MESSAGE.NOT_EXIST_INFO})`
      )}
    </Section>
  );
};

export default CastSection;

const Section = styled.section`
  font-size: 1.3rem;

  .titleWrap {
    margin-bottom: 2rem;
  }

  .castInfoContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (max-width: 1280px) {
      flex-direction: row;
      flex-wrap: wrap;
    }

    & > div {
      @media screen and (max-width: 1280px) {
        width: calc(33.3% - 1.4rem);
      }
      @media screen and (max-width: 900px) {
        width: calc(50% - 1.4rem);
      }
      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }
  }
`;
