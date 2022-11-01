import styled from "styled-components";

import ResultText from "../atoms/ResultText";
import Grid from "@components/layouts/Grid";
import InfoCard from "@components/common/InfoCard";
import TabBar from "@components/common/TabBar";

const infoData = [
  {
    rank: 1,
    title: "[더빙] 토르: 러브 앤 썬더 썬더는 번개 번둥 천개",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    rank: 2,
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    rank: 3,
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    rank: 4,
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    rank: 5,
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    rank: 6,
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    rank: 7,
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    rank: 8,
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    rank: 9,
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    rank: 10,
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
];

const menuInfo = ["영화", "TV 프로그램"];

function SearchPageTemplate() {
  return (
    <div>
      <ResultText />
      <TabBar menu={menuInfo} />
      <Content>
        <Grid>
          {infoData.map((info, i) => (
            <InfoCard key={i} info={info} />
          ))}
        </Grid>
      </Content>
    </div>
  );
}

export default SearchPageTemplate;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding: 3rem 0;
`;
