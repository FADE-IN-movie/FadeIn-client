import { useRouter } from "next/router";
import styled from "styled-components";

import { useRecoilValueLoadable } from "recoil";
import { searchResultCntQuery } from "@states/search";

const ResultText = () => {
  const { state, contents: resultCnt } =
    useRecoilValueLoadable(searchResultCntQuery);
  const { query } = useRouter();

  return (
    <Text>
      {state !== "loading" && resultCnt ? (
        <>
          {" "}
          <span className="bold">&apos;{query.keyword}&apos;</span> 검색 결과가{" "}
          {resultCnt.total}개 있습니다.
        </>
      ) : (
        <>검색 중입니다.</>
      )}
    </Text>
  );
};

export default ResultText;

const Text = styled.p`
  font-size: 2.8rem;
  margin: 3rem 0 7rem 0;

  .bold {
    font-weight: 700;
  }
`;
