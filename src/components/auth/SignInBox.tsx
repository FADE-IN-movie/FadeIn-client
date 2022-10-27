import { useEffect, useRef } from "react";
import styled from "styled-components";

import { googleSignIn, naverSignIn } from "@utils/account";

import SocialSignInBtn from "./SocialSignInBtn";

function SignInBox() {
  const googleRef = useRef<HTMLDivElement>(null);
  const naverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    googleSignIn();
    naverSignIn();
  }, []);

  return (
    <Box>
      <h3>소셜 로그인</h3>
      <div id="googleIdLogin" ref={googleRef} />
      <SocialSignInBtn
        imgUrl="/assets/images/naver_icon.png"
        color="#1ec800"
        handleSignIn={() =>
          (naverRef.current?.children[0] as HTMLAnchorElement).click()
        }
      >
        네이버 계정으로 로그인
      </SocialSignInBtn>
      <div id="naverIdLogin" ref={naverRef} />
    </Box>
  );
}

export default SignInBox;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  #naverIdLogin {
    display: none;
  }
`;
