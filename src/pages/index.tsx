import React, { useState } from "react";
import type { NextPage } from "next";
import styled from "styled-components";

import StarRating from "@components/StarRating";
import SignInBox from "@components/auth/SignInBox";
import Modal from "@components/common/Modal";

const Home: NextPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const onOpenLoginModal = () => setIsLoginModalOpen(true);

  return (
    <Wrap>
      Home
      <StarRating />
      <button onClick={onOpenLoginModal}>로그인</button>
      <Modal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen}>
        <SignInBox />
      </Modal>
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div``;
