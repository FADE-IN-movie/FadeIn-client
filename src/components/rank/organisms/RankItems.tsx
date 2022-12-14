import { useRouter } from "next/router";
import styled from "styled-components";
import { theme } from "@styles/theme";

import useRank from "@hooks/useRank";
import useInfiniteScroll from "@hooks/useInfiniteScroll";
import { IContentInfo } from "@typings/info";
import { MESSAGE } from "@data/message";

import ContentCard from "@components/common/ContentCard";
import Grid from "@components/layouts/Grid";
import RankItemsSkeleton from "./RankItemsSkeleton";

const RankItems = () => {
  const {
    ranking,
    isLoading,
    isValidating,
    isSameSize,
    isReachingEnd,
    setSize,
  } = useRank();
  const target = useInfiniteScroll(isValidating, isSameSize, setSize);
  const router = useRouter();

  if (!isLoading && !ranking?.length)
    return <Text>( {MESSAGE.NOT_EXIST_DATA} )</Text>;
  return (
    <div>
      <Grid>
        {ranking?.map((info: IContentInfo, i: number) => (
          <div
            key={i}
            onClick={() =>
              router.push({
                pathname: `/content`,
                query: { type: info.type, id: info.id },
              })
            }
          >
            <ContentCard key={i} responsive info={info} />
          </div>
        ))}
        {(isLoading || isValidating || (!isSameSize && !isReachingEnd)) && (
          <RankItemsSkeleton />
        )}
      </Grid>
      {!isLoading && !isValidating && <div {...target} />}
    </div>
  );
};

export default RankItems;

const Text = styled.p`
  color: ${theme.palette.light_gray};
  font-size: 1.4rem;
  padding-top: 3rem;
`;
