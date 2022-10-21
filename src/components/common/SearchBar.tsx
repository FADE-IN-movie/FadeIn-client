import styled from "styled-components";

import CustomInput from "@components/common/CustomInput";
import SearchIcon from "@images/search_icon.svg";

interface IProps {
  main?: boolean;
  width: string;
}

function SearchBar({ main, width }: IProps) {
  return (
    <Bar>
      <CustomInput
        search
        main={main}
        width={width}
        placeholderText="영화, TV 프로그램 검색"
      />
      <StyledSearchIcon />
    </Bar>
  );
}

export default SearchBar;

const Bar = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: relative;
  right: 30px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
