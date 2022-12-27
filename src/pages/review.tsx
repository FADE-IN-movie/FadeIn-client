import { useState, MouseEvent } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { isSignInState } from "@states/users";

import SEO from "@components/common/SEO";
import ReviewTemplate from "@components/review/templates/ReviewTemplate";
import WriteBtn from "@components/review/atoms/WriteBtn";
import Modal from "@components/common/Modal";
import ReviewWriteModalTemplate from "@components/review/templates/ReviewWriteModalTemplate";
import NotFoundTemplate from "@components/404/templates/NotFoundTemplate";

const ReviewPage = () => {
  const isSignIn = useRecoilValue(isSignInState);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  const onClickWriteBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsWriteModalOpen(true);
  };

  if (!isSignIn) return <NotFoundTemplate />;
  return (
    <Wrap>
      <SEO title="내 감상평" />
      <ReviewTemplate />
      <WriteBtn onClickHandler={onClickWriteBtn} />
      {isWriteModalOpen && (
        <Modal setIsOpen={setIsWriteModalOpen}>
          <ReviewWriteModalTemplate />
        </Modal>
      )}
    </Wrap>
  );
};

export default ReviewPage;

const Wrap = styled.div``;
