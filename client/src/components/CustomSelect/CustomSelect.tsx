import React, { FC, ChangeEvent } from 'react';

interface SelectorProps {
  options: string[];
  onChange: (selected: string) => void;
}

const CustomSelector: FC<SelectorProps> = ({ options, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex items-center mt-2">
      <label className="font-medium text-base mr-2">Select Option:</label>
      <select onChange={handleChange} className="form-select block w-full py-2 px-4 rounded-md border border-almond bg-gunmetal text-light-cyan shadow-sm">
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
