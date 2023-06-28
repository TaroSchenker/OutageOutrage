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
    <div className="p-6 bg-background shadow-lg rounded-lg text-border border-2 border-primary-text my-2 transition-all duration-300 ease-in-out hover:shadow-xl">
      <h2 className="text-xl font-bold mb-2 text-primary-text">Budget</h2>
      <div className="mb-4">
        <div className="w-full bg-dimmed-background rounded h-4 overflow-hidden">
          <div
            style={{ width: `${(budget / 100) * 100}%` }}
            className="bg-primary-text h-full"
          />
        </div>
      </div>
      <h3 className="font-semibold mb-1 text-primary-text">Emergency Fund: ${emergencyFund}</h3>
      <button className="px-4 py-2 bg-primary-text text-background rounded">
        Add to Emergency Fund
      </button>
    </div>
  );
};

export default BudgetIndicator;
