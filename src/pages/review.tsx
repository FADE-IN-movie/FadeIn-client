import React from "react";
import styled from "styled-components";

import Calendar from "@components/review/organisms/Calendar";

function ReviewPage() {
  return (
    <Wrap>
      <Calendar />
    </Wrap>
  );
}

export default ReviewPage;

const Wrap = styled.div``;
