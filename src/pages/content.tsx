import { useEffect } from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";

import { useSetRecoilState } from "recoil";
import { contentDetailInfoState } from "@states/contents";

import ContentTemplate from "@components/content/templates/ContentTemplate";
import contents from "@lib/api/contentsAPI";

interface IProps {
  info: any;
}

function ContentDetailPage({ info }: IProps) {
  const setContentDetailInfo = useSetRecoilState(contentDetailInfoState);

  useEffect(() => setContentDetailInfo(info), [info, setContentDetailInfo]);

  return (
    <Wrap>
      <ContentTemplate />
    </Wrap>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const info = await contents.getDetail(
    query.id as string,
    query.type as string
  );

  return {
    props: { info },
  };
};

export default ContentDetailPage;

const Wrap = styled.div``;
