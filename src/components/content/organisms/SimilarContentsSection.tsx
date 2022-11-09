import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { contentDetailInfoState } from "@states/contents";

import ContentCard from "@components/common/ContentCard";
import CustomTitle from "@components/common/CustomTitle";
import Grid from "@components/layouts/Grid";

const SimilarContentsSection = () => {
  const { similarContent } = useRecoilValue(contentDetailInfoState);

  return (
    <Section>
      <div className="titleWrap">
        <CustomTitle>비슷한 영화</CustomTitle>
      </div>
      {similarContent && similarContent.length && (
        <Grid narrow>
          {similarContent?.map((info, i) => (
            <ContentCard key={i} responsive info={info} />
          ))}
        </Grid>
      )}
    </Section>
  );
};

export default SimilarContentsSection;

const Section = styled.section`
  .titleWrap {
    margin-bottom: 2rem;
  }
`;
