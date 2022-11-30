import styled from "styled-components";

import SEO from "@components/common/SEO";
import ReviewTemplate from "@components/review/templates/ReviewTemplate";
import WriteBtn from "@components/review/atoms/WriteBtn";

const ReviewPage = () => {
  return (
    <Wrap>
      <SEO title="내 감상평" />
      <ReviewTemplate />
      <WriteBtn />
    </Wrap>
  );
};

export default ReviewPage;

const Wrap = styled.div``;
