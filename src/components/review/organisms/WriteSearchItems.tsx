import styled from "styled-components";
import { useRouter } from "next/router";

import useWriteSearch from "@hooks/useWriteSearch";
import { IContentInfo } from "@typings/info";

import Grid from "@components/layouts/Grid";
import ContentCard from "@components/common/ContentCard";
import { Scrollbars } from "react-custom-scrollbars-2";

const WriteSearchItems = () => {
  const router = useRouter();
  const { search, isLoading } = useWriteSearch();

  if (!search || !search.length || isLoading) return null;
  return (
    <>
      <Wrap>
        <Scrollbars autoHide style={{ height: "100%" }}>
          <Grid>
            {search?.map((info: IContentInfo, i: number) => (
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
            ))}
          </Grid>
        </Scrollbars>
      </Wrap>
    </>
  );
};

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

export default WriteSearchItems;
