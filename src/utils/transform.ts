export const convertRemToPixels = (rem: number) => {
  return (
    rem *
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("left")
    )
  );
};
