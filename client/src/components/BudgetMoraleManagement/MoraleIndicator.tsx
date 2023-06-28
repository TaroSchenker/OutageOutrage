// components/BudgetMoraleManagement/MoraleIndicator.tsx
import React from 'react';

interface MoraleIndicatorProps {
  morale: number;
}

const MoraleIndicator: React.FC<MoraleIndicatorProps> = ({ morale }) => {
  return (
    <div className="p-6 bg-background shadow-lg rounded-lg text-border border-2 border-primary-text my-2 transition-all duration-300 ease-in-out hover:shadow-xl mt-4">
      <h2 className="text-xl font-bold mb-2 text-secondary-text">Morale</h2>
      <div className="mb-4">
        <div className="w-full bg-dimmed-background rounded h-4 overflow-hidden">
          <div style={{ width: `${morale}%` }} className="bg-secondary-text h-full" />
        </div>
      </div>
    </div>
  );
};

export default MoraleIndicator;
