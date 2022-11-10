import styled from "styled-components";

const ReviewPage = () => {
  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <Wrap>
      <button onClick={copyUrl}>링크 복사하기</button>
    </Wrap>
  );
};

export default ReviewPage;

const Wrap = styled.div``;
