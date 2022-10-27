import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { keywordState } from "@states/search";

import SearchPageTemplate from "@components/search/templates/SearchPageTemplate";

function SearchPage() {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const { query } = useRouter();

  useEffect(() => {
    if (typeof query.keyword === "string") setKeyword(query.keyword);
  }, [query, setKeyword]);

  return (
    <Wrap>
      <SearchPageTemplate />
    </Wrap>
  );
}

export default SearchPage;

const Wrap = styled.div``;
