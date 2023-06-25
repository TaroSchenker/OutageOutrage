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
import StaffManagement from './components/StaffManagement/StaffManagement';
import TaskManagement from './components/TaskManagement/TaskManagement';
import Landing from './components/Landing/Landing';
import Home from './pages/Home/Home';


function App() {
  return (
    <>
    <Landing />
    <Home /> 
    </>
  );
}

export default App;
