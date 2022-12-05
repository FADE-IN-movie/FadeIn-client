import useSearch from "@hooks/useSearch";

import { IContentInfo } from "@typings/info";

import Grid from "@components/layouts/Grid";
import ContentCard from "@components/common/ContentCard";

const SearchItems = () => {
  const { search, isLoading } = useSearch();

  if (!search || !search.length || isLoading) return null;
  return (
    <Grid>
      {search?.map((result: IContentInfo, i: number) => (
        <ContentCard key={i} responsive info={result} />
      ))}
    </Grid>
  );
};

export default SearchItems;
