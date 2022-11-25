import styled from "styled-components";

import CategorySelectBox from "../molecules/CategorySelectBox";
import RankSortMenu from "../molecules/RankSortMenu";

const SelectBar = () => {
  return (
    <Bar>
      <CategorySelectBox />
      <RankSortMenu />
    </Bar>
  );
};

export default SelectBar;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
