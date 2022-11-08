import styled from "styled-components";

import BackDrop from "../atoms/BackDrop";
import Poster from "../atoms/Poster";
import ButtonControlBox from "../organisms/BtnControlBox";
import CastSection from "../organisms/CastSection";
import ContentDetailInfoSection from "../organisms/ContentDetailInfoSection";
import ContentInfoBox from "../organisms/ContentInfoBox";
import SimilarContentsSection from "../organisms/SimilarContentsSection";

const ContentTemplate = () => {
  return (
    <div>
      <BackDrop />
      <Contents>
        <TopContent>
          <div className="posterWrap">
            <Poster />
          </div>
          <div className="container">
            <ContentInfoBox />
            <div className="buttonBoxWrap">
              <ButtonControlBox />
            </div>
          </div>
        </TopContent>
        <Main>
          <MainContent>
            <ContentDetailInfoSection />
            <div className="castSectionWrap">
              <CastSection />
            </div>
            <SimilarContentsSection />
          </MainContent>
          <SideContent>
            <CastSection />
          </SideContent>
        </Main>
      </Contents>
    </div>
  );
};

export default ContentTemplate;

const Contents = styled.div`
  background: #1a1a1a;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 5rem 5rem 5rem;
`;

const TopContent = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;

  .posterWrap {
    margin-top: -7rem;
  }

  .container {
    display: flex;
    flex-grow: 1;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
  }

  .buttonBoxWrap {
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1000px) {
      justify-content: start;
      margin: 2rem 0 0 4rem;
    }
    flex-grow: 2;
    align-items: flex-end;
    margin-bottom: 5rem;
  }
`;

const Main = styled.main`
  display: flex;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
  }
  justify-content: space-between;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 65%;
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
  margin-top: 7rem;

  .castSectionWrap {
    @media screen and (min-width: 1281px) {
      display: none;
    }
  }
`;

const SideContent = styled.div`
  width: 35%;
  margin-top: 5rem;
  padding: 2rem 0rem 2rem 4rem;
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;
