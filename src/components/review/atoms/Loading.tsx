import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <Box>
      <div className="spinner" />
    </Box>
  );
};

export default Loading;

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25.1rem;
  height: 18rem;

  .spinner {
    width: 3rem;
    height: 3rem;
    border: 0.7rem solid gray;
    border-radius: 50%;
    border-top-color: lightgray;
    animation: ${spin} 1s linear infinite;
  }
`;
