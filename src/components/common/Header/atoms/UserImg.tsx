import styled from "styled-components";
import Image from "next/image";

import { useRecoilValue } from "recoil";
import { loggedUserState } from "@states/users";

function UserImg() {
  const loggedUser = useRecoilValue(loggedUserState);

  return (
    <ImageWrap>
      <Image
        src={loggedUser?.userImg}
        layout="fill"
        unoptimized={true}
        alt="userImg"
      />
    </ImageWrap>
  );
}

export default UserImg;

const ImageWrap = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;

  img {
    border-radius: 50%;
  }
`;
