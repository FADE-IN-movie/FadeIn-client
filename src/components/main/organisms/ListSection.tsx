import { useRouter } from "next/router";
import styled from "styled-components";

import useContents from "@hooks/useContents";

import { useRecoilValue } from "recoil";
import { isSignInState } from "@states/users";
import { loggedUserState } from "@states/users";

import { IContentInfo } from "@typings/info";

import CustomTitle from "@components/common/CustomTitle";
import ContentCard from "@components/common/ContentCard";
import Carousel from "@components/common/Carousel";

type ListTitlesType = {
  [title: string]: string;
};

const ListSection = () => {
  const { userName } = useRecoilValue(loggedUserState);
  const { query } = useRouter();
  const { data, isLoading } = useContents();
  const isSignIn = useRecoilValue(isSignInState);
  const type = query.type === "movie" ? "영화" : "TV 프로그램";

  const listTitles: ListTitlesType = {
    popular: `실시간 ${type} Top 10`,
    topRate: `역대 ${type} Top 10`,
    nowPlaying:
      query.type === "movie" ? `현재 상영 중인 ${type}` : `방영 중인 ${type}`,
    preference: `${isSignIn ? `${userName}님이 ` : ""}` + `좋아할 만한 ${type}`,
    recommend: `FADE-IN 추천 ${type}`,
  };

  if (isLoading) return null;
  return (
    <Section>
      {Object.keys(data)?.map((title, i) => (
        <div key={i}>
          <TitleWrap>
            <CustomTitle>{listTitles[title]}</CustomTitle>
          </TitleWrap>
          <Carousel>
            {data[title]?.map((info: IContentInfo, i: number) => (
              <ContentCard key={i} info={info} />
            ))}
          </Carousel>
        </div>
      ))}
    </Section>
  );
};

export default ListSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

const TitleWrap = styled.div`
  margin-bottom: 2rem;
`;
