import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

/* write me some tailwindcss */
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      // tailwind css for a card
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={reactLogo} alt="React Logo" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">React</div>
          <p className="text-gray-700 text-base">
            A JavaScript library for building user interfaces
          </p>

          <div className="flex items-center justify-between mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setCount(count + 1)}
            >
              Click Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
