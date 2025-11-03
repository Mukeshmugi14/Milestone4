import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Workspace from "./pages/Workspace";
import Leaderboard from "./pages/Leaderboard";
import Quizzes from "./pages/Quizzes";
import Admin from "./pages/Admin";

function App() {
  const { currentUser } = useAuth();

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  // TODO: Add admin role check
  const AdminRoute = ({ children }: { children: React.ReactNode }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/workspace"
          element={
            <ProtectedRoute>
              <Workspace />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quizzes"
          element={
            <ProtectedRoute>
              <Quizzes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
        <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={currentUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
