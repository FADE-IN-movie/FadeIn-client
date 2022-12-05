import Poster from "@components/common/Poster";

import useContentDetail from "@hooks/useContentDetail";

const ContentPoster = () => {
  const { data } = useContentDetail();

  return <Poster outline width="17.5rem" height="25rem" url={data?.poster} />;
};

export default ContentPoster;
