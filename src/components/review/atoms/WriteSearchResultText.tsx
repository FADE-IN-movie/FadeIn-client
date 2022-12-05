import styled from "styled-components";

import useWriteSearch from "@hooks/useWriteSearch";
import { useRecoilValue } from "recoil";
import { writeSearchKeywordState } from "@states/reviews";

const WriteSearchResultText = () => {
  const { total, isLoading } = useWriteSearch();
  const writeSearchKeyword = useRecoilValue(writeSearchKeywordState);

  if (!writeSearchKeyword) return null;
  return (
    <Text>
      {!isLoading ? (
        <>
          {" "}
          <span className="bold">&apos;{writeSearchKeyword}&apos;</span> 검색
          결과가 {total}개 있습니다.
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
