import { useEffect, useState } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { recommendContentsQuery } from "@states/contents";

import contents from "@lib/api/contentsAPI";

import { IContentInfo } from "@typings/info";

import CustomTitle from "@components/common/CustomTitle";
import ContentCard from "@components/common/ContentCard";
import Carousel from "@components/common/Carousel";
import { Suspense } from "react";

function ListSection() {
  const [content, setContent] = useState<any>({});
  // const contents = useRecoilValue(recommendContentsQuery);

  useEffect(() => {
    const getData = async () => {
      const res = await contents.getContents("movie");
      setContent(res.data);
      console.log(Object.values(res.data));
    };
    getData();
  }, []);

  return (
    <Section>
      {Object.keys(content)?.map((title, i) => (
        <div key={i}>
          <TitleWrap>
            <CustomTitle>{title}</CustomTitle>
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
