import React, { useState } from 'react';
import { IClientStaffData, Role } from '../../types/types';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import avatar from '../../assets/images/staff/staff_dev.png';
interface StaffCardProps {
  staff: IClientStaffData;
}

const StaffCard: React.FC<StaffCardProps> = ({ staff }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`bg-gunmetal rounded-lg shadow-lg overflow-hidden text-almond my-2 transition-all duration-300 ease-in-out border-2 border-light-cyan ${isOpen ? 'col-span-2' : ''}`}>


      <div className={`px-6 py-4 flex items-center space-x-4 cursor-pointer ${isOpen ? 'border boder-almond': ''} `} onClick={toggleCard}>
        <img src={avatar} alt={staff.name} className="h-16 w-16 rounded-full"/>
        <div>
          <h2 className="text-lg font-bold">{staff.name}</h2>
          <p>{staff.role}</p>
        </div>
      </div>
      {isOpen && (
        <div className="px-6 py-4">
          <p>Salary: ${staff.salary}</p>
          <p className="mt-2">Expertise: {staff.expertise}</p>
          <div className="mt-2">
            <label>Morale: </label>
            <ProgressBar name="Paul" value={staff.morale * 10} color="cadet-gray" />
          </div>
          <p className="mt-2">Current Task: {staff.currentTask ? staff.currentTask : "No task assigned"}</p>
          {/* <div className="px-6 py-4 bg-outer-space text-cadet-gray">
            <div className="mt-4">
              <p>Ambition: {staff.ambition}</p>
              <p>Loyalty: {staff.loyalty}</p>
              <p>Skill Level: {staff.skillLevel}</p>
              <p>Resilience: {staff.resilience}</p>
              <p>Adaptability: {staff.adaptability}</p>
              <p>Satisfaction: {staff.satisfaction}</p> */}
              {/* add more attributes here as needed */}
            {/* </div>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default StaffCard;
