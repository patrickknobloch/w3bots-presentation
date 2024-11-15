import React, { ReactNode } from 'react';

interface ButtonProps {
  variant?: string;
  className?: string;
  onClick: () => void;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, className, onClick, children }) => (
  <button
    onClick={onClick}
    className={`btn ${variant === 'outline' ? 'btn-outline' : 'btn-primary'} ${className}`}
  >
    {children}
  </button>
);

export default Button;
