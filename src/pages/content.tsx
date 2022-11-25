import { useEffect } from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";

import { IContentDetailInfo } from "@typings/info";

import { setAuthorizationToken } from "@utils/account";
import { useSetRecoilState } from "recoil";
import { contentDetailInfoState } from "@states/contents";

import ContentTemplate from "@components/content/templates/ContentTemplate";
import contents from "@lib/api/contentsAPI";

interface IProps {
  info: IContentDetailInfo;
}

const ContentDetailPage = ({ info }: IProps) => {
  const setContentDetailInfo = useSetRecoilState(contentDetailInfoState);

  useEffect(() => setContentDetailInfo(info), [info, setContentDetailInfo]);

  return (
    <Wrap>
      <ContentTemplate />
    </Wrap>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
}) => {
  const tmdbId = Number(query.id);
  const type = query.type as string;
  const accessToken = req ? req.cookies.accessToken : null;
  if (accessToken) setAuthorizationToken(accessToken);

  const info = await contents.getDetail(tmdbId, type);

  return {
    props: { info },
  };
};

export default ContentDetailPage;

const Wrap = styled.div``;
