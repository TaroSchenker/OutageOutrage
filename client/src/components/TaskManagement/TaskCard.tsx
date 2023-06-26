import React, { useState } from 'react';
import { TaskType, Expertise, TaskStatus, BusinessImpact, IClientTaskData } from '../../types/types';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { FaRegUserCircle, FaTasks } from 'react-icons/fa'; // import necessary icons

interface TaskCardProps {
  task: IClientTaskData;

}
const TaskCard: React.FC<TaskCardProps> = ({ task, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`bg-gunmetal rounded-lg shadow-lg overflow-hidden text-light-cyan my-2 transition-all duration-300 ease-in-out border-2 border-almond ${isOpen ? 'col-span-2' : ''} hover:shadow-xl`}>
      <div className="px-6 py-4 flex items-center space-x-4 cursor-pointer" onClick={toggleCard}>
        <FaTasks className="text-sky-blue text-2xl"/> 
        <div>
          <h2 className="text-xl font-bold">{task.type}</h2>
          <p className="font-semibold">{task.status}</p>
        </div>
      </div>
      {isOpen && (
        <div className="px-6 py-4">
          <p className="text-base font-medium">Description: {task.description}</p>
          <div className="mt-2 flex items-center">
            <FaRegUserCircle className="text-sky-blue text-xl"/>
            <p className="ml-2">Assigned To: {task.assignedTo ? task.assignedTo : "No one"}</p>
          </div>
          <p className="mt-2 text-base font-medium">Complexity: {task.complexity}</p>
          <p className="mt-2 text-base font-medium">Impact: {task.businessImpact}</p>
          <div className="mt-2">
            <label>Progress: </label>
            <ProgressBar name={task.type} value={task.progress} color="sky-blue" />
          </div>
        </div>
      )}
    </div>
  );
};


export default TaskCard;
