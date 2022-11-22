import CustomPageTitle from "@components/common/CustomPageTitle";
import styled from "styled-components";
import Calendar from "../organisms/Calendar";
import ReviewSection from "../organisms/ReviewSection";

const ReviewTemplate = () => {
  return (
    <Template>
      <CustomPageTitle>내 감상평</CustomPageTitle>
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
