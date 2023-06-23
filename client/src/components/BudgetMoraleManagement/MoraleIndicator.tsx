// components/BudgetMoraleManagement/MoraleIndicator.tsx

import React from 'react';

interface MoraleIndicatorProps {
  morale: number;
}

const MoraleIndicator: React.FC<MoraleIndicatorProps> = ({ morale }) => {
  return (
    <div className="p-4 bg-white shadow rounded mt-4">
      <h2 className="text-lg font-bold mb-2">Morale</h2>
      <div className="mb-4">
        <div className="w-full bg-blue-200 rounded h-4 overflow-hidden">
          <div style={{ width: `${morale}%` }} className="bg-blue-500 h-full" />
        </div>
      </div>
    </div>
  );
};

export default MoraleIndicator;
