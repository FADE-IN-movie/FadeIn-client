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
  margin-top: 0.8rem;

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
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;
    }
  }
`;
