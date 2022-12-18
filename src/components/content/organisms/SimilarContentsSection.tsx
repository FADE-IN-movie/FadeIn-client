import styled from "styled-components";
import { useRouter } from "next/router";

import useContentDetail from "@hooks/useContentDetail";
import { IContentInfo } from "@typings/info";

import ContentCard from "@components/common/ContentCard";
import CustomTitle from "@components/common/CustomTitle/CustomTitle";
import Grid from "@components/layouts/Grid";

const SimilarContentsSection = () => {
  const router = useRouter();
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
            <div
              key={i}
              onClick={() =>
                router.push({
                  pathname: `/content`,
                  query: { type: info.type, id: info.id },
                })
              }
            >
              <ContentCard responsive info={info} />
            </div>
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
