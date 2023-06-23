import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="text-2xl">Outage Outrage</h1>
      <div className="space-x-4">
        {/* <Link to="/" className="hover:underline">Home</Link> */}
        {/* <Link to="/metrics" className="hover:underline">Metrics</Link>
        <Link to="/settings" className="hover:underline">Settings</Link> */}
      </div>
    </nav>
  );
};

export default NavBar;
