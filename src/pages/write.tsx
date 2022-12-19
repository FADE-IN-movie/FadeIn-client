import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { isSignInState } from "@states/users";

import { setCookie } from "@utils/cookie";

import useWrite from "@hooks/useWrite";
import WriteTemplate from "@components/write/templates/WriteTemplate";
import NotFoundTemplate from "@components/404/templates/NotFoundTemplate";
import SEO from "@components/common/SEO";

const WritePage = () => {
  const isSignIn = useRecoilValue(isSignInState);
  const { query } = useRouter();
  const isQueryLoaded = Object.keys(query).length;
  const tmdbId = Number(query.contentId);
  const type = query.type as string;
  const { isError } = useWrite();

  useEffect(() => setCookie("write", "false"), []);

  if (
    !isSignIn ||
    (isQueryLoaded && !tmdbId) ||
    (isQueryLoaded && !type) ||
    isError
  )
    return <NotFoundTemplate />;
  return (
    <Wrap>
      <SEO title="감상평 작성" />
      <WriteTemplate />
    </Wrap>
  );
};

export default WritePage;

const Wrap = styled.div``;
