import { useState } from "react";
import styled from "styled-components";

import ContentActionBtn from "../molecules/ContentActionBtn";
import Modal from "@components/common/Modal";

import WriteIcon from "@images/write_icon.svg";
import OutlineHeartIcon from "@images/outline_heart_icon.svg";
import FillHeartIcon from "@images/fill_heart_icon.svg";
import ShareIcon from "@images/share_icon.svg";
import ShareBox from "../molecules/ShareBox";

const BtnControlBox = () => {
  const [isHeart, setIsHeart] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <>
      <Box>
        <ContentActionBtn text="감상평">
          <WriteIcon width="3rem" height="2.95rem" />
        </ContentActionBtn>
        <ContentActionBtn
          text="찜"
          onClickHandler={() => setIsHeart((prev) => !prev)}
        >
          {isHeart ? (
            <FillHeartIcon width="3rem" />
          ) : (
            <OutlineHeartIcon width="3rem" />
          )}
        </ContentActionBtn>
        <ContentActionBtn text="공유">
          <ShareIcon width="2.45rem" />
        </ContentActionBtn>
      </Box>

      <Modal isOpen={isShareModalOpen} setIsOpen={setIsShareModalOpen}>
        <ShareBox />
      </Modal>
    </>
  );
};

export default BtnControlBox;

const Box = styled.div`
  display: flex;
  gap: 4rem;
`;
