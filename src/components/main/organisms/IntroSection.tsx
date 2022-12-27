import { useState, MouseEvent } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { theme } from "@styles/theme";

import { useRecoilValue } from "recoil";
import { isSignInState } from "@states/users";

import BackgroundImg from "../molecules/BackgroundImg";
import MainText from "../molecules/MainText";
import CustomBtn from "@components/common/CustomBtn";
import SearchBar from "@components/common/SearchBar";
import Modal from "@components/common/Modal";
import SignInBox from "@components/auth/SignInBox";

const IntroSection = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const isSignIn = useRecoilValue(isSignInState);
  const router = useRouter();

  const onOpenSignInModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsSignInModalOpen(true);
  };

  const goPage = (page: string) => router.push(page);

  return (
    <>
      <Section>
        <BackgroundImg />
        <div className="content">
          <MainText />
          <div className="bottomBox">
            <div className="searchBarWrap">
              <SearchBar isStatic main width="43rem" />
            </div>
            <div className="btnBox">
              <CustomBtn
                outline
                color="#8E9EEE"
                textColor={theme.logo_color}
                onClickHandler={() => goPage("/rank")}
              >
                더 보기
              </CustomBtn>
              <CustomBtn
                color="linear-gradient(276.79deg, #8E9EEE 20.53%, #E3E3FF 95.78%)"
                textColor="white"
                onClickHandler={
                  isSignIn ? () => goPage("/review") : onOpenSignInModal
                }
              >
                {isSignIn ? "내 감상평" : "로그인"}
              </CustomBtn>
            </div>
          </div>
        </div>
      </Section>

      {isSignInModalOpen && (
        <Modal isStatic setIsOpen={setIsSignInModalOpen}>
          <SignInBox />
        </Modal>
      )}
    </>
  );
};

export default IntroSection;

const Section = styled.section`
  position: relative;

  .content {
    position: absolute;
    top: 15%;
    z-index: 2;

    .bottomBox {
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }

    .searchBarWrap {
      margin-top: 4rem;
    }

    .btnBox {
      display: flex;
      width: 43rem;
      justify-content: flex-end;
      gap: 1.5rem;
      margin-top: 3rem;
    }
  }
`;
