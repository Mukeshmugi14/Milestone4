import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-5">
        <h1 className="text-2xl font-bold">CodeGenie</h1>
      </div>
      <nav>
        <ul>
          <li className="p-5 hover:bg-gray-700">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="p-5 hover:bg-gray-700">
            <Link to="/workspace">Workspace</Link>
          </li>
          <li className="p-5 hover:bg-gray-700">
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li className="p-5 hover:bg-gray-700">
            <Link to="/quizzes">Quizzes</Link>
          </li>
          {/* TODO: Add admin role check */}
          <li className="p-5 hover:bg-gray-700">
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
