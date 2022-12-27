import styled from "styled-components";
import RankTemplate from "@components/rank/templates/RankTemplate";
import SEO from "@components/common/SEO";

const RankPage = () => {
  return (
    <Wrap>
      <SEO title="랭킹" />
      <RankTemplate />
    </Wrap>
  );
};

export default RankPage;

const Wrap = styled.div``;
