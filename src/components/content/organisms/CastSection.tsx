import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { contentDetailInfoState } from "@states/contents";

import CustomTitle from "@components/common/CustomTitle";
import CastInfoBox from "../molecules/CastInfoBox";

const castInfo = {
  imgUrl: "/assets/images/cast_img.jpg",
  name: "Chris Hemswroth",
  role: "Thor Odinson",
};

const CastSection = () => {
  const { cast } = useRecoilValue(contentDetailInfoState);

  return (
    <Section>
      <div className="titleWrap">
        <CustomTitle>주요 출연진</CustomTitle>
      </div>
      <div className="castInfoContainer">
        {cast?.map((info, i) => (
          <CastInfoBox key={i} info={info} />
        ))}
      </div>
    </Section>
  );
};

export default CastSection;

const Section = styled.section`
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
