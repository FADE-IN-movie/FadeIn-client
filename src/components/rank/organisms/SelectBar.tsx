import styled from "styled-components";

import CategorySelectBox from "../molecules/CategorySelectBox";
import SortMenu from "../molecules/SortMenu";

const SelectBar = () => {
  return (
    <Bar>
      <CategorySelectBox />
      <SortMenu />
    </Bar>
  );
};

export default SelectBar;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
