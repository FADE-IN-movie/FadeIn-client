import { useState } from "react";
import SortMenu from "@components/common/SortMenu";

const RankSortMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState("");

  return (
    <SortMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
  );
};

export default RankSortMenu;
