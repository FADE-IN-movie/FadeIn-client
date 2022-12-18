import ContentCardSkeleton from "@components/common/ContentCard/Skeleton";

const RankItemsSkeleton = () => {
  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <ContentCardSkeleton key={i} />
      ))}
    </>
  );
};

export default RankItemsSkeleton;
