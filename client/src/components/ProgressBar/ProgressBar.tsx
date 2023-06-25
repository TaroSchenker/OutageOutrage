import React from 'react';

interface ProgressBarProps {
  name: string;
  value: number;
  color: string;
}

const mapColorToScheme = (color: string) => {
  switch (color) {
    case 'yellow':
      return 'almond';
    case 'purple':
      return 'cadet-gray';
    case 'blue':
      return 'outer-space';
    case 'red':
      return 'dim-gray';
    case 'teal':
      return 'cadet-gray';
    case 'green':
      return 'cadet-gray';
    default:
      return 'dim-gray';
  }
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ name, value, color }) => {
  const colorClass = mapColorToScheme(color);

  return (
    <div className="w-full flex flex-col">
      <p className="text-sm mt-2 text-left">{name}:</p>
      <div className="h-1 rounded bg-cadet-gray w-3/4 my-1">
        <div style={{ width: `${value}%` }} className={`h-1 rounded bg-${colorClass}`}></div>
      </div>
    </div>
  )
};
