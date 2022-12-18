import styled from "styled-components";

import ResultText from "../atoms/ResultText";
import SearchTabBar from "../organisms/SearchTabBar";
import SearchItems from "../organisms/SearchItems";
import SearchItemsSkeleton from "../organisms/SearchItemsSkeleton";
import useSearch from "@hooks/useSearch";

const SearchPageTemplate = () => {
  const { isLoading } = useSearch();
  return (
    <div>
      <ResultText />
      <SearchTabBar />
      <Content>{isLoading ? <SearchItemsSkeleton /> : <SearchItems />}</Content>
    </div>
  );
};

export default SearchPageTemplate;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding: 3rem 0;
`;
