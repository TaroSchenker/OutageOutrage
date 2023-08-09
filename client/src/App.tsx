import './App.css';
import './tailwind.css';

import LandingPage from './pages/LandingPage/LandingPage';

import { Route, Routes } from 'react-router-dom';
import GamePage from './pages/GamePage/GamePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game/:gameId" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
