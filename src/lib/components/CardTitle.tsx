import React from 'react';

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({ className, children }) => (
  <h2 className={`text-2xl font-bold ${className}`}>{children}</h2>
);

export default CardTitle;
