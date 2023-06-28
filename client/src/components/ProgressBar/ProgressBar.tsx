import React from 'react';

interface ProgressBarProps {
  name: string;
  value: number;
  color: string;
}

const mapColorToScheme = (color: string) => {
  switch (color) {
    case 'yellow':
      return 'primary-text';
    case 'purple':
      return 'secondary-background';
    case 'blue':
      return 'dark-background';
    case 'red':
      return 'dimmed-background';
    case 'teal':
      return 'secondary-background';
    case 'green':
      return 'secondary-background';
    default:
      return 'dimmed-background';
  }
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ name, value, color }) => {
  const colorClass = mapColorToScheme(color);

  return (
    <div className="w-full flex flex-col">
      <p className="text-sm mt-2 text-left">{name}:</p>
      <div className="h-1 rounded bg-secondary-background w-3/4 my-1">
        <div style={{ width: `${value}%` }} className={`h-1 rounded bg-${colorClass}`}></div>
      </div>
    </div>
  )
};
