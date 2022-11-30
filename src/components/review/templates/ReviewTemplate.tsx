import styled, { css } from "styled-components";
import { theme } from "@styles/theme";

import { useRecoilValue } from "recoil";
import { isCalendarOpenState } from "@states/reviews";

import Calendar from "../organisms/Calendar";
import Header from "../organisms/Header";
import ReviewSection from "../organisms/ReviewSection";

type SideContentPropsType = {
  isOpen: boolean;
};

const ReviewTemplate = () => {
  const isCalendarOpen = useRecoilValue(isCalendarOpenState);

  return (
    <Template>
      <div className="headerWrap">
        <Header />
      </div>
      <Content>
        <SideContent isOpen={isCalendarOpen}>
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

const SideContent = styled.div<SideContentPropsType>`
  display: block;
  width: fit-content;
  z-index: 5;

  @media screen and (max-width: 1100px) {
    position: fixed;
    top: 20rem;
    left: -50rem;
    transition: 0.2s ease-out;
    background: ${theme.bg_color};
    border-radius: 5px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);

    ${(props) =>
      props.isOpen &&
      css`
        left: 4rem;
      `};
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
