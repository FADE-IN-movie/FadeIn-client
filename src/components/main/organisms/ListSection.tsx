import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { recommendContentsQuery, selectedTypeState } from "@states/contents";
import { loggedUserState } from "@states/users";

import contents from "@lib/api/contentsAPI";
import { IContentInfo } from "@typings/info";

import CustomTitle from "@components/common/CustomTitle";
import ContentCard from "@components/common/ContentCard";
import Carousel from "@components/common/Carousel";

type ListTitlesType = {
  [title: string]: string;
};

function ListSection() {
  const [content, setContent] = useState<any>({}); //
  // const type =
  //   useRecoilValue(selectedTypeState) === "movie" ? "영화" : "TV 프로그램";
  const { userName } = useRecoilValue(loggedUserState);
  const {
    query: { type },
  } = useRouter();
  // const contents = useRecoilValue(recommendContentsQuery);

  const listTitles: ListTitlesType = {
    popular: `실시간 ${type} Top 10`,
    topRate: `역대 ${type} Top`,
    nowPlaying:
      type === "movie" ? `현재 상영 중인 ${type}` : `방영 중인 ${type}`,
    preference: `${userName}님이 좋아할만한 ${type}`,
    recommend: `FADE-IN 추천 ${type}`,
  };

  useEffect(() => {
    const getData = async () => {
      if (type !== "movie" && type !== "tv") return;
      const res = await contents.getContents(type as string);
      setContent(res.data);
    };
    getData();
  }, [type]);

  return (
    <Section>
      {Object.keys(content)?.map((title, i) => (
        <div key={i}>
          <TitleWrap>
            <CustomTitle>{listTitles[title]}</CustomTitle>
          </TitleWrap>
          <Carousel>
            {content[title]?.map((info: IContentInfo, i: number) => (
              <ContentCard key={i} info={info} />
            ))}
          </Carousel>
        </div>
      ))}
    </Section>
  );
}

export default ListSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

const TitleWrap = styled.div`
  margin-bottom: 2rem;
`;
