import styled from "styled-components";

import CustomPageTitle from "@components/common/CustomPageTitle";
import WriteBtn from "../atoms/WriteBtn";

const Header = () => {
  return (
    <Box>
      <CustomPageTitle>내 감상평</CustomPageTitle>
      <WriteBtn />
    </Box>
  );
};

export default Header;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 1rem;
`;
