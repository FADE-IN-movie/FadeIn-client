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
  google.accounts.id.renderButton(document.getElementById("googleSignInDiv"), {
    theme: "outline",
    size: "large",
    type: "icon",
  });
}

export function naverSignIn() {}
