import styled from "styled-components";

import Day from "../atoms/Day";

const dayData = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function Thead() {
  return (
    <StyledThead>
      <tr>
        {dayData?.map((day, i) => (
          <Day key={i}>{day}</Day>
        ))}
      </tr>
    </StyledThead>
  );
}

export default Thead;

const StyledThead = styled.thead``;
