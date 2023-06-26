import React, { useState } from 'react';
import backgroundImage from '../../assets/images/bg3.png';
import { useQuery } from '@tanstack/react-query';
import OutageOutrageLogo from '../Logo/Logo'


const LandingPage: React.FC = () => {
  const [gameId, setGameId] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameId(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle submit logic, e.g., redirecting to the game page
  };

  const handleNewGame = () => {
    // Handle new game creation logic
  };

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center "
    >
      <div className="bg-gunmetal bg-opacity-50 p-10 rounded-lg flex flex-col items-center border-2 border-aquamarine">
  <OutageOutrageLogo  />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center mb-6"
        >
          <input
            type="text"
            placeholder="Enter your game ID"
            value={gameId}
            onChange={handleInputChange}
            className="mb-6 p-2 border rounded-md text-gunmetal bg-cadet-gray"
          />
          <button
            type="submit"
            className="py-2 px-4 border rounded-md bg-outer-space text-almond"
          >
            Enter Game
          </button>
        </form>
        <button
          onClick={handleNewGame}
          className="py-2 px-4 border rounded-md bg-dim-gray text-almond"
        >
          Create New Game
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
