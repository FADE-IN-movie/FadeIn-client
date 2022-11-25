import { useRecoilValue } from "recoil";
import { reviewDetailState } from "@states/reviews";

import Poster from "@components/common/Poster";

const WritePoster = () => {
  const { content } = useRecoilValue(reviewDetailState);

  return (
    <Poster outline width="30rem" height="40rem" url={content.poster || ""} />
  );
};

export default WritePoster;
