import useSearch from "@hooks/useSearch";
import { useRouter } from "next/router";

import styled from "styled-components";
import { theme } from "@styles/theme";

import useInfiniteScroll from "@hooks/useInfiniteScroll";
import { IContentInfo } from "@typings/info";

import Grid from "@components/layouts/Grid";
import ContentCard from "@components/common/ContentCard";
import SearchItemsSkeleton from "./SearchItemsSkeleton";

const SearchItems = () => {
  const {
    search,
    isLoading,
    isValidating,
    isSameSize,
    isReachingEnd,
    setSize,
  } = useSearch();
  const target = useInfiniteScroll(isValidating, isSameSize, setSize);
  const router = useRouter();

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
      {!isLoading && !isValidating && <div {...target} />}
    </div>
  );
};

export default SearchItems;

const Text = styled.p`
  color: ${theme.palette.light_gray};
  font-size: 1.4rem;
  padding-top: 3rem;
`;
