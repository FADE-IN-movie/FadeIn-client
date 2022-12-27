import styled from "styled-components";
import { theme } from "@styles/theme";
import { useRouter } from "next/router";

import useLike from "@hooks/useLike";
import { IContentInfo } from "@typings/info";

import { useRecoilValue } from "recoil";
import { selectedMenuState } from "@states/menus";

import Grid from "@components/layouts/Grid";
import ContentCard from "@components/common/ContentCard";

const MyListItems = () => {
  const selectedMenu = useRecoilValue(selectedMenuState);
  const { movie, tv, isValidating } = useLike();
  const data = selectedMenu === "movie" ? movie : tv;
  const router = useRouter();

  if (!movie || !tv || !data || isValidating) return null;
  if (data?.length === 0)
    return <Text>( 해당 정보가 존재하지 않습니다. )</Text>;
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

const Text = styled.p`
  color: ${theme.palette.light_gray};
  font-size: 1.4rem;
`;
