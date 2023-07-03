import React, { FC, ChangeEvent } from 'react';

interface SelectorProps {
  options: string[];
  onChange: (selected: string) => void;
  value: string
}

const CustomSelector: FC<SelectorProps> = ({ options, onChange, value }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex items-center mt-2">
      <label className="font-medium text-base mr-2">Select Option:</label>
      <select onChange={handleChange} value={value}  className="form-select block w-full py-2 px-4 rounded-md border border-primary-text bg-background text-border  text-primary-text shadow-sm">
        {options.map((option, index) => (
          <option key={index} value={option} className="py-1">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelector;