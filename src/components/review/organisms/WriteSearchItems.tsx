import { useRouter } from "next/router";
import styled from "styled-components";
import { theme } from "@styles/theme";

import useWriteSearch from "@hooks/useWriteSearch";
import { IContentInfo } from "@typings/info";

import Grid from "@components/layouts/Grid";
import ContentCard from "@components/common/ContentCard";
import { Scrollbars } from "react-custom-scrollbars-2";
import WriteSearchItemsSkeleton from "./WriteSearchItemsSkeleton";
import useInfiniteScroll from "@hooks/useInfiniteScroll";

const WriteSearchItems = () => {
  const {
    search,
    isLoading,
    isValidating,
    isSameSize,
    isReachingEnd,
    setSize,
  } = useWriteSearch();
  const target = useInfiniteScroll(isValidating, isSameSize, setSize);
  const router = useRouter();

  if (!search || !search.length || isLoading) return null;
  if (!isValidating && !search?.length) return null;
  return (
    <>
      <Wrap>
        <Scrollbars autoHide style={{ height: "100%" }}>
          <Grid>
            {search.map((info: IContentInfo, i: number) => (
              <div
                key={i}
                onClick={() =>
                  router.push({
                    pathname: `/write`,
                    query: { type: info.type, contentId: info.id },
                  })
                }
              >
                <ContentCard responsive info={info} />
              </div>
            ))}
            {(isValidating || isLoading || (!isSameSize && !isReachingEnd)) && (
              <WriteSearchItemsSkeleton />
            )}
          </Grid>
          {!isLoading && !isValidating && <div {...target} />}
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
