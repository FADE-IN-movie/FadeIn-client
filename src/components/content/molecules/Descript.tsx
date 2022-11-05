import styled from "styled-components";

interface IProps {
  main?: boolean;
  overview?: boolean;
  title: string;
  value: string;
}

type DescriptPropsType = {
  isMain?: boolean;
  isOverview?: boolean;
};

function Descript({ main, overview, title, value }: IProps) {
  return (
    <Box isMain={main} isOverview={overview}>
      <span className="title">{title}</span>
      <span className="value">{value}</span>
    </Box>
  );
}

export default Descript;

const Box = styled.div<DescriptPropsType>`
  display: flex;
  flex-direction: ${(props) => props.isOverview && "column"};
  font-size: 1.3rem;

  .title {
    color: ${(props) => (props.isMain ? "white" : "#bbbbbb")};
    margin-bottom: ${(props) => props.isOverview && "1rem"};
    margin-right: 1.5rem;
  }

  .value {
    line-height: 1.4;
  }
`;
