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
    <div>
      {staff.map((staffMember, index) => (
        <StaffCard key={index} staff={staffMember} />
      ))}
    </div>
  );
};
