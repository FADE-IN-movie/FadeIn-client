import React from "react";
import styled from "styled-components";

import Day from "../atoms/Day";

const dayData = ["S", "M", "T", "W", "T", "F", "S"];

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
