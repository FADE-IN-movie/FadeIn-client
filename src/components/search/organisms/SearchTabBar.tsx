import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useSetRecoilState } from "recoil";
import { searchTypeState } from "@states/search";

import TabBar from "@components/common/TabBar";

const menuInfo = [
  {
    value: "movie",
    text: "영화",
  },
  { value: "tv", text: "TV 프로그램" },
];

const SearchTabBar = () => {
  const [selectedMenuIdx, setSelectedMenuIdx] = useState(0);
  const setSearchType = useSetRecoilState(searchTypeState);
  const router = useRouter();

  useEffect(
    () => setSearchType(menuInfo[selectedMenuIdx].value),
    [selectedMenuIdx, setSearchType]
  );

  useEffect(() => setSelectedMenuIdx(0), [router]);

  return (
    <TabBar
      menu={menuInfo}
      selectedMenuIdx={selectedMenuIdx}
      setSelectedMenuIdx={setSelectedMenuIdx}
    />
  );
};

export default SearchTabBar;
