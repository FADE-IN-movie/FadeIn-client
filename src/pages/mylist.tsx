import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { isSignInState } from "@states/users";

import MyListTemplate from "@components/mylist/templates/MyListTemplate";
import SEO from "@components/common/SEO";
import NotFoundTemplate from "@components/404/templates/NotFoundTemplate";

const MyListPage = () => {
  const isSignIn = useRecoilValue(isSignInState);

  if (!isSignIn) return <NotFoundTemplate />;
  return (
    <Wrap>
      <SEO title="내가 찜한 목록" />
      <MyListTemplate />
    </Wrap>
  );
};

export default MyListPage;

const Wrap = styled.div``;
