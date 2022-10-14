import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import Image from "next/image";

function StarRating() {
  const [score, setScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const starRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const onResizeStar = (num: number) => {
    starRef.current.style.width = `${num}px`;
  };

  const onMouseMoveStar = (e: React.MouseEvent<HTMLImageElement>) => {
    const width = e.currentTarget.offsetWidth;
    const pos = e.clientX - e.currentTarget.offsetLeft;
    const limit = width / 5;
    const currentScore = Math.ceil((pos / limit) * 2) / 2;
    if (currentScore >= 0.5) {
      setCurrentScore(currentScore);
      onResizeStar((currentScore * width) / 5);
    }
  };

  const onClickStar = () => {
    if (currentScore >= 0.5) setScore(currentScore);
  };

  const onMouseLeaveStar = (e: React.MouseEvent<HTMLImageElement>) => {
    const width = e.currentTarget.offsetWidth;
    onResizeStar((score * width) / 5);
  };

  return (
    <Box>
      <span className="desc">별점을 선택해주세요.</span>
      <div className="starRatingBox">
        <StarBox
          onClick={onClickStar}
          onMouseMove={onMouseMoveStar}
          onMouseLeave={onMouseLeaveStar}
        >
          <ImageWrap>
            <Background
              src="/assets/images/empty_star_img.png"
              alt="background"
              layout="fill"
            />
          </ImageWrap>
          <SizeWrap ref={starRef}>
            <ImageWrap>
              <Star
                src="/assets/images/colored_star_img.png"
                alt="star"
                layout="fill"
              />
            </ImageWrap>
          </SizeWrap>
        </StarBox>
        {score > 0 && <span className="score">{score.toFixed(1)}</span>}
      </div>
    </Box>
  );
}

export default StarRating;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: fit-content; //

  .desc {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .starRatingBox {
    display: flex;
    align-items: center;

    .score {
      font-size: 1.825rem;
      margin-left: 0.5rem;
    }
  }
`;

const StarBox = styled.div`
  position: relative;
  width: 200px;
  cursor: pointer;
`;

const SizeWrap = styled.div`
  position: relative;
  overflow: hidden !important;
  width: 0;
  height: 36px;
`;

const ImageWrap = styled.div`
  position: absolute;
  width: 200px;
  height: 36px;
`;

const Background = styled(Image)``;

const Star = styled(Image)`
  z-index: 1;
`;
