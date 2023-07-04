import React, { useState } from 'react';
import {
  TaskType,
  Expertise,
  TaskStatus,
  BusinessImpact,
  IClientTaskData,
  IClientStaffData,
} from '../../types/types';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { FaRegUserCircle, FaTasks } from 'react-icons/fa';
import CustomSelector from '../CustomSelect/CustomSelect'; // adjust the path based on your project structure
import { useUpdateTask } from '../../hooks/useTaskQueries';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query';

interface TaskCardProps {
  task: IClientTaskData;
  staff: IClientStaffData[];
}
const TaskCard = ({ task, staff, ...props }: TaskCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCard = () => {
    setIsOpen((prev) => !prev);
  };

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const getStaffNameFromId = (id: string) => {
    const staffMember = staff.find((member) => member._id === id);
    return staffMember ? staffMember.name : '';
  };

  const updateTaskMutation = useMutation({
    mutationFn: (updatedTask: Partial<IClientTaskData>) => {
      return axios.put(
        `http://localhost:3000/api/tasks/${task._id}/assignTask`,
        updatedTask,
      );
    },
    onError: (error, variables, context) => {
      // An error happened!
      console.log(`error in mutate!`);
    },
    onSuccess: (data, variables, context) => {
      // Boom baby!
      console.log('on success called');
      queryClient.invalidateQueries({ queryKey: ['getGameById'] });
      // queryClient.invalidateQueries({ queryKey: ['getGameById'] })
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });
  const handleSelectorChange = (selected: string) => {
    if (selected === 'Not Assigned') {
      // Do nothing if "Not Assigned" is selected
      return;
    }

    const selectedStaff = staff.find((member) => member.name === selected);
    if (!task._id || !selectedStaff) return;

    const updatedTask = {
      ...task,
      staffId: String(selectedStaff._id),
    };
    updateTaskMutation.mutate(updatedTask);
  };
  return (
    <div
      className={`bg-background rounded-lg shadow-lg overflow-hidden text-border my-2 transition-all duration-300 ease-in-out border-2 border text-primary-text ${
        isOpen ? 'col-span-2' : ''
      } hover:shadow-xl`}
    >
      <div
        className="px-6 py-4 flex items-center space-x-4 cursor-pointer border border"
        onClick={toggleCard}
      >
        <FaTasks className="text-primary-text text-2xl" />
        <div>
          <h2 className="text-xl font-bold">{task.type}</h2>
          <p className="font-semibold">{task.status}</p>
        </div>
      </div>
      {isOpen && (
        <div className="px-6 py-4">
          <p className="text-base  font-medium">
            Description: {task.description}
          </p>
          <div className="mt-2 flex items-center">
            <FaRegUserCircle className="text  text-xl" />
            <div className="ml-2 flex items-center">
              <span className="font-medium mr-2">Assigned To:</span>
              <CustomSelector
                value={
                  task.assignedTo
                    ? getStaffNameFromId(task.assignedTo)
                    : 'Not Assigned'
                }
                options={[
                  'Not Assigned',
                  ...staff.map((member) => member.name),
                ]}
                onChange={handleSelectorChange}
              />
            </div>
          </div>

          <p className="mt-2 text-base font-medium">
            Complexity: {task.complexity}
          </p>
          <p className="mt-2 text-base font-medium">
            Impact: {task.businessImpact}
          </p>
          <div className="mt-2">
            <label>Progress: </label>
            <ProgressBar
              name={task.type}
              value={task.progress}
              color="primary-text"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
