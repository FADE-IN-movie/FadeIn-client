export const clickOutside = (
  target: EventTarget,
  component: HTMLElement,
  setVisibility: (isVisible: boolean) => void,
  isInput?: boolean
) => {
  if (!component?.contains(target as HTMLElement)) setVisibility(false);
  if (isInput && (component as HTMLInputElement).value) setVisibility(true);
};

export const disableScroll = () => {
  document.body.style.cssText = `
  position: fixed; 
  top: -${window.scrollY}px;
  overflow-y: scroll;
  width: 100%;`;
};

export const enableScroll = () => {
  const scrollY = document.body.style.top;
  document.body.style.cssText = "";
  window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
};
