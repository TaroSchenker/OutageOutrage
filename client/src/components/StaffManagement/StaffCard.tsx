import React from 'react';
import { Role } from '../../types/types';


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
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-2">{staff.name} {staff.availability ? <span className="text-green-500">●</span> : <span className="text-red-500">●</span>}</h2>
      <h3 className="text-gray-500 mb-2">{staff.role}</h3>
      <p className="text-sm mt-2">Expertise: {staff.expertise}</p>
      
      <div className="w-full flex flex-col">
        <p className="text-sm mt-2 text-left">Ambition:</p>
        <div className="h-1 rounded bg-gray-200 w-3/4 my-1">
          <div style={{ width: `${staff.ambition * 10}%` }} className="h-1 rounded bg-yellow-500"></div>
        </div>
      </div>
      
      <div className="w-full flex flex-col">
        <p className="text-sm mt-2 text-left">Loyalty:</p>
        <div className="h-1 rounded bg-gray-200 w-3/4 my-1">
          <div style={{ width: `${staff.loyalty * 10}%` }} className="h-1 rounded bg-purple-500"></div>
        </div>
      </div>
      
      <div className="w-full flex flex-col">
        <p className="text-sm mt-2 text-left">Skill Level:</p>
        <div className="h-1 rounded bg-gray-200 w-3/4 my-1">
          <div style={{ width: `${staff.skillLevel * 10}%` }} className="h-1 rounded bg-blue-500"></div>
        </div>
      </div>
      
      <div className="w-full flex flex-col">
        <p className="text-sm mt-2 text-left">Resilience:</p>
        <div className="h-1 rounded bg-gray-200 w-3/4 my-1">
          <div style={{ width: `${staff.resilience * 10}%` }} className="h-1 rounded bg-red-500"></div>
        </div>
      </div>
      
      <div className="w-full flex flex-col">
        <p className="text-sm mt-2 text-left">Adaptability:</p>
        <div className="h-1 rounded bg-gray-200 w-3/4 my-1">
          <div style={{ width: `${staff.adaptability * 10}%` }} className="h-1 rounded bg-teal-500"></div>
        </div>
      </div>
      
      <div className="w-full flex flex-col">
        <p className="text-sm mt-2 text-left">Morale:</p>
        <div className="h-1 rounded bg-gray-200 w-3/4 my-1">
          <div style={{ width: `${staff.morale}%` }} className="h-1 rounded bg-green-500"></div>
        </div>
      </div>
      
      <div className="w-full flex flex-col">
        <p className="text-sm mt-2 text-left">Satisfaction:</p>
        <div className="h-1 rounded bg-gray-200 w-3/4 my-1">
          <div style={{ width: `${staff.satisfaction}%` }} className="h-1 rounded bg-blue-500"></div>
        </div>
      </div>

    </div>
  );
};

export default StaffCard;
