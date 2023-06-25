import { Link } from "react-router-dom";
import {useQuery} from '@tanstack/react-query';
import { gameStateInitilise } from "../../api";

const NavBar: React.FC = () => {
  const handleClick = () => {
    console.log("clicked");
  }
  const {data: initialisedNewGame, isLoading, isError} = useQuery(['gameStateInitilise'], gameStateInitilise);
console.log(initialisedNewGame)
  return (
    <nav className="bg-gunmetal text-almond p-4 flex justify-between">
      <h1 className="text-2xl">Outage Outrage</h1>
      <div className="text-2xl">{initialisedNewGame?.gameStateId}</div>
      <div className="space-x-4">
        <button className="hover:underline text-outer-space" onClick={handleClick}>Start Game</button>
        {/* <Link to="/" className="hover:underline text-outer-space">Home</Link> */}
        {/* <Link to="/metrics" className="hover:underline text-outer-space">Metrics</Link>
        <Link to="/settings" className="hover:underline text-outer-space">Settings</Link> */}
      </div>
    </nav>
  );
};

export default NavBar;
