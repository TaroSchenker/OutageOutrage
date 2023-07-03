import { useQuery } from '@tanstack/react-query';
import { getAllTasks } from '../../api';

import { IClientStaffData, IClientTaskData } from '../../types/types';
import TaskCard from './TaskCard';
import StaffManagement from '../StaffManagement/StaffManagement';

interface TaskManagementProps {
  tasks: IClientTaskData[];
  staff: IClientStaffData[];
}

const TaskManagement= ({tasks, staff}: TaskManagementProps) => {
console.log("Task management tasks", tasks)
  return (
    <div className="grid grid-cols-2 gap-4">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} staff={staff}  />
      ))}
    </div>
  );
};

export default TaskManagement
