import CustomTitle from "@components/common/CustomTitle";
import styled from "styled-components";
import Descript from "../molecules/Descript";

const ContentDetailInfoSection = () => {
  return (
    <Section>
      <div className="titleWrap">
        <CustomTitle>세부 정보</CustomTitle>
      </div>
      <div className="detailInfoBox">
        <div className="infoBox">
          <Descript title="원제" value="Thor:Love and Thunder" />
          <Descript title="국가" value="미국" />
          <Descript title="장르" value="판타지/액션/코미디" />
          <Descript title="제작 연도" value="2022" />
          <Descript title="연령 등급" value="12" />
          <Descript title="상영 시간" value="119분" />
        </div>
        <div className="overview">
          <Descript
            overview
            title="시놉시스"
            value="이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘두르는 마이티 토르가 되어 나타나 모두를 놀라게 한다. 이제 팀 토르는 고르의 복수에 얽힌 미스터리를 밝히고 더 큰 전쟁을 막기 위한 전 우주적 스케일의 모험을 시작하는데..."
          />
        </div>
      </div>
    </Section>
  );
};

export default ContentDetailInfoSection;

const Section = styled.section`
  width: 100%;

  .titleWrap {
    margin-bottom: 2.5rem;
  }

  .detailInfoBox {
    .infoBox {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, 2.5rem);
      grid-auto-flow: column;
      align-items: center;

      @media screen and (max-width: 850px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 2.4rem);
      }
    }

    .overview {
      margin-top: 2rem;
    }
  }
`;
