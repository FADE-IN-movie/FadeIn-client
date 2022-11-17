import { useState, useRef, useEffect, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { clickOutside } from "@utils/display";

import CustomInput from "@components/common/CustomInput";
import SearchIcon from "@images/search_icon.svg";

interface IProps {
  main?: boolean;
  width: string;
}

const SearchBar = ({ main, width }: IProps) => {
  const [keyword, setKeyword] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onSearchKeyword = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (keyword.trim() !== "") router.push(`/search?keyword=${keyword.trim()}`);
  };

  const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setKeyword(target.value);
  };

  const onClickSearchIcon = (e: MouseEvent) => {
    e.stopPropagation();
    onSearchKeyword();
    setIsInputVisible(true);
  };

  useEffect(() => {
    if (isInputVisible) inputRef.current?.focus();
  }, [isInputVisible]);

  useEffect(() => {
    if (keyword.trim() !== "") setIsInputVisible(true);
    else {
      if (document.activeElement !== inputRef.current && isInputVisible)
        setIsInputVisible(false);
    }
  }, [keyword, isInputVisible]);

  useEffect(() => {
    const onClickHandler = ({ target }: Event) => {
      if (main || !inputRef.current || !target) return;
      clickOutside(target, inputRef.current, setIsInputVisible, true);
    };

    document.addEventListener("click", onClickHandler);
    return () => document.removeEventListener("click", onClickHandler);
  }, [inputRef, main]);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.blur();

    const { pathname, query } = router;

    if (pathname === "/search") {
      if (typeof query.keyword === "string") setKeyword(query.keyword);
      setIsInputVisible(true);
    } else {
      setKeyword("");
      setIsInputVisible(false);
    }
  }, [router, inputRef]);

  return (
    <Form onSubmit={onSearchKeyword}>
      <CustomInput
        inputRef={inputRef}
        isVisible={isInputVisible}
        search
        main={main}
        width={width}
        placeholderText="영화, TV 프로그램 검색"
        value={keyword}
        handleChangeInput={onChangeInput}
      />
      <StyledSearchIcon onClick={onClickSearchIcon} />
    </Form>
  );
};

export default SearchBar;

const Form = styled.form`
  width: fit-content;
  display: flex;
  align-items: center;
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: relative;
  right: 30px;
  margin-top: 0.005rem;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
