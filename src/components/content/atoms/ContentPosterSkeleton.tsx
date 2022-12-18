import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ContentPosterSkeleton = () => {
  return (
    <Wrap>
      <Skeleton
        width="17.5rem"
        height="25rem"
        style={{ borderRadius: "5px" }}
      />
    </Wrap>
  );
};

export default ContentPosterSkeleton;

const Wrap = styled.div`
  @media screen and (max-width: 1000px) {
    margin-top: 7.7rem;
  }
`;
