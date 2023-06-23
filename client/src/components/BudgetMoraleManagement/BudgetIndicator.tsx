// components/BudgetMoraleManagement/BudgetIndicator.tsx

import React from 'react';

interface BudgetIndicatorProps {
  budget: number;
  emergencyFund: number;
}

const BudgetIndicator: React.FC<BudgetIndicatorProps> = ({ budget, emergencyFund }) => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold mb-2">Budget</h2>
      <div className="mb-4">
        <div className="w-full bg-blue-200 rounded h-4 overflow-hidden">
          <div style={{ width: `${(budget / 100) * 100}%` }} className="bg-blue-500 h-full" />
        </div>
      </div>
      <h3 className="font-semibold mb-1">Emergency Fund: ${emergencyFund}</h3>
      <button className="px-4 py-2 bg-green-500 text-white rounded">Add to Emergency Fund</button>
    </div>
  );
};

export default BudgetIndicator;
