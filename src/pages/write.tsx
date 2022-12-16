import { useEffect } from "react";
import { useRouter } from "next/router";
// import { GetServerSideProps } from "next";
import styled from "styled-components";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { reviewDetailState } from "@states/reviews";
import { isSignInState } from "@states/users";

import { setCookie } from "@utils/cookie";

import reviews from "@lib/api/reviewsAPI";

import WriteTemplate from "@components/write/templates/WriteTemplate";
import NotFoundTemplate from "@components/404/templates/NotFoundTemplate";
import SEO from "@components/common/SEO";

// interface IProps {
//   info: IReviewInfo;
// }

const WritePage = () => {
  const isSignIn = useRecoilValue(isSignInState);
  const setReviewData = useSetRecoilState(reviewDetailState);
  const { query } = useRouter();
  const tmdbId = Number(query.contentId);
  const type = query.type as string;

  useEffect(() => {
    (async () => {
      const reviewId = (query.reviewId as string) || null;

      if (!tmdbId || !type) return;
      await reviews.getWritePage(reviewId, tmdbId, type).then((res) => {
        setReviewData(res);
      });
    })();
  }, [query, tmdbId, type]);

  useEffect(() => setCookie("write", "false"), []);

  if (!isSignIn || !tmdbId || !type) return <NotFoundTemplate />;
  return (
    <Wrap>
      <SEO title="감상평 작성" />
      <WriteTemplate />
    </Wrap>
  );
};

export default WritePage;

// export const getServerSideProps: GetServerSideProps = async ({
//   query,
//   req,
// }) => {
//   const reviewId = null;
//   const tmdbId = Number(query.contentId);
//   const type = query.type as string;
//   const accessToken = req ? req.cookies.accessToken : null;
//   if (accessToken) setAuthorizationToken(accessToken);

//   const info = await reviews.getWritePage(reviewId, tmdbId, type);
//   console.log(info);

//   return {
//     props: { info },
//   };
// };

const Wrap = styled.div``;
