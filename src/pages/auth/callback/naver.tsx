import { useRouter } from "next/router";
import { useEffect } from "react";

function NaverCallback() {
  const { asPath } = useRouter();

  useEffect(() => {
    const data = asPath.split("#")[1];
    const accessToken = data.split("=")[1];
  }, [asPath]);

  return <div />;
}

export default NaverCallback;
