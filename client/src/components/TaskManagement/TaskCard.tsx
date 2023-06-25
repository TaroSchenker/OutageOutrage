import React, { useState } from 'react';
import { TaskType, Expertise, TaskStatus, BusinessImpact, IClientTaskData } from '../../types/types';

interface TaskCardProps {
  task: IClientTaskData;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDesc, setShowDesc] = useState(false);

  const toggleDesc = () => {
    setShowDesc((prev) => !prev);
  };

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  console.log(task);

  return (
    <div className="rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 ease-in-out">
      <div className="bg-gunmetal text-white px-6 py-4">
        <h2 className="text-lg font-bold">{task.type}</h2>
      </div>

      <div className="p-6 bg-white">
        <button
          onClick={toggleDesc}
          className="mt-2 text-left text-blue-500"
        >
          {showDesc ? 'Hide Description ' : 'Show Description'}
        </button>
        
        { showDesc ?  
          (<p className="text-sm mt-2">Description: {task.description}</p>)
          : null}

        <p className="text-sm mt-2">
          Assigned To: {task.assignedTo ? task.assignedTo : 'Not assigned'}
        </p>

        <button
          onClick={toggleAccordion}
          className="mt-2 text-left text-blue-500"
        >
          {isOpen ? 'Show Less' : 'Show More'}
        </button>

        {isOpen ? (
          <div className="w-full flex flex-col mt-4">
            <p className="text-sm mt-2">Complexity: {task.complexity}</p>
            {/* Repeat for other attributes */}
            
            <div className="h-1 rounded bg-gray-200 w-3/4 my-1">
              <div
                style={{ width: `${task.progress}%` }}
                className="h-1 rounded bg-blue-500"
              ></div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TaskCard;
