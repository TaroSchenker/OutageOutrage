//useStaffQueries.ts
import { useQuery } from '@tanstack/react-query';
import { getAllStaff, getStaffById } from '../api';

export function useGetAllStaff() {
  return useQuery(['getAllStaff'], getAllStaff);
}

export function useGetStaffById(staffId: string) {
  return useQuery(['getstaffById', staffId], () => getStaffById(staffId));
}
