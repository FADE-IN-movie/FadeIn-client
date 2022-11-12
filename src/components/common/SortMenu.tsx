import { useState } from "react";

import styled from "styled-components";
import { theme } from "@styles/theme";

const menu = ["인기순", "평점순", "최신순"];

type ButtonProps = {
  isActive: boolean;
};

const SortMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState(menu[0]);

  return (
    <Box>
      {menu.map((text, i) => (
        <Menu key={i}>
          <Button
            isActive={selectedMenu === text}
            onClick={() => setSelectedMenu(text)}
          >
            {text}
          </Button>
        </Menu>
      ))}
    </Box>
  );
};

export default SortMenu;

const Box = styled.div`
  display: flex;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  & + & {
    ::before {
      content: "|";
      font-size: 1.2rem;
      color: ${theme.palette.muted_gray};
      margin: 0 0.8rem;
    }
  }
`;

const Button = styled.button<ButtonProps>`
  font-size: 1.5rem;
  color: ${(props) => !props.isActive && "#9b9b9b"};
`;
