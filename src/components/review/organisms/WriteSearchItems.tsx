import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { theme } from "@styles/theme";

import useWriteSearch from "@hooks/useWriteSearch";
import { IContentInfo } from "@typings/info";

import Grid from "@components/layouts/Grid";
import ContentCard from "@components/common/ContentCard";
import { Scrollbars } from "react-custom-scrollbars-2";
import WriteSearchItemsSkeleton from "./WriteSearchItemsSkeleton";

const WriteSearchItems = () => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);
  const {
    search,
    isLoading,
    isValidating,
    isSameSize,
    isReachingEnd,
    setSize,
  } = useWriteSearch();
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

  if (!search || !search.length || isLoading) return null;
  if (!isValidating && !search?.length) return null;
  return (
    <>
      <Wrap>
        <Scrollbars autoHide style={{ height: "100%" }}>
          <Grid>
            {search?.map((info: IContentInfo, i: number) => (
              <>
                {info.title === "" ? null : (
                  <div
                    key={i}
                    onClick={() =>
                      router.push({
                        pathname: `/write`,
                        query: { type: info.type, contentId: info.id },
                      })
                    }
                  >
                    <ContentCard key={i} responsive info={info} />
                  </div>
                )}
              </>
            ))}
            {(isValidating || isLoading || (!isSameSize && !isReachingEnd)) && (
              <WriteSearchItemsSkeleton />
            )}
          </Grid>
          {!isLoading && !isValidating && (
            <div ref={setTarget} style={{ margin: "3rem 0", height: "3rem" }} />
          )}
        </Scrollbars>
      </Wrap>
    </>
  );
};

export default WriteSearchItems;

const Wrap = styled.div`
  height: calc(100% - 7rem);

  & > div > :nth-child(3) {
    right: 0px !important;
    z-index: 3;

    & > div {
      background: #4b4b4b !important;
    }
  }
`;

const Text = styled.p`
  color: ${theme.palette.light_gray};
  font-size: 1.4rem;
  padding-top: 3rem;
`;
