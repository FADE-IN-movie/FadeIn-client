import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { theme } from "@styles/theme";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { isSignInState } from "@states/users";
import { currentPageState } from "@states/pages";

import Logo from "../Logo";
import MenuList from "./molecules/NavMenuList";
import UserBox from "./organisms/UserBox";
import SearchBar from "@components/common/SearchBar";
import SignInBtn from "./atoms/SignInBtn";
import Modal from "../Modal";
import SignInBox from "@components/auth/SignInBox";
import Link from "next/link";

function Header() {
  const isSignIn = useRecoilValue(isSignInState);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const setCurrentPage = useSetRecoilState(currentPageState);
  const {
    pathname,
    query: { type },
  } = useRouter();

  const onOpenSignInModal = () => setIsSignInModalOpen(true);

  useEffect(() => {
    if (pathname === "/" && (type === "movie" || type === "tv"))
      setCurrentPage(type as string);
    else setCurrentPage("");
  }, [pathname, type, setCurrentPage]);

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

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  z-index: 9;
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
