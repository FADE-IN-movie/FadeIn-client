import styled from "styled-components";

import { googleSignIn, naverSignIn } from "@utils/account";

import SocialSignInBtn from "./SocialSignInBtn";

function SignInBox() {
  return (
    <Box>
      <h3>소셜 로그인</h3>
      <SocialSignInBtn
        imgUrl="/assets/images/google_icon.png"
        color="white"
        handleSignIn={googleSignIn}
      >
        Google 로그인
      </SocialSignInBtn>
      <div id="googleSignInDiv" />
      <SocialSignInBtn
        imgUrl="/assets/images/naver_icon.png"
        color="#1cc801"
        handleSignIn={naverSignIn}
      >
        네이버 로그인
      </SocialSignInBtn>
      <div id="naverIdLogin"></div>
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
`;
