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
        <div>
          <CustomBtn
            outline
            color="linear-gradient(276.79deg, #8E9EEE 20.53%, #E3E3FF 95.78%)"
            textColor={theme.logo_color}
          >
            Show more
          </CustomBtn>
        </div>
      </div>
    </Section>
  );
}

export default IntroSection;

const Section = styled.section`
  .content {
    .searchBarWrap {
      margin-top: 4rem;
    }
  }
`;
