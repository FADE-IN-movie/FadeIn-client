import { useState, MouseEvent } from "react";

import styled from "styled-components";
import { theme } from "@styles/theme";

import { useRecoilValue } from "recoil";
import { isSignInState } from "@states/users";

import Logo from "../Logo";
import MenuList from "./molecules/NavMenuList";
import UserBox from "./organisms/UserBox";
import SearchBar from "@components/common/SearchBar";
import SignInBtn from "./atoms/SignInBtn";
import Modal from "../Modal";
import SignInBox from "@components/auth/SignInBox";
import Link from "next/link";

const Header = () => {
  const isSignIn = useRecoilValue(isSignInState);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const onOpenSignInModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsSignInModalOpen(true);
  };

  return (
    <>
      <Background />
      <Container>
        <div className="box leftBox">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <MenuList />
        </div>
        <div className="box rightBox">
          <SearchBar width="23rem" />
          {isSignIn ? (
            <UserBox />
          ) : (
            <SignInBtn onOpenSignInModal={onOpenSignInModal} />
          )}
        </div>
      </Container>

      {isSignInModalOpen && (
        <Modal isStatic setIsOpen={setIsSignInModalOpen}>
          <SignInBox />
        </Modal>
      )}
    </>
  );
};

export default Header;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  z-index: 99;
  background: ${theme.bg_color};
  opacity: 0.95;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 4rem;
  height: 6rem;
  z-index: 100;

  .box {
    display: flex;
    align-items: center;
  }

  .leftBox {
    gap: 2.5rem;
  }

  .rightBox {
    gap: 1rem;
  }
`;
