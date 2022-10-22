import styled from "styled-components";
import { theme } from "@styles/theme";

function MainText() {
  return (
    <Box>
      <p className="phrase">
        FADE-IN
        <br />
        to your <span className="bold">memory</span>
      </p>
      <p className="text">
        영화를 재밌게 즐기는 또다른 방법.
        <br />
        좋은 사람과 좋은 곳에서 관람하는 것.
        <br />그 모든 순간을 잊지 않도록 기록해보세요, FADE-IN으로.
      </p>
    </Box>
  );
}

export default MainText;

const Box = styled.div`
  z-index: 2;

  .phrase {
    font-size: 3.5rem;
    font-family: ${theme.fonts.logo};
    line-height: 1.2;
  }

  .text {
    padding-left: 0.7rem;
    font-size: 1.5rem;
    color: ${theme.palette.light_gray};
    line-height: 1.6;
    margin-top: 1rem;
  }

  .bold {
    color: ${theme.logo_color};
    font-family: ${theme.fonts.logo};
  }
`;
