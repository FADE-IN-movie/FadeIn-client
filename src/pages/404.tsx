import styled from "styled-components";
import NotFoundTemplate from "@components/404/templates/NotFoundTemplate";
import SEO from "@components/common/SEO";

const NotFound = () => {
  return (
    <Wrap>
      <SEO title="Not Found" />
      <NotFoundTemplate />
    </Wrap>
  );
};

export default NotFound;

const Wrap = styled.div``;
