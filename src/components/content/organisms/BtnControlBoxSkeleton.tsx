import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BtnControlBoxSkeleton = () => {
  return (
    <Box>
      {Array.from({ length: 3 }).map((_, i) => (
        <Skeleton key={i} width="4rem" height="6rem" />
      ))}
    </Box>
  );
};

export default BtnControlBoxSkeleton;

const Box = styled.div`
  display: flex;
  gap: 3.2rem;
`;
