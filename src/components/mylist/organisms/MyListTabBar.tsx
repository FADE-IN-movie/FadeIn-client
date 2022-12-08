import { useEffect, useState } from "react";

import { useSetRecoilState } from "recoil";
import { selectedMenuState } from "@states/menus";

import TabBar from "@components/common/TabBar";

const menuInfo = [
  {
    value: "movie",
    text: "영화",
  },
  { value: "tv", text: "TV 프로그램" },
];

const MyListTabBar = () => {
  const [selectedMenuIdx, setSelectedMenuIdx] = useState(0);
  const setSelectedMenu = useSetRecoilState(selectedMenuState);

  useEffect(() => setSelectedMenu(menuInfo[selectedMenuIdx].value));

  return (
    <TabBar
      menu={menuInfo}
      selectedMenuIdx={selectedMenuIdx}
      setSelectedMenuIdx={setSelectedMenuIdx}
    />
  );
};

export default MyListTabBar;
