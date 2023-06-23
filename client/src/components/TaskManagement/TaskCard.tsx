import React, { useState } from 'react';
import {
  TaskType,
  Expertise,
  TaskStatus,
  BusinessImpact,
} from '../../types/types';

interface TaskCardProps {
  task: {
    type: TaskType;
    complexity: number;
    timeToComplete: number;
    assignedTo: string | null;
    expertiseRequired: Expertise;
    criticality: number;
    status: TaskStatus;
    dependencies: Array<string>;
    businessImpact: BusinessImpact;
    progress: number;
    description: string;
  };
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

  return (
    <div className="p-6 my-1 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-2">{task.type}</h2>
      <button
        onClick={toggleDesc}
        className="mt-2 text-left text-blue-500"
      >

        {showDesc ? 'Hide Description ' : 'Show Description'}
      </button>
    { showDesc ?  (<p className="text-sm mt-2">Description: {task.description}</p>): null}
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
        <>
          <p className="text-sm mt-2">Complexity: {task.complexity}</p>
          <p className="text-sm mt-2">
            Time to Complete: {task.timeToComplete}
          </p>
          <p className="text-sm mt-2">
            Expertise Required: {task.expertiseRequired}
          </p>
          <p className="text-sm mt-2">Criticality: {task.criticality}</p>
          <p className="text-sm mt-2">Status: {task.status}</p>
          <p className="text-sm mt-2">
            Dependencies: {task.dependencies.join(', ')}
          </p>
          <p className="text-sm mt-2">Business Impact: {task.businessImpact}</p>

          <div className="w-full flex flex-col">
            <p className="text-sm mt-2 text-left">Progress:</p>
          </div>
          <div className="h-1 rounded bg-gray-200 w-3/4 my-1">
            <div
              style={{ width: `${task.progress}%` }}
              className="h-1 rounded bg-blue-500"
            ></div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default TaskCard;
