import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { theme } from "@styles/theme";

import { clickOutside } from "@utils/display";

import { Scrollbars } from "react-custom-scrollbars-2";
import ArrowDownIcon from "@images/down_arrow_icon.svg";

interface IProps {
  info: MenuPropsType[];
  selectedMenu: MenuPropsType;
  setSelectedMenu: (opt: MenuPropsType) => void;
}

type MenuPropsType = {
  value: string;
  text: string;
};

type OptBoxPropsType = {
  isScroll: boolean;
};

type OptPropsType = {
  isActive: boolean;
};

const ComboBox = ({ info, selectedMenu, setSelectedMenu }: IProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const onToggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const onClickHandler = ({ target }: Event) => {
      if (!boxRef.current || !target) return;
      clickOutside(target, boxRef.current, setIsMenuOpen);
    };

    document.addEventListener("click", onClickHandler);
    return () => document.removeEventListener("click", onClickHandler);
  }, [boxRef]);

  return (
    <Box ref={boxRef}>
      <Select onClick={onToggleMenu}>
        <span>{selectedMenu.text}</span>
        <ArrowIcon isopen={isMenuOpen.toString()} />
      </Select>
      {isMenuOpen && (
        <OptBox isScroll={info.length > 4}>
          <Scrollbars autoHeight>
            {info.map((opt, i) => (
              <Opt
                key={i}
                isActive={opt.value === selectedMenu.value}
                onClick={() => {
                  setSelectedMenu(opt);
                  onToggleMenu();
                }}
              >
                {opt.text}
              </Opt>
            ))}
          </Scrollbars>
        </OptBox>
      )}
    </Box>
  );
};

export default ComboBox;

const Box = styled.div`
  position: relative;
  font-size: 1.7rem;
  width: 12rem;

  cursor: pointer;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ArrowIcon = styled(ArrowDownIcon)`
  ${(props) =>
    props.isopen === "true" &&
    css`
      transform: rotate(180deg);
    `}
`;

const OptBox = styled.div<OptBoxPropsType>`
  position: absolute;
  top: 3rem;
  width: 100%;
  max-height: 16rem;
  z-index: 3;

  & > div > :nth-child(3) {
    background: ${(props) => (props.isScroll ? "#292929" : "none")};
    right: 0 !important;

    & > div {
      background: #4b4b4b !important;
    }
  }
`;

const Opt = styled.div<OptPropsType>`
  font-size: 1.3rem;
  padding: 1.6rem;
  background: ${(props) =>
    props.isActive ? "#4e4d4d" : `${theme.palette.dark_gray}`};

  &:hover {
    background: ${theme.palette.gray};
  }

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;
