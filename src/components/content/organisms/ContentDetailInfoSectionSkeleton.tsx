import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DescriptSkeleton from "../molecules/DescriptSkeleton";
import CustomTitleSkeleton from "@components/common/CustomTitle/Skeleton";

const ContentDetailInfoSectionSkeleton = () => {
  return (
    <Section>
      <div className="titleWrap">
        <CustomTitleSkeleton />
      </div>
      <div className="detailInfoBox">
        <div className="infoBox">
          <DescriptSkeleton />
          <DescriptSkeleton />
          <DescriptSkeleton />
          <DescriptSkeleton />
          <DescriptSkeleton />
        </div>
        <div className="overview">
          <Skeleton width="5rem" height="1.3rem" />
          <Skeleton width="100%" height="10rem" />
        </div>
      </div>
    </Section>
  );
};

export default ContentDetailInfoSectionSkeleton;

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
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;
    }
  }
`;
