import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

import Image from "next/image";

interface IProps {
  children: ReactNode;
  imgUrl: string;
  color: string;
}

function SignInBtn({ children, imgUrl, color }: IProps) {
  return (
    <Button color={color}>
      <div className="wrap">
        <Image src={imgUrl} alt="loginBtn" layout="fill" />
      </div>
      <span>{children}</span>
    </Button>
  );
}

export default SignInBtn;

const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: ${(props) => props.color};
  font-weight: 600;
  border: 1px solid #cccccc;
  border-radius: 3px;
  padding: 0.8rem;

  ${(props) =>
    props.color !== "white" &&
    css`
      color: white;
      border: none;
    `};

  .wrap {
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
