
import React from 'react';

interface MoraleIndicatorProps {
  morale: number;
}

const MoraleIndicator: React.FC<MoraleIndicatorProps> = ({ morale }) => {
  return (
    <div className="p-4 bg-almond shadow rounded mt-4">
      <h2 className="text-lg font-bold mb-2 text-outer-space">Morale</h2>
      <div className="mb-4">
        <div className="w-full bg-cadet-gray rounded h-4 overflow-hidden">
          <div style={{ width: `${morale}%` }} className="bg-outer-space h-full" />
        </div>
      </div>
    </div>
  );
};

export default MoraleIndicator;
