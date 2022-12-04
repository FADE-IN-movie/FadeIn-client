import CustomTitle from "@components/common/CustomTitle";
import styled from "styled-components";

import useContentDetail from "@hooks/useContentDetail";

import Descript from "../molecules/Descript";

const ContentDetailInfoSection = () => {
  const { data, isLoading } = useContentDetail();
  const nullText = "(해당 정보 없음)";

  if (isLoading) return null;
  return (
    <Section>
      <div className="titleWrap">
        <CustomTitle>세부 정보</CustomTitle>
      </div>
      <div className="detailInfoBox">
        <div className="infoBox">
          <Descript title="원제" value={data.originalTitle || nullText} />
          <Descript title="국가" value={data.country || nullText} />
          <Descript title="장르" value={data.genre?.join("/") || nullText} />
          <Descript
            title="제작 연도"
            value={data.releaseDate?.slice(0, 4) || nullText}
          />
          <Descript title="연령 등급" value={data.certification || nullText} />
          <Descript title="상영 시간" value={`${data.runtime}분`} />
        </div>
        <div className="overview">
          <Descript
            overview
            title="시놉시스"
            value={data.overview || nullText}
          />
        </div>
      </div>
    </Section>
  );
};

export default ContentDetailInfoSection;

const Section = styled.section`
  width: 100%;

  .titleWrap {
    margin-bottom: 2.5rem;
  }

  .detailInfoBox {
    .infoBox {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, 2.5rem);
      grid-auto-flow: column;
      align-items: center;

      @media screen and (max-width: 850px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 2.4rem);
      }
    }

    .overview {
      margin-top: 2rem;
    }
  }
`;
