import styled from "styled-components";

import ContentTemplate from "@components/content/templates/ContentTemplate";
import SEO from "@components/common/SEO";
import useContentDetail from "@hooks/useContentDetail";

const ContentDetailPage = () => {
  const { data } = useContentDetail();
  const yearText =
    data && data.releaseDate ? `(${data.releaseDate.slice(0, 4)})` : "";

  return (
    <Wrap>
      <SEO title={data ? `${data.title} ${yearText}` : ""} />
      <ContentTemplate />
    </Wrap>
  );
};

export default ContentDetailPage;

const Wrap = styled.div``;
