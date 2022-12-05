import { useState, useRef, useEffect, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { clickOutside } from "@utils/display";

import { useSetRecoilState } from "recoil";
import { writeSearchKeywordState } from "@states/reviews";

import CustomInput from "@components/common/CustomInput";
import SearchIcon from "@images/search_icon.svg";

type FormPropsType = {
  wide?: boolean;
};

interface IProps {
  isStatic?: boolean;
  main?: boolean;
  write?: boolean;
  width: string;
}

const SearchBar = ({ isStatic, main, write, width }: IProps) => {
  const [keyword, setKeyword] = useState("");
  const setWriteKeyword = useSetRecoilState(writeSearchKeywordState);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onSearchKeyword = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    const trimedKeyword = keyword.trim();

    if (trimedKeyword !== "") {
      if (!write) router.push(`/search?keyword=${trimedKeyword}`);
      else setWriteKeyword(trimedKeyword);
    }
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
      if (isStatic || !inputRef.current || !target) return;
      clickOutside(target, inputRef.current, setIsInputVisible, true);
    };

    document.addEventListener("click", onClickHandler);
    return () => document.removeEventListener("click", onClickHandler);
  }, [inputRef, isStatic]);

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

  useEffect(() => {
    if (!write) return;
    return () => setWriteKeyword("");
  }, [write, setWriteKeyword]);

  return (
    <Form wide={write} onSubmit={onSearchKeyword}>
      <CustomInput
        inputRef={inputRef}
        isVisible={isInputVisible}
        search
        isStatic={isStatic}
        main={main}
        write={write}
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

const Form = styled.form<FormPropsType>`
  width: ${(props) => (props.wide ? "100%" : "max-content")};
  display: flex;
  align-items: center;
  justify-content: center;
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
