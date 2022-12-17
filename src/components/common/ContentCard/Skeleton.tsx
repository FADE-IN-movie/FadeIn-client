import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ContentCardSkeleton = () => {
  return (
    <div>
      <Skeleton width="10em" height="14.5em" />
      <Skeleton width="10em" height="2rem" style={{ marginTop: "0.7em" }} />
    </div>
  );
};

export default ContentCardSkeleton;
