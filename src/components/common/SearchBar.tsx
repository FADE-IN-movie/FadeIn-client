import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import CustomInput from "@components/common/CustomInput";
import SearchIcon from "@images/search_icon.svg";

interface IProps {
  main?: boolean;
  width: string;
}

function SearchBar({ main, width }: IProps) {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onOpenSearchBar = (e: MouseEvent) => {
    e.stopPropagation();
    setIsInputVisible(true);
  };

  useEffect(() => {
    if (isInputVisible) inputRef.current?.focus();
  }, [isInputVisible]);

  useEffect(() => {
    if (main) return;
    const onCloseInput = (e: Event) => {
      if (!inputRef.current?.contains(e.target as HTMLElement))
        setIsInputVisible(false);
    };

    document.addEventListener("click", onCloseInput);
    return () => document.removeEventListener("click", onCloseInput);
  }, []);

  return (
    <Bar>
      <CustomInput
        inputRef={inputRef}
        isVisible={isInputVisible}
        search
        main={main}
        width={width}
        placeholderText="영화, TV 프로그램 검색"
      />
      <StyledSearchIcon onClick={onOpenSearchBar} />
    </Bar>
  );
}

export default SearchBar;

const Bar = styled.div`
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
