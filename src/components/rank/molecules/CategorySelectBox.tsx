import styled from "styled-components";

import { useRecoilState, useResetRecoilState } from "recoil";
import { selectedGenreState, selectedTypeState } from "@states/menus";

import ComboBox from "@components/common/ComboBox";
import { useEffect } from "react";

const movieGenreArr = [
  { value: "all", text: "장르 전체" },
  { value: "28", text: "액션" },
  { value: "12", text: "모험" },
  { value: "16", text: "애니메이션" },
  { value: "35", text: "코미디" },
  { value: "80", text: "범죄" },
  { value: "99", text: "다큐멘터리" },
  { value: "18", text: "드라마" },
  { value: "10751", text: "가족" },
  { value: "14", text: "판타지" },
  { value: "36", text: "역사" },
  { value: "27", text: "공포" },
  { value: "10402", text: "음악" },
  { value: "9648", text: "미스터리" },
  { value: "10749", text: "로맨스" },
  { value: "878", text: "SF" },
  { value: "10770", text: "TV영화" },
  { value: "53", text: "스릴러" },
  { value: "10752", text: "전쟁" },
  { value: "37", text: "서부" },
];

const tvGenreArr = [
  { value: "all", text: "장르 전체" },
  { value: "10759", text: "액션&모험" },
  { value: "16", text: "애니메이션" },
  { value: "80", text: "범죄" },
  { value: "99", text: "다큐멘터리" },
  { value: "18", text: "드라마" },
  { value: "10751", text: "가족" },
  { value: "10762", text: "키즈" },
  { value: "9648", text: "미스터리" },
  { value: "10763", text: "뉴스" },
  { value: "10764", text: "리얼리티" },
  { value: "10765", text: "SF판타지" },
  { value: "10766", text: "연속극" },
  { value: "10767", text: "토크" },
  { value: "10768", text: "전쟁&정치" },
  { value: "37", text: "서부" },
];

const typeMenuInfo = [
  { value: "movie", text: "영화" },
  { value: "tv", text: "TV 프로그램" },
];

const CategorySelectBox = () => {
  const [selectedGenre, setSelectedGenre] = useRecoilState(selectedGenreState);
  const [selectedType, setSelectedType] = useRecoilState(selectedTypeState);
  const resetGenre = useResetRecoilState(selectedGenreState);

  useEffect(() => resetGenre(), [selectedType, resetGenre]);

  return (
    <Box>
      <ComboBox
        info={selectedType.value === "movie" ? movieGenreArr : tvGenreArr}
        selectedMenu={selectedGenre}
        setSelectedMenu={setSelectedGenre}
      />
      <ComboBox
        info={typeMenuInfo}
        selectedMenu={selectedType}
        setSelectedMenu={setSelectedType}
      />
    </Box>
  );
};

export default CategorySelectBox;

const Box = styled.div`
  display: flex;
  gap: 2rem;
`;
