import { IContentInfo } from "@typings/info";
import { useCallback, useEffect, useRef } from "react";

const useInfiniteScroll = (
  isValidating: boolean,
  isSameSize: boolean,
  setSize: (
    size: number | ((_size: number) => number)
  ) => Promise<IContentInfo[][] | undefined>
) => {
  const target = useRef(null);

  const onIntersect: IntersectionObserverCallback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting && !isValidating && isSameSize) {
        observer.unobserve(entry.target);
        setSize((prev) => prev + 1);
        observer.observe(entry.target);
      }
    },
    [isValidating, isSameSize, setSize]
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target.current) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.7 });
      observer.observe(target.current);
    }

    return () => observer && observer.disconnect();
  }, [onIntersect]);

  return {
    ref: target,
    style: { margin: "3rem 0", height: "3rem" },
  };
};

export default useInfiniteScroll;
