import React from 'react';

interface BadgeProps {
  variant?: string;
  className?: string;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant, className, children }) => (
  <span className={`badge bg-black text-white px-3 py-1 text-sm flex w-fit rounded-full ${className}`}>{children}</span>
);

export default Badge;
