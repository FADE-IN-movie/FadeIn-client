import { theme } from "@styles/theme";
import styled from "styled-components";

import Calendar from "../organisms/Calendar";
import Header from "../organisms/Header";
import ReviewSection from "../organisms/ReviewSection";

const ReviewTemplate = () => {
  return (
    <Template>
      <div className="headerWrap">
        <Header />
      </div>
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

  .headerWrap {
    position: fixed;
    width: calc(100% - 7rem);
    max-width: 1400px;
    padding: 3rem 1rem 2rem 0;
    top: 6rem;
    background: rgb(20, 20, 20, 0.95);
    z-index: 10;

    @media screen and (max-width: 1100px) {
      padding-bottom: 6rem;
    }
  }
`;

const Content = styled.div`
  display: flex;
  gap: 8rem;
  margin-top: 11rem;
`;

const SideContent = styled.div`
  display: none;
  z-index: 5;

  @media screen and (min-width: 1100px) {
    display: block;
    width: fit-content;
  }

  .calendarWrap {
    position: sticky;
    top: 16rem;
  }
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1000px;
`;
