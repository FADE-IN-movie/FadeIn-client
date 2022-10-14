import React from "react";
import styled from "styled-components";

import Th from "../atoms/Th";

const dayData = ["S", "M", "T", "W", "T", "F", "S"];

function Thead() {
  return (
    <StyledThead>
      <tr>
        {dayData?.map((day, i) => (
          <Th key={i}>{day}</Th>
        ))}
      </tr>
    </StyledThead>
  );
}

export default Thead;

const StyledThead = styled.thead``;
