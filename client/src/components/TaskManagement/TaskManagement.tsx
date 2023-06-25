import { useQuery } from '@tanstack/react-query';
import { getAllTasks } from '../../api';

import { IClientTaskData } from '../../types/types';
import TaskCard from './TaskCard';

const TaskManagement: React.FC = () => {
  const {
    data: tasks,
    isLoading,
    isError,
  } = useQuery<IClientTaskData[], Error>(['getAllTasks'], getAllTasks);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
};
