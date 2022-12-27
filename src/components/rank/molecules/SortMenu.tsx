import styled from "styled-components";
import { theme } from "@styles/theme";

import { useRecoilState } from "recoil";
import { selectedSortMenuState } from "@states/menus";

const menuInfo = [
  {
    value: "popularity",
    text: "인기순",
  },
  { value: "rating", text: "평점순" },
  {
    value: "date",
    text: "최신순",
  },
];

type ButtonProps = {
  isActive: boolean;
};

const SortMenu = () => {
  const [selectedMenu, setSelectedMenu] = useRecoilState(selectedSortMenuState);

  return (
    <Box>
      {menuInfo.map(({ text, value }, i) => (
        <Menu key={i}>
          <Button
            isActive={selectedMenu === value}
            onClick={() => setSelectedMenu(value)}
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
