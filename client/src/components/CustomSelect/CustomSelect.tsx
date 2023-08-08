import React, { FC, ChangeEvent } from 'react';
import { IClientStaffData } from '../../types/types';

interface SelectorOption {
  id: string;
  name: string;
  availability: boolean;
}

interface SelectorProps {
  options: SelectorOption[];
  onChange: (selected: string) => void;
  value: string;
}

const CustomSelector: FC<SelectorProps> = ({ options, onChange, value }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div
      className="flex items-center mt-2"
      role="combobox"
      aria-label="custom-selector"
      data-testid="custom-selector"
    >
      <select
        onChange={handleChange}
        value={value}
        className="form-select block w-full py-2 px-4 rounded-md border border-primary-text bg-background text-border text-primary-text shadow-sm"
        data-testid="custom-selector-select"
      >
        {options.map((option) => (
          <option
            key={option.id}
            value={option.name}
            disabled={!option.availability}
            className="py-1"
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelector;
