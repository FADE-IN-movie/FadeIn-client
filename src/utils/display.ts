export function clickOutside(
  component: HTMLElement,
  setVisibility: (isVisible: boolean) => void
) {
  const onCloseComponent = ({ target }: Event) => {
    if (!component?.contains(target as HTMLElement)) setVisibility(false);
  };

  document.addEventListener("click", onCloseComponent);
  return () => document.removeEventListener("click", onCloseComponent);
}
