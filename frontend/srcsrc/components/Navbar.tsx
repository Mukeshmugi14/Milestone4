import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { currentUser } = useAuth();

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <nav className="bg-white shadow p-5 flex justify-between items-center">
      <div>
        <h2 className="text-xl">Dashboard</h2>
      </div>
      <div>
        {currentUser && (
          <div className="flex items-center">
            <p className="mr-5">{currentUser.email}</p>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
