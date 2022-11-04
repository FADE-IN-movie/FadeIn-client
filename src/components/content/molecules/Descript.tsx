import styled from "styled-components";

interface IProps {
  main?: boolean;
  title: string;
  value: string;
}

type DescriptPropsType = {
  isMain?: boolean;
};

function Descript({ main, title, value }: IProps) {
  return (
    <Box isMain={main}>
      <span className="title">{title}</span>
      <span className="value">{value}</span>
    </Box>
  );
}

export default Descript;

const Box = styled.div<DescriptPropsType>`
  font-size: 1.3rem;
  .title {
    color: ${(props) => props.isMain && "white"};
    margin-right: 1.5rem;
  }
`;
