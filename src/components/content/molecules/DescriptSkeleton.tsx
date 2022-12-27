import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DescriptSkeleton = () => {
  return (
    <Box>
      <Skeleton
        width="2.5rem"
        height="1.3rem"
        style={{ marginRight: "1.5rem" }}
      />
      <Skeleton width="20rem" height="1.3rem" />
    </Box>
  );
};

export default DescriptSkeleton;

const Box = styled.div`
  display: flex;
`;
