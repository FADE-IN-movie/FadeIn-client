import { useRef } from "react";
import styled from "styled-components";

const ReviewPage = () => {
  const url = "http://www.naver.com"; // 배포한 뒤 수정 필요
  const isKakaoInit = useRef(false);
  const encodedUrl = encodeURI(encodeURIComponent(url));
  const naverBlogReqUrl =
    "https://share.naver.com/web/shareView.nhn?url=" +
    encodedUrl +
    "&title=" +
    "영화 이름"; // 수정

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

  const shareNaverBlog = () => window.open(naverBlogReqUrl);

  return (
    <Wrap>
      <button onClick={copyUrl}>링크 복사하기</button>
      <button onClick={shareKakao}>카카오톡으로 공유하기</button>
      <button onClick={shareNaverBlog}>네이버 블로그로 공유하기</button>
    </Wrap>
  );
};

export default ReviewPage;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
