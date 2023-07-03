import React, { useState } from 'react';
import { IClientStaffData, IClientTaskData, Role } from '../../types/types';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import avatar2 from '../../assets/images/staff/staff_dev.png';
import BackendDev from '../../assets/images/staff/BackendDev.png';
import FrontendDev from '../../assets/images/staff/FrontendDev.png';
import ProjectManager from '../../assets/images/staff/ProjectManager.png';
import Security from '../../assets/images/staff/Security.png';
import UIUX from '../../assets/images/staff/UIUX.png';
import Staff from '../../assets/images/staff/staff.png';
import StaffDev from '../../assets/images/staff/staff_dev.png';


interface StaffCardProps {
  staff: IClientStaffData;
  tasks: IClientTaskData[];
}
const staffImages = [BackendDev, FrontendDev, ProjectManager, Security, UIUX, Staff, StaffDev, avatar2];
const getRandomImage = () => {
  return staffImages[Math.floor(Math.random() * staffImages.length)];
};

const StaffCard: React.FC<StaffCardProps> = ({ staff, tasks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen((prev) => !prev);
  };
  const avatar = getRandomImage();
// ...
return (
  <div className={`bg-background rounded-lg shadow-lg overflow-hidden text-primary-text my-2 transition-all duration-300 ease-in-out border-2 border-border relative cursor-pointer  ${isOpen ? 'col-span-2' : ''}`} onClick={toggleCard}>
    <img src={avatar} alt={staff.name} className="h-full w-full object-cover"/>
    <div className={`px-6 py-4 absolute bottom-0 left-0 bg-opacity-75 bg-background flex flex-col justify-center ${isOpen ? 'h-full' : 'h-20'}`}>
      <div className="flex items-center space-x-4">
        <h2 className="text-lg font-bold">{staff.name}</h2>
        <p>{staff.role}</p>
      </div>
      {isOpen && (
        <>
          <p>Salary: ${staff.salary}</p>
          <p className="mt-2">Expertise: {staff.expertise}</p>
          <div className="mt-2">
            <label>Morale: </label>
            <ProgressBar name="Paul" value={staff.morale * 10} color="secondary-background" />
          </div>
          <p className="mt-2">Current Task: {staff.currentTask ? staff.currentTask : "No task assigned"}</p>
        </>
      )}
    </div>
  </div>
);
};



export default StaffCard;
