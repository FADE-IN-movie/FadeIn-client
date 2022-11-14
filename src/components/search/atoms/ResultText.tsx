import { useRouter } from "next/router";
import styled from "styled-components";

import { useRecoilValueLoadable } from "recoil";
import { searchKeywordQuery } from "@states/search";

const ResultText = () => {
  const { state, contents } = useRecoilValueLoadable(searchKeywordQuery);
  const { query } = useRouter();

  return (
    <Text>
      <span className="bold">&apos;{query?.keyword}&apos; </span>검색 결과가{" "}
      {!contents || state === "loading" ? 0 : contents.search?.length}개
      있습니다.
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
