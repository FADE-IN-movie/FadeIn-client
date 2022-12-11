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

// interface IProps {
//   info: IReviewInfo;
// }

const WritePage = () => {
  const isSignIn = useRecoilValue(isSignInState);
  const setReviewData = useSetRecoilState(reviewDetailState);
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      const reviewId = (query.reviewId as string) || null;
      const tmdbId = Number(query.contentId);
      const type = query.type as string;

      if (!tmdbId || !type) return;
      await reviews.getWritePage(reviewId, tmdbId, type).then((res) => {
        setReviewData(res);
      });
    })();
  }, [query]);

  useEffect(() => setCookie("write", "false"), []);

  if (!isSignIn) return <NotFoundTemplate />;
  return (
    <Wrap>
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
