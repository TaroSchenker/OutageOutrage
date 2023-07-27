// components/ProgressBar/ProgressBar.tsx

import React from 'react';

interface ProgressBarProps {
  value: number; // The value to represent on the progress bar
  color?: string; // Optional color for the progress bar
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  color = 'bg-primary-text',
}) => {
  return (
    <div className="w-full bg-dimmed-background rounded h-4 overflow-hidden">
      <div style={{ width: `${value}%` }} className={`${color} h-full`} />
    </div>
  );
};

export default ProgressBar;
