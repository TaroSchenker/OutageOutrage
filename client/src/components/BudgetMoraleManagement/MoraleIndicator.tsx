// components/BudgetMoraleManagement/MoraleIndicator.tsx
import React from 'react';

interface MoraleIndicatorProps {
  morale: number;
}

const MoraleIndicator: React.FC<MoraleIndicatorProps> = ({ morale }) => {
  return (
    <div className="p-6 bg-gunmetal shadow-lg rounded-lg text-light-cyan border-2 border-almond my-2 transition-all duration-300 ease-in-out hover:shadow-xl mt-4">
      <h2 className="text-xl font-bold mb-2 text-sky-blue">Morale</h2>
      <div className="mb-4">
        <div className="w-full bg-dim-gray rounded h-4 overflow-hidden">
          <div style={{ width: `${morale}%` }} className="bg-sky-blue h-full" />
        </div>
      </div>
    </div>
  );
};

export default MoraleIndicator;
