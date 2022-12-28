import { useEffect, useState, useCallback } from "react";
import useSearch from "@hooks/useSearch";
import { useRouter } from "next/router";

import styled from "styled-components";
import { theme } from "@styles/theme";

import { IContentInfo } from "@typings/info";
import { MESSAGE } from "@data/message";

import Grid from "@components/layouts/Grid";
import ContentCard from "@components/common/ContentCard";
import SearchItemsSkeleton from "./SearchItemsSkeleton";

const SearchItems = () => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);
  const {
    search,
    isLoading,
    isValidating,
    isSameSize,
    isReachingEnd,
    setSize,
  } = useSearch();
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

  if (!isValidating && !search?.length)
    return <Text>( {MESSAGE.NOT_EXIST_INFO} )</Text>;
  return (
    <div>
      <Grid>
        {search?.map((info: IContentInfo, i: number) => (
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
        {(isValidating || isLoading || (!isSameSize && !isReachingEnd)) && (
          <SearchItemsSkeleton />
        )}
      </Grid>
      {!isLoading && !isValidating && (
        <div ref={setTarget} style={{ marginTop: "10rem" }} />
      )}
    </div>
  );
};

export default SearchItems;

const Text = styled.p`
  color: ${theme.palette.light_gray};
  font-size: 1.4rem;
  padding-top: 3rem;
`;
