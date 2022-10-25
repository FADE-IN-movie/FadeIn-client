import { ParsedUrlQuery } from "querystring";

interface IProps {
  query: ParsedUrlQuery;
  code: string;
}

function GoogleCallback({ code }: IProps) {
  if (!code) return null;
  return <div>{code}</div>;
}

export const getServerSideProps = ({ query: { code } }: IProps) => {
  return {
    props: { code },
  };
};

export default GoogleCallback;
