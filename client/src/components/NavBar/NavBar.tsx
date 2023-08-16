/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getGameById } from '../../api';
import StyledButton from '../StyledButton/StyledButton';
import axios from 'axios';

interface NavBarProps {
  websiteHealth: number;
  timeRemaining: number;
}
import { useQueryClient } from '@tanstack/react-query';
const NavBar: React.FC<NavBarProps> = ({ websiteHealth, timeRemaining }) => {
  const { gameId } = useParams();

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const processTurnMutation = useMutation({
    mutationFn: (gameId: string) => {
      return axios.post(`http://localhost:3001/api/gameState/${gameId}/turn`);
    },
    onError: (error, variables, context) => {
      // An error happened!
      console.log(`error in mutate!`);
    },
    onSuccess: (data, variables, context) => {
      // Boom baby!
      console.log('on success called');
      queryClient.invalidateQueries({ queryKey: ['getGameById'] });
      // queryClient.invalidateQueries({ queryKey: ['getGameById'] })
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });
  const handleClick = () => {
    console.log('clicked');
    if (gameId) {
      processTurnMutation.mutate(gameId);
    }
  };
  const { data, isLoading, isError } = useQuery(
    ['getGameById', String(gameId)],
    getGameById,
  );

  return (
    <nav className="bg-background sticky top-0 z-50 text-primary-text p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Outage Outrage</h1>
      <StyledButton onClick={handleClick}> Process Turn</StyledButton>
      <div className="text-xl font-semibold">Game ID: {gameId} </div>
      <div className="space-x-4">
        <div className="flex flex-col items-center">
          <div className="text-lg font-medium text-secondary-text">
            Time Remaining: {timeRemaining} days
          </div>
          <div className="text-lg font-medium text-secondary-text">
            Website Health: {websiteHealth}%
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
