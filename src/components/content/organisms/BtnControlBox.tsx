import { useState } from "react";
import styled from "styled-components";
import ContentActionBtn from "../molecules/ContentActionBtn";

import WriteIcon from "@images/write_icon.svg";
import OutlineHeartIcon from "@images/outline_heart_icon.svg";
import FillHeartIcon from "@images/fill_heart_icon.svg";
import ShareIcon from "@images/share_icon.svg";

function BtnControlBox() {
  const [isHeart, setIsHeart] = useState(false);

  return (
    <Box>
      <ContentActionBtn text="감상평">
        <WriteIcon width="2.5rem" height="2.45rem" />
      </ContentActionBtn>
      <ContentActionBtn
        text="찜"
        onClickHandler={() => setIsHeart((prev) => !prev)}
      >
        {isHeart ? (
          <FillHeartIcon width="2.5rem" />
        ) : (
          <OutlineHeartIcon width="2.5rem" />
        )}
      </ContentActionBtn>
      <ContentActionBtn text="공유">
        <ShareIcon width="2.7rem" />
      </ContentActionBtn>
    </Box>
  );
}

export default BtnControlBox;

const Box = styled.div`
  display: flex;
  gap: 3rem;
`;
