import styled from "styled-components";
import Grid from "@components/layouts/Grid";
import CustomTitleSkeleton from "@components/common/CustomTitle/Skeleton";
import ContentCardSkeleton from "@components/common/ContentCard/Skeleton";

const SimilarContentsSectionSkeleton = () => {
  return (
    <Section>
      <div className="titleWrap">
        <CustomTitleSkeleton />
      </div>
      <Grid narrow>
        {Array.from({ length: 5 }).map((_, i) => (
          <ContentCardSkeleton key={i} />
        ))}
      </Grid>
    </Section>
  );
};

export default SimilarContentsSectionSkeleton;

const Section = styled.section`
  font-size: 1.3rem;
  .titleWrap {
    margin-bottom: 2rem;
  }
`;
