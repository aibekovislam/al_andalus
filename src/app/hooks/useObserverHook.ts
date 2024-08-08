import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback: any, options: any) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
        }
      });
    }, options);

    const { current: element } = elementRef;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [callback, options]);

  return elementRef;
};

export default useIntersectionObserver;