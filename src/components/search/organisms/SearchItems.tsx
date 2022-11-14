import { useRecoilValueLoadable } from "recoil";
import { searchKeywordQuery } from "@states/search";

import { IContentInfo } from "@typings/info";

import Grid from "@components/layouts/Grid";
import ContentCard from "@components/common/ContentCard";

const SearchItems = () => {
  const { state, contents } = useRecoilValueLoadable(searchKeywordQuery);

  if (
    !contents ||
    !contents.search ||
    !contents.search.length ||
    state === "loading"
  )
    return null;
  return (
    <Grid>
      {contents.search?.map((result: IContentInfo, i: number) => (
        <ContentCard key={i} responsive info={result} />
      ))}
    </Grid>
  );
};

export default SearchItems;
