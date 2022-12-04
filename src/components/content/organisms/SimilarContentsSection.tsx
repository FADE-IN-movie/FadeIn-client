import styled from "styled-components";

import useContentDetail from "@hooks/useContentDetail";
import { IContentInfo } from "@typings/info";

import ContentCard from "@components/common/ContentCard";
import CustomTitle from "@components/common/CustomTitle";
import Grid from "@components/layouts/Grid";

const SimilarContentsSection = () => {
  const { similarContent } = useContentDetail();
  const nullText = "(해당 정보 없음)";

  return (
    <Section>
      <div className="titleWrap">
        <CustomTitle>비슷한 컨텐츠</CustomTitle>
      </div>
      {similarContent?.length ? (
        <Grid narrow>
          {similarContent?.map((info: IContentInfo, i: number) => (
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
