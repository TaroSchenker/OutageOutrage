import { useQuery } from '@tanstack/react-query';
import { getAllStaff } from '../../api';

import StaffCard from './StaffCard';
import { IClientStaffData } from '../../types/types';

interface StaffManagementProps {
  staff: IClientStaffData[];
}
const StaffManagement = ({staff}: StaffManagementProps) => {


  console.log(staff)
  return (
    <div className="grid grid-cols-2 gap-4">
      {staff.map((staffMember, index) => (
        <StaffCard key={index} staff={staffMember} />
      ))}
    </div>
  );
};

export default StaffManagement;
