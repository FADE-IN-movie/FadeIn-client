import styled from "styled-components";

import useWriteSearch from "@hooks/useWriteSearch";
import { useRecoilValue } from "recoil";
import { writeSearchKeywordState } from "@states/reviews";
import { MESSAGE } from "@data/message";

const WriteSearchResultText = () => {
  const { resultCnt, isLoading } = useWriteSearch();
  const writeSearchKeyword = useRecoilValue(writeSearchKeywordState);

  if (!writeSearchKeyword) return null;
  return (
    <Text>
      {!isLoading ? (
        <>
          <span className="bold">&apos;{writeSearchKeyword}&apos;</span>{" "}
          {MESSAGE.SEARCH_RESULT(resultCnt)}
        </>
      ) : (
        <>{MESSAGE.SEARCHING}</>
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
