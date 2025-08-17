import { useEffect, useRef, useState } from 'react';

export const useSectionTransition = () => {
  const ref = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is entering viewport
            setIsExiting(false);
            setIsActive(true);
          } else {
            // Element is leaving viewport
            if (isActive) {
              setIsExiting(true);
              setTimeout(() => {
                setIsActive(false);
                setIsExiting(false);
              }, 800);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isActive]);

  const className = `section-wrapper ${isActive ? 'active' : ''} ${isExiting ? 'exiting' : ''}`;

  return { ref, className };
};

export default useSectionTransition;