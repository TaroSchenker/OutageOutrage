import React from 'react';

interface ProgressBarProps {
  name: string;
  value: number;
  color: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ name, value, color }) => (
  <div className="w-full flex flex-col">
    <p className="text-sm mt-2 text-left">{name}:</p>
    <div className="h-1 rounded bg-gray-200 w-3/4 my-1">
      <div style={{ width: `${value}%` }} className={`h-1 rounded bg-${color}-500`}></div>
    </div>
  </div>
);
