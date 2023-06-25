import { useQuery } from '@tanstack/react-query';
import { getAllStaff } from '../../api';

import StaffCard from './StaffCard';
import { IClientStaffData } from '../../types/types';

const StaffManagement: React.FC = () => {
  const {
    data: staff,
    isLoading,
    isError,
  } = useQuery<IClientStaffData[], Error>(['getAllStaff'], getAllStaff);


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

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
