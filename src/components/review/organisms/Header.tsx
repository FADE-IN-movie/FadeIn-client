import styled from "styled-components";

const Header = () => {
  return (
    <Box>
      <Title>내 감상평</Title>
    </Box>
  );
};

export default Header;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
`;
