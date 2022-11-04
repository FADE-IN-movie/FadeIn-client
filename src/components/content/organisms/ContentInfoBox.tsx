import styled from "styled-components";

import Poster from "../atoms/Poster";
import Title from "../atoms/Title";
import Descript from "../molecules/Descript";

function ContentInfoBox() {
  return (
    <Box>
      <Poster />
      <div className="contentInfo">
        <Title>토르: 러브 앤 썬더</Title>
        <div className="contentDetailInfo">
          <span className="year">2022</span>
          <span className="genre">판타지/액션/코미디</span>
          <span className="starRate">★ 6.7</span>
        </div>
        <div className="creditsInfo">
          <Descript title="감독" value="Taika Waititi" />
          <Descript title="출연" value="Chris Hemsworth, Natalie Portman 등" />
        </div>
      </div>
    </Box>
  );
}

export default ContentInfoBox;

const Box = styled.div`
  display: flex;

  .contentInfo {
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 2rem 3rem;

    .contentDetailInfo {
      display: flex;
      gap: 2rem;
      margin-top: 1rem;

      span {
        font-size: 1.3rem;
      }
    }
  }

  .creditsInfo {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 3rem;
    margin-left: 1rem;
  }
`;
