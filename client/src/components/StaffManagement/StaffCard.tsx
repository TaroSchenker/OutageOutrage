import React, { useState } from 'react';
import { Role } from '../../types/types';
import { ProgressBar } from '../ProgressBar/ProgressBar';


interface StaffCardProps {
  staff: {
    name: string;
    role: Role;
    expertise: string;
    ambition: number;
    loyalty: number;
    skillLevel: number;
    resilience: number;
    adaptability: number;
    morale: number;
    currentTask: string | null;
    availability: boolean;
    salary: number;
    satisfaction: number;
  };
}

const StaffCard: React.FC<StaffCardProps> = ({ staff }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    }
  
    return (
      <div className="p-6 my-1 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h2 className="text-2xl font-bold mb-2">{staff.name} {staff.availability ? <span className="text-green-500">●</span> : <span className="text-red-500">●</span>}</h2>
        <h3 className="text-gray-500 mb-2">{staff.role}</h3>
        <p className="text-sm mt-2">Expertise: {staff.expertise}</p>
  
        <button onClick={toggleAccordion} className="mt-2 text-left text-blue-500">
          {isOpen ? 'Show Less' : 'Show More'}
        </button>
        {isOpen && (
        <div className="w-full flex flex-col">
      <ProgressBar name="Ambition" value={staff.ambition * 10} color="yellow" />
      <ProgressBar name="Loyalty" value={staff.loyalty * 10} color="purple" />
      <ProgressBar name="Skill Level" value={staff.skillLevel * 10} color="blue" />
      <ProgressBar name="Resilience" value={staff.resilience * 10} color="red" />
      <ProgressBar name="Adaptability" value={staff.adaptability * 10} color="teal" />
      <ProgressBar name="Morale" value={staff.morale} color="green" />
      <ProgressBar name="Satisfaction" value={staff.satisfaction} color="blue" />
      </div>
      )}
    </div>
  );
};

export default StaffCard;
