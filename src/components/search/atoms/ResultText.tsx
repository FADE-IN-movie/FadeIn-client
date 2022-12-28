import styled from "styled-components";
import { useRouter } from "next/router";
import useSearch from "@hooks/useSearch";

import { MESSAGE } from "@data/message";

const ResultText = () => {
  const { resultCnt } = useSearch();
  const { query } = useRouter();

  return (
    <Text>
      {resultCnt ? (
        <>
          <span className="bold">&apos;{query.keyword}&apos;</span>{" "}
          {MESSAGE.SEARCH_RESULT(resultCnt.total)}
        </>
      ) : (
        <>{MESSAGE.SEARCHING}</>
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
