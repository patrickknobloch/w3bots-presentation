import React, { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => (
  <div className={`rounded-xl border border-neutral-600/10 shadow-md ${className}`}>{children}</div>
);

export default Card;
