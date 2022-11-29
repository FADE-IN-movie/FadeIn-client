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
          <div className="calendarWrap">
            <Calendar />
          </div>
        </SideContent>
        <MainContent>
          <ReviewSection />
        </MainContent>
      </Content>
    </Template>
  );
};

export default ReviewTemplate;

const Template = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  gap: 8rem;
`;

const SideContent = styled.div`
  display: none;

  @media screen and (min-width: 1100px) {
    display: block;
    width: fit-content;
  }

  .calendarWrap {
    position: sticky;
    top: 8rem;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1000px;
`;
