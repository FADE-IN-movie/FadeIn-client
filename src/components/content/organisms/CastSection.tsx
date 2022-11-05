import styled from "styled-components";

import CustomTitle from "@components/common/CustomTitle";
import CastInfoBox from "../molecules/CastInfoBox";

const castInfo = {
  imgUrl: "/assets/images/cast_img.jpg",
  name: "Chris Hemswroth",
  role: "Thor Odinson",
};

function CastSection() {
  return (
    <Section>
      <div className="titleWrap">
        <CustomTitle>주요 출연진</CustomTitle>
      </div>
      <div className="castInfoContainer">
        <CastInfoBox info={castInfo} />
        <CastInfoBox info={castInfo} />
        <CastInfoBox info={castInfo} />
        <CastInfoBox info={castInfo} />
      </div>
    </Section>
  );
}

export default CastSection;

const Section = styled.section`
  .titleWrap {
    margin-bottom: 2rem;
  }

  .castInfoContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
