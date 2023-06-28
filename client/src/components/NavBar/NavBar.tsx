import { Link } from "react-router-dom";
import {useQuery} from '@tanstack/react-query';
import { gameStateInitilise } from "../../api";

const NavBar: React.FC = () => {
  const handleClick = () => {
    console.log("clicked");
  }
  const {data: initialisedNewGame, isLoading, isError} = useQuery(['gameStateInitilise'], gameStateInitilise);


  return (
    <nav className="bg-background text-primary-text p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Outage Outrage</h1>
      <div className="text-xl font-semibold">{initialisedNewGame?.gameStateId}</div>
      <div className="space-x-4">
        {/* Add navigation items here */}
      </div>
    </nav>
  );
};

export default NavBar;
