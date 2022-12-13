import styled from "styled-components";

import MyListTemplate from "@components/mylist/templates/MyListTemplate";
import SEO from "@components/common/SEO";

const MyListPage = () => {
  return (
    <Wrap>
      <SEO title="내 감상평" />
      <MyListTemplate />
    </Wrap>
  );
};

export default MyListPage;

const Wrap = styled.div``;
