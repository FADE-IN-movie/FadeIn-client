import { useRouter } from "next/router";
import styled from "styled-components";

import { useSetRecoilState } from "recoil";
import { searchKeywordState } from "@states/search";

import SEO from "@components/common/SEO";
import SearchPageTemplate from "@components/search/templates/SearchPageTemplate";
import { useEffect } from "react";

const SearchPage = () => {
  const setSearchKeyword = useSetRecoilState(searchKeywordState);
  const { query } = useRouter();

  useEffect(() => {
    if (query.keyword !== "" && query.keyword !== undefined) {
      setSearchKeyword(query.keyword as string);
    }
  }, [query, setSearchKeyword]);

  return (
    <Wrap>
      <SEO title={query.keyword as string} />
      <SearchPageTemplate />
    </Wrap>
  );
};

export default SearchPage;

const Wrap = styled.div``;
