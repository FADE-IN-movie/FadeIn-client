import styled from "styled-components";
import NotFoundText from "../NotFoundText";

const NotFoundTemplate = () => {
  return (
    <Template>
      <NotFoundText />
    </Template>
  );
};

export default NotFoundTemplate;

const Template = styled.div`
  padding-top: 15vh;
`;
