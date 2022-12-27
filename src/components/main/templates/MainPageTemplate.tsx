import useContents from "@hooks/useContents";
import styled from "styled-components";

import IntroSection from "../organisms/IntroSection";
import ListSection from "../organisms/ListSection";
import ListSectionSkeleton from "../organisms/ListSectionSkeleton";

const MainPageTemplate = () => {
  const { isLoading, isValidating } = useContents();
  return (
    <Template>
      <IntroSection />
      {isLoading || isValidating ? <ListSectionSkeleton /> : <ListSection />}
    </Template>
  );
};

export default MainPageTemplate;

const Template = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
`;
