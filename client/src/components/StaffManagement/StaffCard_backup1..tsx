import React, { useState } from 'react';
import { IClientStaffData, Role } from '../../types/types';
import { ProgressBar } from '../ProgressBar/ProgressBar';

interface StaffCardProps {
  staff: IClientStaffData;
}

const StaffCard: React.FC<StaffCardProps> = ({ staff }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  console.log("Card staff", staff);

  return (
    <div className="rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 ease-in-out">
      <div className="bg-gunmetal text-white px-6 py-4">
        <h2 className="text-lg font-bold">
          {staff.name}
          {staff.availability ? (
            <span className="ml-2 text-green-500">Available</span>
          ) : (
            <span className="ml-2 text-red-500">Unavailable</span>
          )}
        </h2>
        <p>{staff.role}</p>
      </div>

      <div className="p-6 bg-white">
        <p className="text-sm mt-2">Expertise: {staff.expertise}</p>

        <button
          onClick={toggleAccordion}
          className="mt-2 text-left text-blue-500"
        >
          {isOpen ? 'Show Less' : 'Show More'}
        </button>
        
        {isOpen ? (
          <div className="w-full flex flex-col mt-4">
            <ProgressBar
              name="Ambition"
              value={staff.ambition * 10}
              color="yellow"
            />
            <ProgressBar
              name="Skill"
              value={staff.skill * 10}
              color="yellow"
            />
            <ProgressBar
              name="Stamina"
              value={staff.stamina * 10}
              color="green"
            />
            <ProgressBar
              name="Morale"
              value={staff.morale * 10}
              color="red"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StaffCard;
