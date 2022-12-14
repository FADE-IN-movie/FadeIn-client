import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import useWrite from "@hooks/useWrite";
import Background from "../atoms/Background";
import CustomPageTitle from "@components/common/CustomPageTitle";
import Form from "../organisms/Form";
import WritePoster from "../atoms/WritePoster";
import WritePosterSkeleton from "../atoms/WritePosterSkeleton";

type TemplatePropsType = {
  height: number;
};

const WriteTemplate = () => {
  const [bgHeight, setBgHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { query } = useRouter();
  const type = query.reviewId ? "edit" : "write";
  const { isLoading, isValidating } = useWrite();

  useEffect(() => {
    const getBackgroundHeight = () => {
      if (!containerRef.current) return;
      setBgHeight(containerRef.current.offsetHeight);
    };
    getBackgroundHeight();
    window.addEventListener("resize", getBackgroundHeight);
    return () => window.removeEventListener("resize", getBackgroundHeight);
  }, []);

  return (
    <Template height={bgHeight}>
      <Background height={bgHeight} />
      <Container ref={containerRef}>
        <Layout>
          <CustomPageTitle>
            감상평 {type === "write" ? "작성" : "수정"}
          </CustomPageTitle>
          <Form />
          <div className="posterWrap">
            {isLoading || isValidating ? (
              <WritePosterSkeleton />
            ) : (
              <WritePoster />
            )}
          </div>
        </Layout>
      </Container>
    </Template>
  );
};

export default WriteTemplate;

const Template = styled.div<TemplatePropsType>`
  height: ${(props) => `${props.height}px`};
  margin-bottom: -9rem;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  min-height: calc(100vh - 6rem);
  top: 6rem;
  left: 0;
  display: flex;
  justify-content: center;
`;

const Layout = styled.div`
  position: relative;
  max-width: 1280px;
  width: 100%;
  padding: 4rem;
  background: #141414;

  .posterWrap {
    position: absolute;
    top: 12rem;
    right: 8rem;
  }

  @media screen and (max-width: 800px) {
    .posterWrap {
      display: none;
    }
  }
`;
