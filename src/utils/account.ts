export function googleSignIn() {
  const handleCallback = (res: Object) => {
    // console.log(res);
    // window.location.reload();
  };

  //@ts-ignore
  google.accounts.id.initialize({
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    callback: handleCallback,
  });

  //@ts-ignore
  google.accounts.id.renderButton(document.getElementById("googleIdLogin"), {
    theme: "outline",
    size: "large",
    logo_alignment: "left",
    width: 250,
  });

  //@ts-ignore
  google.accounts.id.prompt();
}

export function naverSignIn() {
  const initializeNaver = () => {
    //@ts-ignore
    const signIn = new naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
      callbackUrl: "http://localhost:3000/auth/callback/naver",
      isPopup: true,
      loginButton: { color: "green", type: 3, height: 40, width: 250 },
    });

    signIn.init();
  };

  initializeNaver();
}
