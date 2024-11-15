import React from 'react';

interface BadgeProps {
  variant?: string;
  className?: string;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant, className, children }) => (
  <span className={`badge bg-neutral-900 dark:bg-white/5 text-white dark:text-neutral-100 px-3 py-1 text-sm flex w-fit rounded-md ${className}`}>{children}</span>
);

export default Badge;
