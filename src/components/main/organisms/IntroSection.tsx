import { useState } from "react";

import styled from "styled-components";
import { theme } from "@styles/theme";

import BackgroundImg from "../molecules/BackgroundImg";
import MainText from "../molecules/MainText";
import CustomBtn from "@components/common/CustomBtn";
import SearchBar from "@components/common/SearchBar";
import Modal from "@components/common/Modal";
import SignInBox from "@components/auth/SignInBox";

function IntroSection() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const onOpenSignInModal = () => setIsSignInModalOpen(true);

  return (
    <>
      <Section>
        <BackgroundImg />
        <div className="content">
          <MainText />
          <div className="bottomBox">
            <div className="searchBarWrap">
              <SearchBar main width="43rem" />
            </div>
            <div className="btnBox">
              <CustomBtn outline color="#8E9EEE" textColor={theme.logo_color}>
                Show more
              </CustomBtn>
              <CustomBtn
                color="linear-gradient(276.79deg, #8E9EEE 20.53%, #E3E3FF 95.78%)"
                textColor="white"
                onClickHandler={onOpenSignInModal}
              >
                Login
              </CustomBtn>
            </div>
          </div>
        </div>
      </Section>

      <Modal isOpen={isSignInModalOpen} setIsOpen={setIsSignInModalOpen}>
        <SignInBox />
      </Modal>
    </>
  );
}

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
