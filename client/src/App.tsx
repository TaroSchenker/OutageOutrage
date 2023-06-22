import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import './tailwind.css';
import StaffCard from './components/StaffManagement/StaffCard';
import staff from '../src/assets/data/initData/staff';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-4xl">Hello Vite + React + Tailwind CSS!</h1>
      </header>
     { staff.map((staff) => <StaffCard staff={staff} />)}
    </div>
  );
}

export default App;
