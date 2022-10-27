import { useState } from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

import { useRecoilValue } from "recoil";
import { isSignInState } from "@states/user";

import Logo from "../Logo";
import MenuList from "./molecules/NavMenuList";
import UserBox from "./organisms/UserBox";
import SearchBar from "@components/common/SearchBar";
import SignInBtn from "./atoms/SignInBtn";
import Modal from "../Modal";
import SignInBox from "@components/auth/SignInBox";
import Link from "next/link";

function Header() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const onOpenSignInModal = () => setIsSignInModalOpen(true);

  const isSignIn = useRecoilValue(isSignInState);

  return (
    <>
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

      <Modal
        isStatic
        isOpen={isSignInModalOpen}
        setIsOpen={setIsSignInModalOpen}
      >
        <SignInBox />
      </Modal>
    </>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.bg_color};
  width: 100%;
  padding: 0 4rem;
  height: 6rem;
  z-index: 10;

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
