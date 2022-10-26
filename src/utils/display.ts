export function clickOutside(
  component: HTMLElement,
  setVisibility: (isVisible: boolean) => void,
  isInput?: boolean
) {
  const onCloseComponent = ({ target }: Event) => {
    if (!component?.contains(target as HTMLElement)) setVisibility(false);
    if (isInput && (component as HTMLInputElement).value) setVisibility(true);
  };

  document.addEventListener("click", onCloseComponent);
  return () => document.removeEventListener("click", onCloseComponent);
}
