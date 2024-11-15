import React, { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => (
  <div className={`rounded-xl border border-neutral-600/30 shadow-md ${className} bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300/5 via-blue-950/0 to-slate-950/0`}>{children}</div>
);

export default Card;
