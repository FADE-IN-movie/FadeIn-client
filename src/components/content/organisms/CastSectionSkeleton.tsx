import styled from "styled-components";
import CustomTitleSkeleton from "@components/common/CustomTitle/Skeleton";
import CastInfoBox from "../molecules/CastInfoBox";
import CastInfoBoxSkeleton from "../molecules/CastInfoBoxSkeleton";

const CastSectionSkeleton = () => {
  return (
    <Section>
      <div className="titleWrap">
        <CustomTitleSkeleton />
      </div>
      <div className="castInfoContainer">
        {Array.from({ length: 4 }).map((_, i) => (
          <CastInfoBoxSkeleton key={i} />
        ))}
      </div>
    </Section>
  );
};

export default CastSectionSkeleton;

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
