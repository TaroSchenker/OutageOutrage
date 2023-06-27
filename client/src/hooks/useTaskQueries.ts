//useTaskQueries.ts
import { useMutation, useQuery } from '@tanstack/react-query';
import { getAllTasks, getTaskById, updateTask } from '../api';
import { IClientTaskData } from '../types/types';

export function useGetAllTask() {
  return useQuery(['getAllTask'], getAllTasks);
}

export function useGetTaskById(taskId: string) {
  return useQuery(['getTaskById', taskId], () => getTaskById);
}
 
export function useUpdateTask(taskId: string, updates: Partial<IClientTaskData>) {
  console.log('useUpdateTask', taskId, updates);
  return useMutation(['updateTask', taskId, updates], updateTask);
}
