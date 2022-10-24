import { useEffect, useState, useRef, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

import { convertRemToPixels } from "@utils/transform";

import PrevIcon from "@images/prev_arrow_icon.svg";
import NextIcon from "@images/next_arrow_icon.svg";

interface IProps {
  children: ReactNode;
  limit: number;
}

function Carousel({ children, limit }: IProps) {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [currentItemCnt, setCurrentItemCnt] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const handleHorizontalScroll = (sign: number) => {
    if (!itemsRef.current) return;
    const itemWidth = convertRemToPixels(17.5 + 1);
    const currentLeft = itemsRef.current.scrollLeft;
    const diff = itemWidth * currentItemCnt * sign;

    calculateStartEnd(currentLeft + diff);

    itemsRef.current.scrollTo({
      top: 0,
      left: currentLeft + diff,
      behavior: "smooth",
    });
  };

  const onClickNext = () => {
    handleHorizontalScroll(1);
  };

  const onClickPrev = () => {
    handleHorizontalScroll(-1);
  };

  const calculateStartEnd = (leftPos: number) => {
    if (!itemsRef.current || !containerRef.current) return;

    const isStart = leftPos <= 0;
    const isEnd =
      leftPos +
        containerRef.current.offsetWidth +
        Math.ceil(convertRemToPixels(8.5)) >=
      itemsRef.current.scrollWidth;

    console.log(
      leftPos +
        containerRef.current.offsetWidth +
        Math.ceil(convertRemToPixels(8.5))
    );
    console.log(itemsRef.current.scrollWidth);

    setIsStart(isStart);
    setIsEnd(isEnd);
  };

  const calculateContainerSize = () => {
    const containerWidth = containerRef?.current?.offsetWidth;
    const itemWidth = convertRemToPixels(17.5 + 1);
    const remPx = convertRemToPixels(1);

    if (containerWidth) {
      const currentCardCnt = Math.floor((containerWidth + remPx) / itemWidth);

      setCurrentItemCnt(currentCardCnt);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (!itemsRef.current) return;
      calculateContainerSize();
      calculateStartEnd(itemsRef.current?.scrollLeft);
    };

    calculateContainerSize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollRef = itemsRef.current;
    if (!scrollRef) return;

    scrollRef?.addEventListener("mousewheel", () =>
      calculateStartEnd(scrollRef.scrollLeft)
    );
    return () =>
      scrollRef?.removeEventListener("mousewheel", () =>
        calculateStartEnd(scrollRef.scrollLeft)
      );
  }, [itemsRef]);

  return (
    <Container ref={containerRef}>
      {!isStart && (
        <PrevBtn onClick={onClickPrev}>
          <PrevIcon width="16" fill={theme.palette.light_gray} />
        </PrevBtn>
      )}
      <div className="slideItems" ref={itemsRef}>
        {children}
      </div>
      {!isEnd && (
        <NextBtn onClick={onClickNext}>
          <NextIcon width="16" fill={theme.palette.light_gray} />
        </NextBtn>
      )}
    </Container>
  );
}

export default Carousel;

const Container = styled.div`
  position: relative;
  transform: 0.1 ease-out;

  .slideItems {
    display: flex;
    padding: 0 4rem;
    width: calc(100% + 8rem);
    margin-left: -4rem;
    overflow-x: scroll;
    overflow-y: hidden;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
    gap: 1rem;
  }
`;

const Btn = styled.button`
  position: absolute;
  top: 0;
  height: 25rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

const PrevBtn = styled(Btn)`
  border-radius: 5px 0 0 5px;
  left: -4rem;
`;

const NextBtn = styled(Btn)`
  border-radius: 0 5px 5px 0;
  right: -4rem;
`;
