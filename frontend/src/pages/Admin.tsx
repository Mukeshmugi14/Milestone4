import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import UserManagement from "../components/UserManagement";
import AnalyticsChart from "../components/AnalyticsChart";

const Admin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-5">
          <h1 className="text-2xl font-bold mb-5">Admin Dashboard</h1>
          <div className="mb-5">
            <UserManagement />
          </div>
          <div>
            <AnalyticsChart />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
