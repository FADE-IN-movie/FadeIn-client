import { useEffect, useState, useRef, useCallback } from "react";

import styled, { css } from "styled-components";
import { theme } from "@styles/theme";

interface IProps {
  menu: string[];
}

type MenuPropsType = {
  isActive: boolean;
};

type UnderLinePropsType = {
  width: number;
  pos: number;
};

const TabBar = ({ menu }: IProps) => {
  const [lineWidth, setLineWidth] = useState(0);
  const [linePos, setLinePos] = useState(0);
  const [selectedMenuIdx, setSelectedMenuIdx] = useState(0);
  const barRef = useRef(null);

  const onChangeMenu = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    const menuName = currentTarget.innerText;
    const idx = menu.indexOf(menuName);
    setSelectedMenuIdx(idx);
  };

  const setLineStyle = useCallback(() => {
    if (!barRef.current) return;
    const menuRef = (barRef.current as HTMLElement).children[
      selectedMenuIdx
    ] as HTMLElement;
    const width = menuRef.offsetWidth;
    const pos = menuRef.offsetLeft;

    setLineWidth(width);
    setLinePos(pos);
  }, [selectedMenuIdx]);

  useEffect(() => {
    setLineStyle();
  }, [selectedMenuIdx, setLineStyle]);

  useEffect(() => {
    window.addEventListener("resize", setLineStyle);
    return () => window.removeEventListener("resize", setLineStyle);
  }, [setLineStyle]);

  return (
    <Bar ref={barRef}>
      {menu.map((text, i) => (
        <Menu key={i} isActive={selectedMenuIdx === i} onClick={onChangeMenu}>
          {text}
        </Menu>
      ))}
      <UnderLine width={lineWidth} pos={linePos} />
    </Bar>
  );
};

export default TabBar;

const Bar = styled.div`
  position: relative;
  border-bottom: 1px solid ${theme.palette.muted_gray};
`;

const Menu = styled.button<MenuPropsType>`
  font-size: 1.4rem;
  padding: 1rem 1.5rem;
  color: ${theme.palette.light_gray};

  ${(props) =>
    props.isActive &&
    css`
      font-weight: 800;
      color: white;
    `};
`;

const UnderLine = styled.div<UnderLinePropsType>`
  position: absolute;
  width: ${(props) => `${props.width}px`};
  left: ${(props) => `${props.pos}px`};
  bottom: 0;
  transition: 0.1s ease-out;
  height: 3px;
  background: white;
`;
