import styled from "styled-components";

import SearchBar from "@components/common/SearchBar";
import WriteSearchResultText from "../atoms/WriteSearchResultText";
import SearchItems from "../../search/organisms/SearchItems";

const ReviewWriteModalTemplate = () => {
  return (
    <Template>
      <SearchBar isStatic write width="70%" />
      <Content>
        <WriteSearchResultText />
        <SearchItems />
      </Content>
    </Template>
  );
};

export default ReviewWriteModalTemplate;

const Template = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: calc(100vw - 18rem);
  height: calc(100vh - 16rem);
`;

const Content = styled.div`
  margin: 2rem;
  width: 100%;
  height: 100%;
`;
