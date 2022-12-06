import { useEffect } from "react";
import { useRouter } from "next/router";
// import { GetServerSideProps } from "next";
import styled from "styled-components";

import { useSetRecoilState } from "recoil";
import { reviewDetailState } from "@states/reviews";

import reviews from "@lib/api/reviewsAPI";

import WriteTemplate from "@components/write/templates/WriteTemplate";

// interface IProps {
//   info: IReviewInfo;
// }

const WritePage = () => {
  const setReviewData = useSetRecoilState(reviewDetailState);
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      const reviewId = null;
      const tmdbId = Number(query.contentId);
      const type = query.type as string;

      if (!tmdbId || !type) return;
      await reviews.getWritePage(reviewId, tmdbId, type).then((res) => {
        setReviewData(res);
      });
    })();
  }, [query]);

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
