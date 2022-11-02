import React from "react";
import { useEffect, useState, useRef } from "react";
import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

type LayoutPropsType = {
  width: number;
};

function Grid({ children }: IProps) {
  const [width, setWidth] = useState(0);
  const layoutRef = useRef(null);

  useEffect(() => {
    const getCardWidth = () => {
      if (!layoutRef.current) return;
      const cardWidth = parseInt(
        window
          .getComputedStyle((layoutRef.current as HTMLElement).children[0])
          .getPropertyValue("width")
      );

      setWidth(cardWidth / 10);
    };
    getCardWidth();

    window.addEventListener("resize", getCardWidth);
    () => window.removeEventListener("resize", getCardWidth);
  }, []);

  return (
    <Layout ref={layoutRef} width={width}>
      {children}
    </Layout>
  );
}

export default Grid;

const Layout = styled.div<LayoutPropsType>`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem 1rem;
  font-size: ${(props) => `${props.width}px`};
`;
