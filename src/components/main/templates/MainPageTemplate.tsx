import styled from "styled-components";

import IntroSection from "../organisms/IntroSection";
import ListSection from "../organisms/ListSection";

const MainPageTemplate = () => {
  return (
    <Template>
      <IntroSection />
      <ListSection />
    </Template>
  );
};

export default MainPageTemplate;

const Template = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;
