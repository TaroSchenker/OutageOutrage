import React, { useState } from 'react';
import { TaskType, IClientTaskData, IClientStaffData } from '../../types/types';
import { FaRegUserCircle, FaUserCheck } from 'react-icons/fa';
import CustomSelector from '../CustomSelect/CustomSelect';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query';
import {
  FaBug,
  FaFeatherAlt,
  FaShieldAlt,
  FaTachometerAlt,
  FaEye,
  FaDatabase,
  FaRegChartBar,
  FaSortAmountUp,
  FaCheckSquare,
  FaMapMarkedAlt,
  FaServer,
  FaUnlockAlt,
  FaBalanceScale,
  FaCode,
  FaBomb,
} from 'react-icons/fa';
import { getStaffNameFromId } from '../../utils/staffHelpers';

const taskTypeIcons = {
  [TaskType.BUG_FIX]: <FaBug />,
  [TaskType.NEW_FEATURE]: <FaFeatherAlt />,
  [TaskType.SECURITY_PATCH]: <FaShieldAlt />,
  [TaskType.PERFORMANCE_IMPROVEMENT]: <FaTachometerAlt />,
  [TaskType.UI_IMPROVEMENT]: <FaEye />,
  [TaskType.DEVOPS_SETUP]: <FaDatabase />,
  [TaskType.DATA_ANALYSIS]: <FaRegChartBar />,
  [TaskType.PRODUCT_BACKLOG_PRIORITIZATION]: <FaSortAmountUp />,
  [TaskType.FEATURE_VALIDATION]: <FaCheckSquare />,
  [TaskType.USER_RESEARCH]: <FaUserCheck />,
  [TaskType.CUSTOMER_JOURNEY_MAPPING]: <FaMapMarkedAlt />,
  [TaskType.INFRASTRUCTURE_MONITORING]: <FaServer />,
  [TaskType.SECURITY_AUDIT]: <FaUnlockAlt />,
  [TaskType.A_B_TESTING]: <FaBalanceScale />,
  [TaskType.CODE_REVIEW]: <FaCode />,
  [TaskType.STRESS_TESTING]: <FaBomb />,
};

interface TaskCardProps {
  task: IClientTaskData;
  staff: IClientStaffData[];
  gameId: string;
}
const TaskCard = ({ task, staff, gameId, ...props }: TaskCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCard = () => {
    setIsOpen((prev) => !prev);
  };

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const updateTaskMutation = useMutation({
    mutationFn: (updatedTask: Partial<IClientTaskData>) => {
      return axios.put(
        `http://localhost:3000/api/tasks/${task._id}/assignTask`,
        updatedTask,
      );
    },
    onError: (error, variables, context) => {
      console.log(`error in mutate!`);
    },
    onSuccess: (data, variables, context) => {
      console.log('on success called');
      queryClient.invalidateQueries({ queryKey: ['getGameById'] });
      // queryClient.invalidateQueries({ queryKey: ['getGameById'] })
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });

  const updateStaffMutation = useMutation(
    ({
      updatedTask,
      selectedStaff,
    }: {
      updatedTask: Partial<IClientTaskData>;
      selectedStaff: IClientStaffData;
    }) => {
      if(!updatedTask._id) throw new Error("no task")
      console.log("selected staff ID : ", selectedStaff._id)
      return axios.put(
        `http://localhost:3000/api/staff/${selectedStaff._id}/assignTask`,
        updatedTask._id,
      );
    },
    {
      onError: (error, variables, context) => {
        console.log(`error in updateStaffMutation mutate!`);
      },
      onSuccess: (data, variables, context) => {
        console.log('on success called');
        queryClient.invalidateQueries({ queryKey: ['getGameById'] });
      },
      onSettled: (data, error, variables, context) => {
        // Error or success... doesn't matter!
      },
    },
  );

  // const updateStaffMutation = useMutation({
  //   mutationFn: (updatedStaff: Partial<IClientStaffData>) => {
  //     return axios.put(
  //       `http://localhost:3000/api/staff/${updatedStaff}/assignTask`,
  //       { currentTask: task._id },
  //     );
  //   },
  //   onError: (error, variables, context) => {
  //     // An error happened!
  //     console.log(`error in staff mutate!`);
  //   },
  //   onSuccess: (data, variables, context) => {
  //     // Boom baby!
  //     console.log('on success called');
  //     queryClient.invalidateQueries({ queryKey: ['getGameById'] });
  //   },
  //   onSettled: (data, error, variables, context) => {
  //     // Error or success... doesn't matter!
  //   },
  // });

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
    const returnedUpdatedTask = updateTaskMutation.mutate(updatedTask);
    const returnedUpdatedStaff = updateStaffMutation.mutate({ updatedTask, selectedStaff });

    // updateStaffMutation.mutate(selectedStaff);
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
        {/* Replace default FaTasks icon with specific task type icon */}
        {taskTypeIcons[task.type]}
        <div>
          <h2 className="text-xl font-bold">{task.type}</h2>
          <p className="font-semibold">{task.status}</p>
          {/* Conditionally render the assigned icon */}
          {task.assignedTo && (
            <FaUserCheck
              className="text-primary-text text-2xl"
              title="Task is assigned"
            />
          )}
          <div className="mt-2">
            <label>
              Progress: {(task.progress / task.timeToComplete) * 100}
              <div className="w-full bg-dimmed-background rounded h-4 overflow-hidden">
                <div
                  style={{
                    width: `${
                      task.progress > 0
                        ? (task.progress / task.timeToComplete) * 100
                        : 0
                    }%`,
                  }}
                  className="bg-secondary-text h-full"
                />
              </div>{' '}
            </label>
          </div>
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
                    ? getStaffNameFromId(staff, task.assignedTo)
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

          <div className="grid grid-cols-2 gap-2 mt-2 text-base font-medium">
            <div>
              <strong>Complexity:</strong>
              <p>{task.complexity}</p>
            </div>
            <div>
              <strong>Impact:</strong>
              <p>{task.businessImpact}</p>
            </div>
            <div>
              <strong>Expertise required:</strong>
              <p>{task.expertiseRequired}</p>
            </div>
            <div>
              <strong>Effort to complete:</strong>
              <p>{task.timeToComplete}</p>
            </div>
          </div>
          {/* <div className="mt-2">
            <label>Progress: {(task.progress / task.timeToComplete) * 100 }
            <div className="w-full bg-dimmed-background rounded h-4 overflow-hidden">
          <div style={{ width: `${(task.progress > 0 ? (task.progress / task.timeToComplete) * 100 : 0)}%` }} className="bg-secondary-text h-full" />
        </div> </label>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default TaskCard;
