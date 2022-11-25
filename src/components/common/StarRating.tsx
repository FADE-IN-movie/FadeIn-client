import { useState, useRef, useEffect, SetStateAction, Dispatch } from "react";
import styled from "styled-components";
import Image from "next/image";

import { IReviewDataInfo } from "@typings/info";

interface IProps {
  initialScore?: number;
  setValues?: Dispatch<SetStateAction<IReviewDataInfo>>;
  fixedScore?: number;
}

type StarBoxPropsType = {
  isStatic: boolean;
  fixedScore?: number;
  initialScore?: number;
};

const StarRating = ({ setValues, initialScore, fixedScore }: IProps) => {
  const [score, setScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const starRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const onResizeStar = (num: number) => {
    starRef.current.style.width = `${num}px`;
  };

  const onMouseMoveStar = (e: React.MouseEvent<HTMLImageElement>) => {
    if (fixedScore !== undefined) return;
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
    if (fixedScore !== undefined) return;
    if (currentScore >= 0.5) setScore(currentScore);
  };

  const onMouseLeaveStar = (e: React.MouseEvent<HTMLImageElement>) => {
    if (fixedScore !== undefined) return;
    const width = e.currentTarget.offsetWidth;
    onResizeStar((score * width) / 5);
  };

  useEffect(() => {
    if (initialScore) setScore(initialScore);
  }, [initialScore]);

  useEffect(() => {
    if (setValues)
      setValues((prev) => ({
        ...prev,
        rating: score,
      }));
  }, [score, setValues]);

  return (
    <Box>
      <div className="starRatingBox">
        <StarBox
          isStatic={fixedScore !== undefined}
          fixedScore={fixedScore}
          initialScore={initialScore}
          onClick={onClickStar}
          onMouseMove={onMouseMoveStar}
          onMouseLeave={onMouseLeaveStar}
        >
          <div className="imageWrap">
            <Background
              src="/assets/images/empty_star_img.png"
              alt="background"
              layout="fill"
            />
          </div>
          <div className="sizeWrap" ref={starRef}>
            <div className="imageWrap">
              <Star
                src="/assets/images/colored_star_img.png"
                alt="star"
                layout="fill"
              />
            </div>
          </div>
        </StarBox>
        {score > 0 && <span className="score">{score.toFixed(1)}</span>}
      </div>
    </Box>
  );
};

export default StarRating;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: fit-content;

  .desc {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .starRatingBox {
    display: flex;
    align-items: center;

    .score {
      font-size: 1.825rem;
      margin-left: 1.3rem;
    }
  }
`;

const StarBox = styled.div<StarBoxPropsType>`
  position: relative;
  width: ${(props) => (props.isStatic ? "13em" : "200px")};
  cursor: pointer;

  .sizeWrap {
    position: relative;
    overflow: hidden !important;
    width: ${(props) => {
      if (props.fixedScore) {
        const width = (13 / 5) * props.fixedScore;
        return `${width}em`;
      } else if (props.initialScore) {
        const width = (200 / 5) * props.initialScore;
        return `${width}px`;
      } else return "0px";
    }};
    height: ${(props) => (props.isStatic ? "2.3em" : "36px")};
  }

  .imageWrap {
    position: absolute;
    width: ${(props) => (props.isStatic ? "13em" : "200px")};
    height: ${(props) => (props.isStatic ? "2.3em" : "36px")};
  }
`;

const Background = styled(Image)``;

const Star = styled(Image)`
  z-index: 1;
`;
