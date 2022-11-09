import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { contentDetailInfoState } from "@states/contents";

import ContentCard from "@components/common/ContentCard";
import CustomTitle from "@components/common/CustomTitle";
import Grid from "@components/layouts/Grid";

const SimilarContentsSection = () => {
  const { similarContent } = useRecoilValue(contentDetailInfoState);
  const nullText = "(해당 정보 없음)";

  return (
    <Section>
      <div className="titleWrap">
        <CustomTitle>비슷한 영화</CustomTitle>
      </div>
      {similarContent?.length ? (
        <Grid narrow>
          {similarContent?.map((info, i) => (
            <ContentCard key={i} responsive info={info} />
          ))}
        </Grid>
      ) : (
        nullText
      )}
    </Section>
  );
};

export default SimilarContentsSection;

const Section = styled.section`
  font-size: 1.3rem;
  .titleWrap {
    margin-bottom: 2rem;
  }
`;
