import React, { ReactNode } from 'react';

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => (
  <div className={`border-b p-4 ${className}`}>{children}</div>
);

export default CardHeader;
