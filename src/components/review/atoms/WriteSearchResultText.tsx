import styled from "styled-components";

import { useRecoilValueLoadable, useRecoilValue } from "recoil";
import {
  writeSearchKeywordState,
  writeSearchKeywordQuery,
} from "@states/reviews";

const WriteSearchResultText = () => {
  const { state, contents } = useRecoilValueLoadable(writeSearchKeywordQuery);
  const writeSearchKeyword = useRecoilValue(writeSearchKeywordState);

  if (!writeSearchKeyword) return null;
  return (
    <Text>
      {state !== "loading" && contents ? (
        <>
          {" "}
          <span className="bold">&apos;{writeSearchKeyword}&apos;</span> 검색
          결과가 {contents.total}개 있습니다.
        </>
      ) : (
        <>검색 중입니다.</>
      )}
    </Text>
  );
};

export default WriteSearchResultText;

const Text = styled.p`
  font-size: 2.5rem;
  margin: 3rem 0 3rem 0;

  .bold {
    font-weight: 700;
  }
`;