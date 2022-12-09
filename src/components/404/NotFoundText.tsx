import styled from "styled-components";

const NotFoundText = () => {
  return (
    <Box>
      <span className="status">404</span>
      <p className="notFound">Not Found</p>
    </Box>
  );
};

export default NotFoundText;

const Box = styled.div`
  width: fit-content;
  text-align: center;
  margin: 0 auto;

  .status {
    color: #d5d3d3;
    font-size: 10rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
  }

  .notFound {
    color: #686868;
    font-size: 2.5rem;
    margin-top: 1.5rem;
  }
`;
