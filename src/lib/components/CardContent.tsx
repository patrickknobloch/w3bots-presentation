import React, { ReactNode } from 'react';

interface CardContentProps {
  className?: string;
  children: ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ className, children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

export default CardContent;
