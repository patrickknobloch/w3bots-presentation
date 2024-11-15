import React, { ReactNode } from 'react';

interface ScrollAreaProps {
  className?: string;
  children: ReactNode;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({ className, children }) => (
  <div className={`overflow-y-auto ${className}`}>{children}</div>
);

export default ScrollArea;
