import { useEffect } from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";

import { IReviewContentInfo } from "@typings/info";

import { useSetRecoilState } from "recoil";
import { reviewContentState } from "@states/reviews";

import { setAuthorizationToken } from "@utils/account";
import reviews from "@lib/api/reviewAPI";

import WriteTemplate from "@components/write/templates/WriteTemplate";

interface IProps {
  info: IReviewContentInfo;
}

const WritePage = ({ info }: IProps) => {
  const setReviewData = useSetRecoilState(reviewContentState);

  useEffect(() => setReviewData(info), [info, setReviewData]);

  return (
    <Wrap>
      <WriteTemplate />
    </Wrap>
  );
};

export default WritePage;

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
}) => {
  const accessToken = req ? req.cookies.accessToken : null;
  if (accessToken) setAuthorizationToken(accessToken);

  const info = await reviews.getWritePage(
    Number(query.contentId),
    query.type as string
  );

  console.log(info);

  return {
    props: { info },
  };
};

const Wrap = styled.div``;
