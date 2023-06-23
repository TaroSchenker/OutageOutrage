import { useState } from 'react';
import './App.css';
import './tailwind.css';
import StaffCard from './components/StaffManagement/StaffCard';
import staffData from './assets/data/initData/staff';
import tasksData from './assets/data/initData/tasks';
import TaskCard from './components/TaskManagement/TaskCard';
import NavBar from './components/NavBar/NavBar';
import BudgetIndicator from './components/BudgetMoraleManagement/BudgetIndicator';
import MoraleIndicator from './components/BudgetMoraleManagement/MoraleIndicator';

  // These are just example values. In a real app, you'd fetch these from your server.
  const budget = 75; // This should be a percentage
  const emergencyFund = 5000;
  const morale = 80; // This should be a percentage

function App() {
  return (
    <>
      <NavBar />
      <div className="App h-screen flex">
        {/* Staff Management section */}
        <section className="w-3/12 bg-blue-100 p-4 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Staff Management</h2>
          {staffData.map((staff, index) => (
            <StaffCard key={index} staff={staff} />
          ))}
        </section>

        {/* Task Management section */}
        <section className="w-4/12 bg-blue-200 p-4 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Task Management</h2>
          {tasksData.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </section>

        {/* Budget and Morale Management section */}
        <section className="w-1/3 bg-blue-300 p-4 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">
            Budget and Morale Management
          </h2>
          <BudgetIndicator budget={budget} emergencyFund={emergencyFund} />
          <MoraleIndicator morale={morale} />
        </section>
      </div>
    </>
  );
}

export default App;
