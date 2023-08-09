// components/StyledButton.tsx
import React from 'react';

interface StyledButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-primary-text text-background rounded"
    >
      {children}
    </button>
  );
};

export default StyledButton;
