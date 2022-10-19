import styled from "styled-components";

import CustomInput from "@components/common/CustomInput";
import SearchIcon from "@images/search_icon.svg";

function SearchBar() {
  return (
    <Bar>
      <CustomInput search placeholderText="영화, TV 프로그램 검색" />
      <StyledSearchIcon />
    </Bar>
  );
}

export default SearchBar;

const Bar = styled.div`
  position: relative;
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  right: 0.8rem;
  top: 0.5rem;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
