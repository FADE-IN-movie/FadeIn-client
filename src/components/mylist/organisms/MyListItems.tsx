import { useRouter } from "next/router";

import useLike from "@hooks/useLike";
import { IContentInfo } from "@typings/info";

import { useRecoilValue } from "recoil";
import { selectedMenuState } from "@states/mylist";

import Grid from "@components/layouts/Grid";
import ContentCard from "@components/common/ContentCard";

const MyListItems = () => {
  const selectedMenu = useRecoilValue(selectedMenuState);
  const { movie, tv, isLoading } = useLike();
  const data = selectedMenu === "movie" ? movie : tv;
  const router = useRouter();

  if (!movie || !tv || isLoading) return null;
  return (
    <Grid>
      {data?.map((info: IContentInfo, i: number) => (
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

export default MyListItems;
