import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useSetRecoilState, useRecoilValueLoadable } from "recoil";
import { searchTypeState, searchResultCntQuery } from "@states/search";

import TabBar from "@components/common/TabBar";

const SearchTabBar = () => {
  const [menuInfo, setMenuInfo] = useState([
    {
      value: "movie",
      text: "영화 ( 0 )",
    },
    { value: "tv", text: "TV 프로그램 ( 0 )" },
  ]);
  const [selectedMenuIdx, setSelectedMenuIdx] = useState(0);
  const { contents: resultCnt } = useRecoilValueLoadable(searchResultCntQuery);
  const setSearchType = useSetRecoilState(searchTypeState);
  const router = useRouter();

  useEffect(() => {
    if (!resultCnt) return;
    setMenuInfo((prev) => [
      {
        ...prev[0],
        text: `영화 ( ${resultCnt.movie} )`,
      },
      { ...prev[1], text: `TV 프로그램 ( ${resultCnt.tv} )` },
    ]);
  }, [resultCnt]);

  useEffect(
    () => setSearchType(menuInfo[selectedMenuIdx].value),
    [selectedMenuIdx, setSearchType, menuInfo]
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
