import styled from "styled-components";

import useContentDetail from "@hooks/useContentDetail";
import { MESSAGE } from "@data/message";

import CustomTitle from "@components/common/CustomTitle";
import Descript from "../molecules/Descript";

const ContentDetailInfoSection = () => {
  const { data, isLoading } = useContentDetail();
  const nullText = `(${MESSAGE.NOT_EXIST_INFO})`;

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
          {/* <Descript
            title="제작 연도"
            value={data.releaseDate?.slice(0, 4) || nullText}
          /> */}
          <Descript title="연령 등급" value={data.certification || nullText} />
          <Descript
            title="러닝 타임"
            value={data.runtime ? `${data.runtime}분` : nullText}
          />
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
      row-gap: 0.6rem;
      grid-template-rows: minmax(1.9rem, 1fr) repeat(2, 1.9rem);
      grid-auto-flow: column;

      & > div:first-child {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
      }

      @media screen and (max-width: 850px) {
        grid-template-columns: 1fr;
        grid-template-rows: minmax(1.9rem, 1fr) repeat(5, 1.9rem);
      }
    }

    .overview {
      margin-top: 2rem;
    }
  }
`;
