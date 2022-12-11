import { MouseEvent, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { useRecoilState, useRecoilValue } from "recoil";
import { isShareModalOpenState } from "@states/contents";
import { isSignInState } from "@states/users";

import { getCookie, setCookie } from "@utils/cookie";

import useContentDetail from "@hooks/useContentDetail";

import ContentActionBtn from "../molecules/ContentActionBtn";
import Modal from "@components/common/Modal";

import WriteIcon from "@images/write_icon.svg";
import OutlineHeartIcon from "@images/outline_heart_icon.svg";
import FillHeartIcon from "@images/fill_heart_icon.svg";
import ShareIcon from "@images/share_icon.svg";
import ShareBox from "../molecules/ShareBox";
import ConfirmModal from "@components/common/ConfirmModal";
import SignInBox from "@components/auth/SignInBox";

const BtnControlBox = () => {
  const { currentLike, onToggleLike } = useContentDetail();
  const [isShareModalOpen, setIsShareModalOpen] = useRecoilState(
    isShareModalOpenState
  );
  const [isSignInAlertModalOpen, setIsSignInAlertModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const isSignIn = useRecoilValue(isSignInState);
  const router = useRouter();

  const onToggleHeart = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!isSignIn) setIsSignInAlertModalOpen(true);
    else onToggleLike();
  };

  const onClickWriteBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!isSignIn) {
      setIsSignInAlertModalOpen(true);
      setCookie("write", "true");
    } else goWritePage();
  };

  const goWritePage = useCallback(() => {
    const { type, id } = router.query;
    if (!type || !id) return;
    router.push(`/write?type=${type}&contentId=${id}`);
  }, [router]);

  const openSignInModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsSignInAlertModalOpen(false);
    setIsSignInModalOpen(true);
  };

  const openShareModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsShareModalOpen(true);
  };

  useEffect(() => {
    const isGoWrite = getCookie("write");
    if (isSignIn && isGoWrite === "true") {
      goWritePage();
    }
  }, [isSignIn, goWritePage]);

  return (
    <>
      <Box>
        <ContentActionBtn text="감상평" onClickHandler={onClickWriteBtn}>
          <WriteIcon width="3rem" height="2.95rem" fill="white" />
        </ContentActionBtn>
        <ContentActionBtn text="찜" onClickHandler={onToggleHeart}>
          {currentLike ? (
            <FillHeartIcon width="3rem" />
          ) : (
            <OutlineHeartIcon width="3rem" />
          )}
        </ContentActionBtn>
        <ContentActionBtn text="공유" onClickHandler={openShareModal}>
          <ShareIcon width="2.45rem" />
        </ContentActionBtn>
      </Box>

      {isSignInAlertModalOpen && (
        <ConfirmModal
          setIsOpen={setIsSignInAlertModalOpen}
          mainText="해당 서비스를 위해 로그인이 필요합니다"
          onClickAccept={openSignInModal}
          acceptText="로그인"
        />
      )}

      {isShareModalOpen && (
        <Modal setIsOpen={setIsShareModalOpen}>
          <ShareBox />
        </Modal>
      )}

      {isSignInModalOpen && (
        <Modal isStatic setIsOpen={setIsSignInModalOpen}>
          <SignInBox />
        </Modal>
      )}
    </>
  );
};

export default BtnControlBox;

const Box = styled.div`
  display: flex;
  gap: 4rem;
`;
