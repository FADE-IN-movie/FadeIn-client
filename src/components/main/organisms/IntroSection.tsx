import styled from "styled-components";
import { theme } from "@styles/theme";

import BackgroundImg from "../molecules/BackgroundImg";
import MainText from "../molecules/MainText";
import CustomBtn from "@components/common/CustomBtn";
import SearchBar from "@components/common/SearchBar";

function IntroSection() {
  return (
    <Section>
      <BackgroundImg />
      <div className="content">
        <MainText />
        <div className="searchBarWrap">
          <SearchBar main width="43rem" />
        </div>
        <div className="btnBox">
          <CustomBtn outline color="#8E9EEE" textColor={theme.logo_color}>
            Show more
          </CustomBtn>
          <CustomBtn
            color="linear-gradient(276.79deg, #8E9EEE 20.53%, #E3E3FF 95.78%)"
            textColor="white"
          >
            Login
          </CustomBtn>
        </div>
      </div>
    </Section>
  );
}

export default IntroSection;

const Section = styled.section`
  position: relative;

  .content {
    position: absolute;
    top: 0;
    z-index: 2;

    .searchBarWrap {
      margin-top: 4rem;
    }

    .btnBox {
      display: flex;
      width: 43rem;
      justify-content: flex-end;
      gap: 1.5rem;
      margin-top: 3rem;
    }
  }
`;
