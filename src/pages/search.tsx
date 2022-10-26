import { useEffect } from "react";
import { useRouter } from "next/router";

import { useRecoilState } from "recoil";
import { keywordState } from "@states/search";

function SearchPage() {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const { query } = useRouter();

  useEffect(() => {
    if (typeof query.keyword === "string") setKeyword(query.keyword);
  }, [query, setKeyword]);

  return <div>{query.keyword}</div>;
}

export default SearchPage;
