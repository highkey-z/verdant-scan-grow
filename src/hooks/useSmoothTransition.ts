import { useEffect, useRef } from 'react';

export const useSmoothTransition = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
          } else {
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return ref;
};

export default useSmoothTransition;