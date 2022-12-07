import styled from "styled-components";

import MyListTemplate from "@components/mylist/templates/MyListTemplate";

const MyListPage = () => {
  return (
    <Wrap>
      <MyListTemplate />
    </Wrap>
  );
};

export default MyListPage;

const Wrap = styled.div``;
