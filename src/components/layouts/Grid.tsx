import { useEffect, useState, useRef } from "react";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface IProps {
  children: ReactNode;
  narrow?: boolean;
}

type LayoutPropsType = {
  width: number;
  narrow?: boolean;
};

function Grid({ children, narrow }: IProps) {
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
    <Layout ref={layoutRef} narrow={narrow} width={width}>
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

  & > div {
    @media screen and (min-width: 1651px) {
      width: calc(12.5% - 0.9rem);
    }
    @media screen and (max-width: 1650px) {
      width: calc(14.25% - 0.85rem);
    }
    @media screen and (max-width: 1400px) {
      width: calc(16.67% - 0.85rem);
    }
    @media screen and (max-width: 1280px) {
      width: calc(20% - 0.85rem);
    }
    @media screen and (max-width: 950px) {
      width: calc(25% - 0.85rem);
    }
    @media screen and (max-width: 720px) {
      width: calc(33.3% - 0.85rem);
    }
    @media screen and (max-width: 500px) {
      width: calc(50% - 0.85rem);
    }
    @media screen and (max-width: 300px) {
      width: 100%;
    }

    ${(props) =>
      props.narrow &&
      css`
        @media screen and (min-width: 1280px) {
          width: calc(20% - 0.85rem);
        }
        @media screen and (max-width: 1279px) {
          width: calc(14.25% - 0.85rem);
        }
        @media screen and (max-width: 1100px) {
          width: calc(16.67% - 0.85rem);
        }
        @media screen and (max-width: 950px) {
          width: calc(20% - 0.85rem);
        }
        @media screen and (max-width: 720px) {
          width: calc(25% - 0.85rem);
        }
        @media screen and (max-width: 600px) {
          width: calc(33.3% - 0.85rem);
        }
        @media screen and (max-width: 500px) {
          width: calc(50% - 0.85rem);
        }
        @media screen and (max-width: 300px) {
          width: 100%;
        }
      `}
  }
`;
