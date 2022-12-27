import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ContentCardSkeleton = () => {
  return (
    <div>
      <Skeleton width="10em" height="14.5em" />
      <Skeleton width="10em" height="0.9em" style={{ marginTop: "0.6em" }} />
    </div>
  );
};

export default ContentCardSkeleton;
