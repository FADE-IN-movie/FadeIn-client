import { useState, useRef, useEffect, FormEvent, ChangeEvent } from "react";
import styled from "styled-components";

import { clickOutside } from "@utils/display";

import CustomInput from "@components/common/CustomInput";
import SearchIcon from "@images/search_icon.svg";

interface IProps {
  main?: boolean;
  width: string;
}

function SearchBar({ main, width }: IProps) {
  const [text, setText] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setText(target.value);
  };

  const onOpenSearchBar = (e: MouseEvent) => {
    e.stopPropagation();
    setIsInputVisible(true);
  };

  useEffect(() => {
    if (isInputVisible) inputRef.current?.focus();
  }, [isInputVisible]);

  useEffect(() => {
    if (main || !inputRef.current) return;
    clickOutside(inputRef.current, setIsInputVisible, true);
  }, [inputRef, main, text]);

  return (
    <Form onSubmit={onSubmitSearch}>
      <CustomInput
        inputRef={inputRef}
        isVisible={isInputVisible}
        search
        main={main}
        width={width}
        placeholderText="영화, TV 프로그램 검색"
        handleChangeInput={onChangeInput}
      />
      <StyledSearchIcon onClick={onOpenSearchBar} />
    </Form>
  );
}

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
