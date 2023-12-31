import { IClientStaffData, IClientTaskData } from '../../types/types';
import TaskCard from './TaskCard';

interface TaskManagementProps {
  tasks: IClientTaskData[];
  staff: IClientStaffData[];
  gameId: string;
}

const TaskManagement = ({ tasks, staff, gameId }: TaskManagementProps) => {
  const tasksCompleted = tasks.filter((task) => task.status === 'Completed');
  const tasksInProgress = tasks.filter((task) => task.status === 'In Progress');
  const tasksBlocked = tasks.filter((task) => task.status === 'Blocked');
  const tasksNotStarted = tasks.filter((task) => task.status === 'Not Started');
  return (
    <>
      <h2 className="text-md font-bold text-black"> Not Started</h2>
      <div className="grid grid-cols-2 gap-4">
        {tasksNotStarted.map((task, index) => (
          <TaskCard key={index} task={task} staff={staff} gameId={gameId} />
        ))}
      </div>

      <h2 className="text-md font-bold text-black"> In Progress</h2>
      <div className="grid grid-cols-2 gap-4">
        {tasksInProgress.map((task, index) => (
          <TaskCard key={index} task={task} staff={staff} gameId={gameId} />
        ))}
      </div>

      <h2 className="text-md font-bold text-black"> Blocked</h2>
      <div className="grid grid-cols-2 gap-4">
        {tasksBlocked.map((task, index) => (
          <TaskCard key={index} task={task} staff={staff} gameId={gameId} />
        ))}
      </div>

      <h2 className="text-md font-bold text-black"> Completed</h2>
      <div className="grid grid-cols-2 gap-4">
        {tasksCompleted.map((task, index) => (
          <TaskCard key={index} task={task} staff={staff} gameId={gameId} />
        ))}
      </div>
    </>
  );
};

export default TaskManagement;
