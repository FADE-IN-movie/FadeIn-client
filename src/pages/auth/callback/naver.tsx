import { useRouter } from "next/router";
import { useEffect } from "react";

import auth from "@lib/api/authAPI";

function NaverCallback() {
  const { asPath } = useRouter();

  useEffect(() => {
    const data = asPath.split("#")[1];
    const accessToken = data.split("=")[1].split("&")[0];

    auth.signIn("naver", accessToken);
  }, [asPath]);

  return <></>;
}

export default NaverCallback;
