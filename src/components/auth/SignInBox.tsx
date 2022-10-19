import React from "react";
import styled from "styled-components";

import SignInBtn from "./SignInBtn";

function SignInBox() {
  return (
    <Box>
      <h3>소셜 로그인</h3>
      <SignInBtn imgUrl="/assets/images/google_icon.png" color="white">
        Google 로그인
      </SignInBtn>
      <SignInBtn imgUrl="/assets/images/naver_icon.png" color="#1cc801">
        네이버 로그인
      </SignInBtn>
    </Box>
  );
}

export default SignInBox;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;
