import { useRouter } from "next/router";
import styled from "styled-components";

import SEO from "@components/common/SEO";
import SearchPageTemplate from "@components/search/templates/SearchPageTemplate";

function SearchPage() {
  const { query } = useRouter();
  return (
    <Wrap>
      <SEO title={query.keyword as string} />
      <SearchPageTemplate />
    </Wrap>
  );
}

export default SearchPage;

const Wrap = styled.div``;
