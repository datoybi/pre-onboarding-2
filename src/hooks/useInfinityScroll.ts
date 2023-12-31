import { useEffect, useRef } from 'react';

interface IntersectionObserverPops {
  callback: () => void;
  option?: {
    threshold?: number | number[];
    root?: Element | null;
    rootMargin?: string;
  };
}

const useInfinityScroll = ({
  callback,
  option = {},
}: IntersectionObserverPops) => {
  const observeRef = useRef(null);

  const options = {
    threshold: 0.3,
    ...option,
  };

  const sendCallback = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      callback();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(sendCallback, options);
    if (observeRef.current) observer.observe(observeRef.current);
    return () => {
      observer.disconnect();
    };
  }, [sendCallback]);

  return observeRef;
};

export default useInfinityScroll;
