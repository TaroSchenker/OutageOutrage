import React, { useState } from 'react';
import { TaskType, Expertise, TaskStatus, BusinessImpact, IClientTaskData, IClientStaffData } from '../../types/types';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { FaRegUserCircle, FaTasks } from 'react-icons/fa';
import CustomSelector from '../CustomSelect/CustomSelect'; // adjust the path based on your project structure
import { useUpdateTask } from '../../hooks/useTaskQueries';

interface TaskCardProps {
  task: IClientTaskData;
  staff: IClientStaffData[];
}

const TaskCard: React.FC<TaskCardProps> = ({ task, staff, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCard = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectorChange = (selected: string) => {
    console.log(`Selected: ${selected}`);
    console.log("handkle selector change Task", task)
    const taskId = task._id;
    console.log("task id", taskId)
    const staffId = staff.filter((member) => member.name === selected ? member : null)
    console.log("staff id", staffId[0]._id)
    if(!taskId) return;
    useUpdateTask(taskId, { assignedTo: staffId[0]._id });
    // console.log(`Task ID: ${taskId}`)
    // You can handle the selected value here
  };

  const staffMembers = staff.map((member) => member)
 console.log("staff members", staffMembers)
  return (
    <div className={`bg-gunmetal rounded-lg shadow-lg overflow-hidden text-light-cyan my-2 transition-all duration-300 ease-in-out border-2 border-almond ${isOpen ? 'col-span-2' : ''} hover:shadow-xl`}>
      <div className="px-6 py-4 flex items-center space-x-4 cursor-pointer border border-sky-blue" onClick={toggleCard}>
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
            <div className="ml-2 flex flex-col">
              <p className="font-medium">Assigned To:</p>
              <CustomSelector options={staffMembers.map(member => member.name)} onChange={handleSelectorChange} />
            </div>
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
