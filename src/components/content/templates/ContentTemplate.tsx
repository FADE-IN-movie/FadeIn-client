import styled from "styled-components";

import ButtonControlBox from "../organisms/BtnControlBox";
import ContentInfoBox from "../organisms/ContentInfoBox";

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
      </Contents>
    </div>
  );
}

export default ContentTemplate;

const Contents = styled.div`
  background: #1a1a1a;
  margin: 0 auto;
  padding: 5rem;
  width: fit-content;
`;

const TopContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  .boxWrap {
    margin: 0 0 5rem 3rem;
  }
`;
