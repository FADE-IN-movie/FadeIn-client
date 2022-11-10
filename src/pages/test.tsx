import { useRef } from "react";
import styled from "styled-components";

const ReviewPage = () => {
  const isKakaoInit = useRef(false);

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const shareKakao = () => {
    if (!isKakaoInit.current) {
      //@ts-ignore
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
      isKakaoInit.current = true;
    }

    //@ts-ignore
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Fade-In",
        description: "설명",
        imageUrl: "https://avatars.githubusercontent.com/u/115543882?s=200&v=4",
        link: {
          webUrl: "http://localhost:3000",
        },
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            webUrl: "http://localhost:3000",
          },
        },
      ],
      installTalk: true,
    });
  };

  return (
    <Wrap>
      <button onClick={copyUrl}>링크 복사하기</button>
      <button onClick={shareKakao}>카카오톡으로 공유하기</button>
    </Wrap>
  );
};

export default ReviewPage;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
