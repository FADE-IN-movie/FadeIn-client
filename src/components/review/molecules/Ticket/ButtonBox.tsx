import styled from "styled-components";

import EditIcon from "@images/write_icon.svg";
import DeleteIcon from "@images/delete_icon.svg";

const ButtonBox = () => {
  return (
    <Box>
      <button title="수정">
        <EditIcon width="1.5rem" fill="#E4E4E4" />
      </button>
      <div className="dividingLine" />
      <button title="삭제">
        <DeleteIcon width="1.2rem" fill="#E4E4E4" />
      </button>
    </Box>
  );
};

export default ButtonBox;

const Box = styled.div`
  display: flex;

  button {
    background: rgba(53, 53, 53, 0.85);
    padding: 0.57em 1.8rem 0.4rem 1.8rem;

    &:hover {
      opacity: 0.9 !important;
    }

    &:active {
      opacity: 1 !important;
    }

    &:first-child {
      border-radius: 20px 0 0 20px;
      padding-right: 1.5rem;
    }

    &:last-child {
      border-radius: 0 20px 20px 0;
      padding-left: 1.5rem;
    }
  }

  .dividingLine {
    background: #878787;
    width: 2px;
  }
`;
