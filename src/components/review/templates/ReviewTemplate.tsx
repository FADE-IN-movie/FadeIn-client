import styled from "styled-components";

import Calendar from "../organisms/Calendar";
import Header from "../organisms/Header";
import ReviewSection from "../organisms/ReviewSection";

const ReviewTemplate = () => {
  return (
    <Template>
      <Header />
      <Content>
        <SideContent>
          <Calendar />
        </SideContent>
        <MainContent>
          <ReviewSection />
        </MainContent>
      </Content>
    </Template>
  );
};

export default ReviewTemplate;

const Template = styled.div``;

const Content = styled.div`
  display: flex;
`;

const SideContent = styled.div`
  display: none;
  @media screen and (min-width: 1100px) {
    width: 40%;
  }
`;

const MainContent = styled.div`
  width: 100%;

  @media screen and (min-width: 1100px) {
    width: 60%;
  }
`;
