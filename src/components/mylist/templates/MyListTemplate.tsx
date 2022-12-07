import styled from "styled-components";

import Header from "../organisms/Header";
import MyListTabBar from "../organisms/MyListTabBar";
import MyListItems from "../organisms/MyListItems";

const MyListTemplate = () => {
  return (
    <Template>
      <div className="headerWrap">
        <Header />
        <MyListTabBar />
      </div>
      <Content>
        <MyListItems />
      </Content>
    </Template>
  );
};

export default MyListTemplate;

const Template = styled.div`
  width: 100%;

  .headerWrap {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    position: fixed;
    width: calc(100% - 7rem);
    padding: 3rem 1rem 0 0;
    top: 6rem;
    background: rgb(20, 20, 20, 0.95);
    z-index: 10;
  }
`;

const Content = styled.div`
  margin-top: 16rem;
`;
