import useSearch from "@hooks/useSearch";
import { useRouter } from "next/router";

import { IContentInfo } from "@typings/info";

import Grid from "@components/layouts/Grid";
import ContentCard from "@components/common/ContentCard";

const SearchItems = () => {
  const router = useRouter();
  const { search, isLoading } = useSearch();

  if (!search || !search.length || isLoading) return null;
  return (
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
    </Grid>
  );
};

export default SearchItems;
