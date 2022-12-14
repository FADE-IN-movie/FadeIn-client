import Head from "next/head";

interface IProps {
  title?: string;
}

const SEO = ({ title }: IProps) => {
  const text = (title ? `${title} | ` : "") + "FADE-IN";
  return (
    <Head>
      <title>{text}</title>
    </Head>
  );
};

export default SEO;
