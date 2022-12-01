import styled from "styled-components";

import { useRecoilValueLoadable } from "recoil";
import { writeSearchKeywordQuery } from "@states/reviews";

import { IContentInfo } from "@typings/info";

import Grid from "@components/layouts/Grid";
import ContentCard from "@components/common/ContentCard";
import { Scrollbars } from "react-custom-scrollbars-2";

const WriteSearchItems = () => {
  const { state, contents } = useRecoilValueLoadable(writeSearchKeywordQuery);

  if (
    !contents ||
    !contents.search ||
    !contents.search.length ||
    state === "loading"
  )
    return null;
  return (
    <>
      <Wrap>
        <Scrollbars autoHide style={{ height: "100%" }}>
          <Grid>
            {contents.search?.map((result: IContentInfo, i: number) => (
              <ContentCard key={i} responsive info={result} />
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
