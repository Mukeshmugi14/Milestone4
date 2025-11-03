import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-5">
          {/* Content will go here */}
          <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
