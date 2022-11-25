import ContentCard from "@components/common/ContentCard";
import Grid from "@components/layouts/Grid";
import { IContentInfo } from "@typings/info";

const infoData = [
  {
    id: 1,
    type: "movie",
    poster: "/assets/images/poster_img.jpg",
    title: "[더빙] 토르: 러브 앤 썬더 썬더는 번개 번둥 천개",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 2,
    type: "movie",
    poster: "/assets/images/poster_img.jpg",
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 3,
    type: "movie",
    poster: "/assets/images/poster_img.jpg",
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 4,
    type: "movie",
    poster: "/assets/images/poster_img.jpg",
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 5,
    type: "movie",
    poster: "/assets/images/poster_img.jpg",
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 6,
    type: "movie",
    poster: "/assets/images/poster_img.jpg",
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 7,
    type: "movie",
    poster: "/assets/images/poster_img.jpg",
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 8,
    type: "movie",
    poster: "/assets/images/poster_img.jpg",
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 9,
    type: "movie",
    poster: "/assets/images/poster_img.jpg",
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
  {
    id: 10,
    type: "movie",
    poster: "/assets/images/poster_img.jpg",
    title: "토르: 러브 앤 썬더",
    genres: ["판타지", "액션", "코미디"],
    overview:
      "이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 토르. 그러나 우주의 모든 신들을 몰살하려는 신 도살자 고르의 등장으로 토르의 안식년 계획은 산산조각 나 버린다. 토르는새로운 위협에 맞서기 위해 킹 발키리, 코르그, 그리고 전 여자친구 제인과 재회하게 되고, 그녀가 묠니르를 휘...파람",
  },
];

const RankItems = () => {
  return (
    <Grid>
      {infoData?.map((result: IContentInfo, i: number) => (
        <ContentCard key={i} responsive info={result} />
      ))}
    </Grid>
  );
};

export default RankItems;
