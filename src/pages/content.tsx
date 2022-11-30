import { useEffect } from "react";
import { useRouter } from "next/router";
// import { GetServerSideProps } from "next";
import styled from "styled-components";

import { useSetRecoilState } from "recoil";
import { contentDetailInfoState } from "@states/contents";

import ContentTemplate from "@components/content/templates/ContentTemplate";
import contents from "@lib/api/contentsAPI";

// interface IProps {
//   info: IContentDetailInfo;
// }

const ContentDetailPage = () => {
  const setContentDetailInfo = useSetRecoilState(contentDetailInfoState);
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      const tmdbId = Number(query.id);
      const type = query.type as string;
      await contents.getDetail(tmdbId, type).then((res) => {
        setContentDetailInfo(res);
      });
    })();
  }, [query, setContentDetailInfo]);

  return (
    <Wrap>
      <ContentTemplate />
    </Wrap>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({
//   query,
//   req,
// }) => {
//   const tmdbId = Number(query.id);
//   const type = query.type as string;
//   const accessToken = req ? req.cookies.accessToken : null;
//   if (accessToken) setAuthorizationToken(accessToken);

//   const info = await contents.getDetail(tmdbId, type);

//   return {
//     props: { info },
//   };
// };

export default ContentDetailPage;

const Wrap = styled.div``;
