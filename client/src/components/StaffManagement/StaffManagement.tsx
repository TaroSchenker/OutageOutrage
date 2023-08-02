import { useQuery } from '@tanstack/react-query';
import { getAllStaff } from '../../api';

import StaffCard from './StaffCard';
import { IClientStaffData, IClientTaskData } from '../../types/types';

interface StaffManagementProps {
  staff: IClientStaffData[];
  tasks: IClientTaskData[];
}
const StaffManagement = ({ staff, tasks }: StaffManagementProps) => {
  const staffAvailable = staff.filter((staff) => staff.availability);
  const staffNotAvailable = staff.filter((staff) => !staff.availability);
  return (
    <>
      <h2 className="text-md font-bold text-black"> Available Staff</h2>
      <div className="grid grid-cols-2 gap-4">
        {staffAvailable.map((staffMember, index) => (
          <StaffCard key={index} staff={staffMember} tasks={tasks} />
        ))}
      </div>

      <h2 className="text-md font-bold text-black"> Busy Staff</h2>
      <div className="grid grid-cols-2 gap-4">
        {staffNotAvailable.map((staffMember, index) => (
          <StaffCard key={index} staff={staffMember} tasks={tasks} />
        ))}
      </div>
    </>
  );
};

export default StaffManagement;
