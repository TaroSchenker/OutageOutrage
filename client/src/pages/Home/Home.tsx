// Home component
import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import StaffManagement from '../../components/StaffManagement/StaffManagement'
import TaskManagement from '../../components/TaskManagement/TaskManagement'
import BudgetIndicator from '../../components/BudgetMoraleManagement/BudgetIndicator'
import MoraleIndicator from '../../components/BudgetMoraleManagement/MoraleIndicator'

const budget = 75;
const emergencyFund = 5000;
const morale = 80;

const Home = () => {
  return (
    <>
         <NavBar />
      <div className="App h-screen flex">
        <section className="w-5/12 bg-cadet-gray p-4 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-gunmetal">Staff Management</h2>
          <StaffManagement />
        </section>

        <section className="w-5/12 bg-cadet-gray p-4 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-gunmetal">Task Management</h2>
          <TaskManagement />
        </section>

        <section className="w-2/12 bg-cadet-gray p-4 overflow-y-auto text-outer-space">
          <h2 className="text-2xl font-bold mb-4">Budget and Morale Management</h2>
          <BudgetIndicator budget={budget} emergencyFund={emergencyFund} />
          <MoraleIndicator morale={morale} />
        </section>
      </div> 
    </>
  )
}

export default Home
