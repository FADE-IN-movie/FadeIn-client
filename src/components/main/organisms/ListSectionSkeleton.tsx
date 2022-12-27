import styled from "styled-components";

import Carousel from "@components/common/Carousel";
import ContentCardSkeleton from "@components/common/ContentCard/Skeleton";
import CustomTitleSkeleton from "@components/common/CustomTitle/Skeleton";

const ListSectionSkeleton = () => {
  return (
    <Section>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i}>
          <CustomTitleSkeleton />
          <Carousel>
            {Array.from({ length: 10 }).map((_, i) => (
              <ContentCardSkeleton key={i} />
            ))}
          </Carousel>
        </div>
      ))}
    </Section>
  );
};

export default ListSectionSkeleton;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
  }
`;
