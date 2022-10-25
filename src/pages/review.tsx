import React from "react";
import styled from "styled-components";

import SEO from "@components/common/SEO";
import Calendar from "@components/review/organisms/Calendar";

function ReviewPage() {
  return (
    <Wrap>
      <SEO title="review" />
      <Calendar />
    </Wrap>
  );
}

export default ReviewPage;

const Wrap = styled.div``;
