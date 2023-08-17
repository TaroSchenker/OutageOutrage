import React, { useState, useEffect } from 'react';
import backgroundImage2 from '../../assets/images/bg5.png';
import backgroundImage3 from '../../assets/images/bg9.png';
import backgroundImage4 from '../../assets/images/bg10.png';
import backgroundImage5 from '../../assets/images/bg11.png';

import OutageOutrageLogo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import { useGameStateInitilise } from '../../hooks/useGameEventQueries';
import { IClientGameData } from '../../types/types';

const LandingPage: React.FC = () => {
  const [gameId, setGameId] = useState('');
  const [backgroundIndex, setBackgroundIndex] = useState(3);
  const [direction, setDirection] = useState(-1);
  const backgrounds = [
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
    backgroundImage5,
  ];
  const navigate = useNavigate();
  const initiliseGameMutation = useGameStateInitilise();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (direction > 0 && backgroundIndex >= backgrounds.length - 2) {
        setDirection(-1);
      } else if (direction < 0 && backgroundIndex <= 1) {
        setDirection(1);
      }
      setBackgroundIndex(backgroundIndex + direction);
    }, 1500);

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, [backgroundIndex, direction]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameId(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/game/${gameId}`);
  };

  const handleNewGame = async () => {
    // Handle new game creation logic

    // Trigger mutation and wait for it to complete
    initiliseGameMutation.mutate(undefined, {
      onSuccess: (data: IClientGameData) => {
        console.log('Game created with id', data?._id);
        navigate(`/game/${data?._id}`);
      },
      onError: (error) => {
        console.error('Game creation failed', error);
      },
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgrounds[backgroundIndex]})`,
        transition: 'background-image 1s ease-in-out',
      }}
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
    >
      <div className="bg-secondary-background bg-opacity-70 p-10 rounded-lg flex flex-col items-center border-2 border-primary-text">
        <OutageOutrageLogo />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mb-6"
        >
          <input
            type="text"
            placeholder="Enter your game ID"
            value={gameId}
            onChange={handleInputChange}
            className="mb-6 p-2 border rounded-md text-dark-background bg-dimmed-background placeholder-dark-background border-dark-background"
          />
          <button
            type="submit"
            className="py-2 px-4 border rounded-md bg-dark-background text-background hover:bg-secondary-text hover:text-background"
          >
            Enter Game
          </button>
        </form>
        <button
          onClick={handleNewGame}
          className="py-2 px-4 border rounded-md bg-dark-background text-background hover:bg-secondary-text hover:text-background"
        >
          Create New Game
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
