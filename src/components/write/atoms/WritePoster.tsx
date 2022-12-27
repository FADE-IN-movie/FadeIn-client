import useWrite from "@hooks/useWrite";

import Poster from "@components/common/Poster";

const WritePoster = () => {
  const { content } = useWrite();

  return (
    <Poster outline width="30rem" height="40rem" url={content?.poster || ""} />
  );
};

export default WritePoster;
