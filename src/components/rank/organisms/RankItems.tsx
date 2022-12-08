import styled from "styled-components";
import { theme } from "@styles/theme";

import ContentCard from "@components/common/ContentCard";
import Grid from "@components/layouts/Grid";
import useRank from "@hooks/useRank";
import { IContentInfo } from "@typings/info";

const RankItems = () => {
  const { ranking, isLoading } = useRank();

  if (isLoading) return null;
  if (!ranking.length) return <Text>( 해당 정보가 존재하지 않습니다. )</Text>;
  return (
    <Grid>
      {ranking?.map((result: IContentInfo, i: number) => (
        <ContentCard key={i} responsive info={result} />
      ))}
    </Grid>
  );
};

export default RankItems;

const Text = styled.p`
  color: ${theme.palette.light_gray};
  font-size: 1.4rem;
  padding-top: 3rem;
`;
