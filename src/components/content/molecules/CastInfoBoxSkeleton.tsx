import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CastInfoBoxSkeleton = () => {
  return (
    <div>
      <Skeleton width="100%" height="10.5rem" />
    </div>
  );
};

export default CastInfoBoxSkeleton;
