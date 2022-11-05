import styled from "styled-components";

import ButtonControlBox from "../organisms/BtnControlBox";
import CastSection from "../organisms/CastSection";
import ContentDetailInfoSection from "../organisms/ContentDetailInfoSection";
import ContentInfoBox from "../organisms/ContentInfoBox";
import SimilarContentsSection from "../organisms/SimilarContentsSection";

function ContentTemplate() {
  return (
    <div>
      <Contents>
        <TopContent>
          <ContentInfoBox />
          <div className="boxWrap">
            <ButtonControlBox />
          </div>
        </TopContent>
        <Main>
          <MainContent>
            <ContentDetailInfoSection />
            <SimilarContentsSection />
          </MainContent>
          <SideContent>
            <CastSection />
          </SideContent>
        </Main>
      </Contents>
    </div>
  );
}

export default ContentTemplate;

const Contents = styled.div`
  background: #1a1a1a;
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem;
`;

const TopContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  .boxWrap {
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
    width: 35%;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6rem;
  width: 65%;
  margin-top: 7rem;
`;

const SideContent = styled.div`
  width: 35%;
  margin-top: 3rem;
  padding: 4rem;
`;
