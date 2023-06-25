// components/BudgetMoraleManagement/BudgetIndicator.tsx

import { useQuery } from '@tanstack/react-query';
import React from 'react';

interface BudgetIndicatorProps {
  budget: number;
  emergencyFund: number;
}
const BudgetIndicator: React.FC<BudgetIndicatorProps> = ({
  budget,
  emergencyFund,
}) => {
  return (
    <div className="p-4 bg-almond shadow rounded">
      <h2 className="text-lg font-bold mb-2 text-outer-space">Budget</h2>
      <div className="mb-4">
        <div className="w-full bg-cadet-gray rounded h-4 overflow-hidden">
          <div
            style={{ width: `${(budget / 100) * 100}%` }}
            className="bg-outer-space h-full"
          />
        </div>
      </div>
      <h3 className="font-semibold mb-1 text-dim-gray">Emergency Fund: ${emergencyFund}</h3>
      <button className="px-4 py-2 bg-gunmetal text-almond rounded">
        Add to Emergency Fund
      </button>
    </div>
  );
};

export default BudgetIndicator;
