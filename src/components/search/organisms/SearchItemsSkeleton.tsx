import ContentCardSkeleton from "@components/common/ContentCard/Skeleton";

const SearchItemsSkeleton = () => {
  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <ContentCardSkeleton key={i} />
      ))}
    </>
  );
};

export default SearchItemsSkeleton;
