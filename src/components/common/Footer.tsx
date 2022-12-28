import Link from "next/link";

import styled from "styled-components";
import { theme } from "@styles/theme";

import Logo from "./Logo";

const Footer = () => {
  const githubUrl = "https://github.com/FADE-IN-movie/FADE-IN";
  const tmdbUrl = "https://www.themoviedb.org/?language=ko";

  return (
    <Wrap>
      <div className="box">
        <Logo />
        <p className="copyRight">
          Copyright 2022 Fade-In, All rights reserved.
        </p>
        <Link href={tmdbUrl}>
          <a target="_blank" rel="noopener noreferrer">
            <p className="source">Open API from TMDB</p>
          </a>
        </Link>
        <button className="aboutUs">
          <Link href={githubUrl}>
            <a target="_blank" rel="noopener noreferrer">
              About Us
            </a>
          </Link>
        </button>
      </div>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.palette.dark_gray};
  height: 25rem;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7rem;

    .copyRight {
      color: ${theme.palette.light_gray};
      margin-top: 0.6rem;
    }

    .source {
      color: #868484;
      margin-top: 0.4rem;
    }

    .aboutUs {
      font-weight: 700;
      font-size: 1.25rem;
      width: fit-content;
      margin-top: 3rem;
    }
  }
`;
