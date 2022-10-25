import Head from "next/head";

interface IProps {
  title?: string;
}

function SEO({ title }: IProps) {
  return (
    <Head>
      <title>{title && `${title} | `}FADE-IN</title>
    </Head>
  );
}

export default SEO;
