import { useState } from "react";

import styled, { css } from "styled-components";
import { theme } from "@styles/theme";

import ArrowDownIcon from "@images/down_arrow_icon.svg";

interface IProps {
  info: string[];
}

const ComboBox = ({ info }: IProps) => {
  const [selectedMenu, setSelectedMenu] = useState(info[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <Box onClick={onToggleMenu}>
      <Select>
        <span>{selectedMenu}</span>
        <ArrowIcon isopen={isMenuOpen.toString()} />
      </Select>
      {isMenuOpen && (
        <OptBox>
          {info.map((opt, i) => (
            <Opt key={i} onClick={() => setSelectedMenu(opt)}>
              {opt}
            </Opt>
          ))}
        </OptBox>
      )}
    </Box>
  );
};

export default ComboBox;

const Box = styled.div`
  position: relative;
  font-size: 1.8rem;
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

const OptBox = styled.div`
  position: absolute;
  top: 4.5rem;
  width: 100%;
  max-height: 18rem;
  overflow-y: scroll;
  z-index: 3;
`;

const Opt = styled.div`
  font-size: 1.3rem;
  padding: 1.6rem;
  background: ${theme.palette.dark_gray};

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
