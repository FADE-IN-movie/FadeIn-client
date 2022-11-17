export function clickOutside(
  target: EventTarget,
  component: HTMLElement,
  setVisibility: (isVisible: boolean) => void,
  isInput?: boolean
) {
  if (!component?.contains(target as HTMLElement)) setVisibility(false);
  if (isInput && (component as HTMLInputElement).value) setVisibility(true);
}
