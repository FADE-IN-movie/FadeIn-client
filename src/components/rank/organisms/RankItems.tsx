import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { theme } from "@styles/theme";

import ContentCard from "@components/common/ContentCard";
import Grid from "@components/layouts/Grid";
import useRank from "@hooks/useRank";
import { IContentInfo } from "@typings/info";
import RankItemsSkeleton from "./RankItemsSkeleton";

const RankItems = () => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);
  const {
    ranking,
    isLoading,
    isValidating,
    isSameSize,
    isReachingEnd,
    setSize,
  } = useRank();
  const router = useRouter();

  const onIntersect: IntersectionObserverCallback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting && !isValidating && isSameSize) {
        observer.unobserve(entry.target);
        setSize((prev) => prev + 1);
        observer.observe(entry.target);
      }
    },
    [isValidating, isSameSize, setSize]
  );

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      {
        threshold: 0.7,
      }
    );
    observer.observe(target);

    return () => observer && observer.disconnect();
  }, [target, onIntersect]);

  console.log(isValidating, isLoading);

  if (!isLoading && !ranking?.length)
    return <Text>( 해당 정보가 존재하지 않습니다. )</Text>;
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
      <div ref={setTarget} style={{ marginTop: "10rem" }} />
    </div>
  );
};

export default RankItems;

const Text = styled.p`
  color: ${theme.palette.light_gray};
  font-size: 1.4rem;
  padding-top: 3rem;
`;
