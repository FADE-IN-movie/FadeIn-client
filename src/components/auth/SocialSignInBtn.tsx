import React, { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

import Image from "next/image";

interface IProps {
  children: ReactNode;
  imgUrl: string;
  color: string;
}

function SocialSignInBtn({ children, imgUrl, color }: IProps) {
  return (
    <Button color={color}>
      <div className="wrap">
        <Image src={imgUrl} alt="siteLogo" layout="fill" />
      </div>
      <span className="site">{children}</span>
    </Button>
  );
}

export default SocialSignInBtn;

const Button = styled.button`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.2rem;
  background: ${(props) => props.color};
  border: none;
  border-radius: 3px;
  padding: 1rem;
  line-height: 1;

  color: ${(props) =>
    props.color === "white"
      ? `${theme.palette.dark_gray};
        `
      : `
          white
        `};

  .wrap {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
  }

  .site {
    width: 100%;
    text-align: center;
  }
`;
