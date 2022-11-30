import styled from "styled-components";
import WriteIcon from "@images/write_icon.svg";

const WriteBtn = () => {
  return (
    <Button>
      <WriteIcon width="2rem" fill="white" />
    </Button>
  );
};

export default WriteBtn;

const Button = styled.button`
  display: flex;
  position: fixed;
  padding: 1.8rem;
  bottom: 3rem;
  right: 3rem;
  background: #a1a7c9;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 1;
    background: #898eaa;
  }

  &:active {
    background: #7a7f99;
  }
`;
