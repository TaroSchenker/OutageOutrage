// components/BudgetMoraleManagement/BudgetIndicator.tsx
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
    <div className="p-6 bg-gunmetal shadow-lg rounded-lg text-light-cyan border-2 border-almond my-2 transition-all duration-300 ease-in-out hover:shadow-xl">
      <h2 className="text-xl font-bold mb-2 text-sky-blue">Budget</h2>
      <div className="mb-4">
        <div className="w-full bg-dim-gray rounded h-4 overflow-hidden">
          <div
            style={{ width: `${(budget / 100) * 100}%` }}
            className="bg-sky-blue h-full"
          />
        </div>
      </div>
      <h3 className="font-semibold mb-1 text-almond">Emergency Fund: ${emergencyFund}</h3>
      <button className="px-4 py-2 bg-almond text-gunmetal rounded">
        Add to Emergency Fund
      </button>
    </div>
  );
};

export default BudgetIndicator;
