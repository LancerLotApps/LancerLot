import * as React from 'react';
import {useReveal} from '../hooks/useReveal';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

function RevealOnScroll({children, className = '', delayMs = 0}: RevealOnScrollProps) {
  const {ref, visible} = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`.trim()}
      style={delayMs ? {transitionDelay: `${delayMs}ms`} : undefined}
    >
      {children}
    </div>
  );
}

export default RevealOnScroll;
