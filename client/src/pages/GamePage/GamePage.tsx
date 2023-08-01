// Home component
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import StaffManagement from '../../components/StaffManagement/StaffManagement';
import TaskManagement from '../../components/TaskManagement/TaskManagement';
import BudgetIndicator from '../../components/BudgetMoraleManagement/BudgetIndicator';
import MoraleIndicator from '../../components/BudgetMoraleManagement/MoraleIndicator';
import { useQuery } from '@tanstack/react-query';
import { getGameById } from '../../api';
import { IClientGameData } from '../../types/types';
import { useParams } from 'react-router';

// const budget = 75;
// const emergencyFund = 5000;
const morale = 80;
// const gameId = '649c15319cc3aa37b2ad7503';
const GamePage = () => {
  const { gameId } = useParams();

  console.log('Game ID: ' + gameId);
  const { data, isLoading, error } = useQuery<IClientGameData>(
    ['getGameById', String(gameId)],
    getGameById,
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data) {
    return <div>No data available</div>;
  }

  console.log("game page data", data);
  
  return (
    <>
      <NavBar websiteHealth={data.websiteHealth} timeRemaining={data.timeRemaining} />
      <div className="App h-screen flex">
        <section className="w-4/12 bg-background border boder-primary-text p-4 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-primary-text">
            Staff Management
          </h2>
          <StaffManagement staff={data.staff}  tasks={data.tasks}/>
        </section>

        <section className="w-5/12 bg-background border boder-primary-text p-4 overflow-y-auto text-border">
          <h2 className="text-2xl font-bold mb-4 text-primary-text">
            Task Management
          </h2>
          <TaskManagement tasks={data.tasks} staff={data.staff} />
        </section>

        <section className="w-3/12 bg-background border boder-primary-text p-4 overflow-y-auto text-primary-text">
          <h2 className="text-2xl font-bold mb-4 text-primary-text">
            Budget and Morale Management
          </h2>
          <BudgetIndicator budget={data.budget} />
          <MoraleIndicator morale={morale} />
        </section>
      </div>
    </>
  );
};

export default GamePage;
