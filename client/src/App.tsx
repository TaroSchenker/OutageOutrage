import { useState } from 'react';
import './App.css';
import './tailwind.css';
import StaffCard from './components/StaffManagement/StaffCard';
import staffData from './assets/data/initData/Staff';
import tasksData from './assets/data/initData/tasks';
import TaskCard from './components/TaskManagement/TaskCard';

function App() {
  return (
    <div className="App h-screen flex">
      {/* Staff Management section */}
      <section className="w-1/3 bg-blue-100 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Staff Management</h2>
        {staffData.map((staff, index) => (
          <StaffCard key={index} staff={staff} />
        ))}
      </section>

      {/* Task Management section */}
      <section className="w-1/3 bg-blue-200 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Task Management</h2>
        {tasksData.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </section>

      {/* Budget and Morale Management section */}
      <section className="w-1/3 bg-blue-300 p-4">
        <h2 className="text-2xl font-bold mb-4">Budget and Morale Management</h2>
        {/* Budget and Morale indicators go here */}
      </section>
    </div>
  );
}

export default App;
