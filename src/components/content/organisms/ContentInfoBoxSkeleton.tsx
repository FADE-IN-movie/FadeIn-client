import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DescriptSkeleton from "../molecules/DescriptSkeleton";

const ContentInfoBoxSkeleton = () => {
  return (
    <Box>
      <div className="contentInfoBox">
        <Skeleton width="20rem" height="3.4rem" />
        <div className="contentDetailInfoBox">
          <Skeleton width="3.5rem" height="1.3rem" />
          <Skeleton width="10rem" height="1.3rem" />
          <Skeleton width="4rem" height="1.3rem" />
        </div>
        <div className="creditsInfoBox">
          <DescriptSkeleton />
          <DescriptSkeleton />
        </div>
      </div>
    </Box>
  );
};

export default ContentInfoBoxSkeleton;

const Box = styled.div`
  display: flex;

  .contentInfoBox {
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 2rem 3rem;

    .contentDetailInfoBox {
      display: flex;
      gap: 2rem;
      margin-top: 1rem;
    }
  }

  .creditsInfoBox {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 3.8rem;
    margin-left: 1rem;
  }
`;
