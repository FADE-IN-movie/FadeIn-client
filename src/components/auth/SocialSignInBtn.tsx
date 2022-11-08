import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

import Image from "next/image";

interface IProps {
  children: ReactNode;
  imgUrl: string;
  color: string;
  handleSignIn: () => void;
}

const SocialSignInBtn = ({ children, imgUrl, color, handleSignIn }: IProps) => {
  return (
    <Button color={color} onClick={handleSignIn}>
      <div className="wrap">
        <Image src={imgUrl} alt="siteLogo" layout="fill" />
      </div>
      <span className="site">{children}</span>
    </Button>
  );
};

export default SocialSignInBtn;

const Button = styled.button`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 14px;
  background: ${(props) => props.color};
  border: none;
  border-radius: 3px;
  padding: 12px;
  height: 40px;
  font-family: "Google Sans", arial, sans-serif;

  color: ${(props) =>
    props.color === "white"
      ? `${theme.palette.dark_gray};
        `
      : `
          white
        `};

  .wrap {
    position: relative;
    width: 21px;
    height: 20px;
  }

  .site {
    display: inline-block;
    width: calc(100% - 21px);
    text-align: center;
  }
`;
