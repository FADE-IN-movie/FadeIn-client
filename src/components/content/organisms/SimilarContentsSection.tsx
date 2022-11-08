import styled from "styled-components";

import ContentCard from "@components/common/ContentCard";
import CustomTitle from "@components/common/CustomTitle";
import Grid from "@components/layouts/Grid";

const infoData = [
  {
    id: 1,
    type: "movie",
    title: "[더빙] 토르: 러브 앤 썬더 썬더는 번개 번둥 천개",
    genre: ["판타지", "액션", "코미디"],
    poster: "https://image.tmdb.org/t/p/w500/6AANwKhjIEVyya95oW4IA6joL1Z.jpg",
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 1,
    type: "movie",
    title: "토르: 러브 앤 썬더",
    genre: ["판타지", "액션", "코미디"],
    poster: "https://image.tmdb.org/t/p/w500/wRKHUqYGrp3PO91mZVQ18xlwYzW.jpg",
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 1,
    type: "movie",
    title: "토르: 러브 앤 썬더",
    genre: ["판타지", "액션", "코미디"],
    poster: "https://image.tmdb.org/t/p/w500/6AANwKhjIEVyya95oW4IA6joL1Z.jpg",
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 1,
    type: "movie",
    title: "토르: 러브 앤 썬더",
    genre: ["판타지", "액션", "코미디"],
    poster: "https://image.tmdb.org/t/p/w500/wRKHUqYGrp3PO91mZVQ18xlwYzW.jpg",
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 1,
    type: "movie",
    title: "토르: 러브 앤 썬더",
    genre: ["판타지", "액션", "코미디"],
    poster: "https://image.tmdb.org/t/p/w500/6AANwKhjIEVyya95oW4IA6joL1Z.jpg",
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 1,
    type: "movie",
    title: "토르: 러브 앤 썬더",
    genre: ["판타지", "액션", "코미디"],
    poster: "https://image.tmdb.org/t/p/w500/wRKHUqYGrp3PO91mZVQ18xlwYzW.jpg",
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 1,
    type: "movie",
    title: "토르: 러브 앤 썬더",
    genre: ["판타지", "액션", "코미디"],
    poster: "https://image.tmdb.org/t/p/w500/cj9UsJEN5bNf6ZoF1BbKjKN81hc.jpg",
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 1,
    type: "movie",
    title: "토르: 러브 앤 썬더",
    genre: ["판타지", "액션", "코미디"],
    poster: "https://image.tmdb.org/t/p/w500/wRKHUqYGrp3PO91mZVQ18xlwYzW.jpg",
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 1,
    type: "movie",
    title: "토르: 러브 앤 썬더",
    genre: ["판타지", "액션", "코미디"],
    poster: "https://image.tmdb.org/t/p/w500/6AANwKhjIEVyya95oW4IA6joL1Z.jpg",
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 1,
    type: "movie",
    title: "토르: 러브 앤 썬더",
    genre: ["판타지", "액션", "코미디"],
    poster: "https://image.tmdb.org/t/p/w500/wRKHUqYGrp3PO91mZVQ18xlwYzW.jpg",
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
];

const SimilarContentsSection = () => {
  return (
    <Section>
      <div className="titleWrap">
        <CustomTitle>비슷한 영화</CustomTitle>
      </div>
      <Grid narrow>
        {infoData.map((info, i) => (
          <ContentCard key={i} responsive info={info} />
        ))}
      </Grid>
    </Section>
  );
};

export default SimilarContentsSection;

const Section = styled.section`
  .titleWrap {
    margin-bottom: 2rem;
  }
`;
