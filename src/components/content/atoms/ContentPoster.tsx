import Poster from "@components/common/Poster";

import { useRecoilValue } from "recoil";
import { contentDetailInfoState } from "@states/contents";

const ContentPoster = () => {
  const { data } = useRecoilValue(contentDetailInfoState);

  return <Poster outline width="17.5rem" height="25rem" url={data.poster} />;
};

export default ContentPoster;
