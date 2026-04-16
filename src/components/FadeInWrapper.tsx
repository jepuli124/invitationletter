import React, { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface FadeInWrapperProps {
  children: ReactNode;
  duration?: number
  delay?: number
}

const FadeInWrapper: React.FC<FadeInWrapperProps> = ({ children, duration = 400, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const visible = setTimeout(() => {
      setIsVisible(true);
    }, delay)
    return () => {
      clearTimeout(visible)
    }
  }, []);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity '+ duration +'ms ease',
      }}
    >
      {children}
    </div>
  );
};

export default FadeInWrapper;