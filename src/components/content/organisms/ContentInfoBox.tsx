import styled from "styled-components";

import Title from "../atoms/Title";
import Descript from "../molecules/Descript";

function ContentInfoBox() {
  return (
    <Box>
      <div className="contentInfoBox">
        <Title>토르: 러브 앤 썬더</Title>
        <div className="contentDetailInfoBox">
          <span className="year">2022</span>
          <span className="genre">판타지/액션/코미디</span>
          <span className="starRate">★ 6.7</span>
        </div>
        <div className="creditsInfoBox">
          <Descript main title="감독" value="Taika Waititi" />
          <Descript
            main
            title="출연"
            value="Chris Hemsworth, Natalie Portman 등"
          />
        </div>
      </div>
    </Box>
  );
}

export default ContentInfoBox;

const Box = styled.div`
  display: flex;

  .contentInfoBox {
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 2rem 3rem;

    .contentDetailInfoBox {
      display: flex;
      gap: 2rem;
      margin-top: 1rem;

      span {
        font-size: 1.3rem;
      }
    }
  }

  .creditsInfoBox {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 4rem;
    margin-left: 1rem;
  }
`;
