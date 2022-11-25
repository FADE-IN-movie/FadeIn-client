import styled from "styled-components";

import SEO from "@components/common/SEO";
import ReviewTemplate from "@components/review/templates/ReviewTemplate";

const ReviewPage = () => {
  return (
    <Wrap>
      <SEO title="내 감상평" />
      <ReviewTemplate />
    </Wrap>
  );
};

export default ReviewPage;

const Wrap = styled.div``;
