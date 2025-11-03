import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Leaderboard = () => {
  // Placeholder data
  const leaderboardData = [
    { rank: 1, name: "Alice", score: 1500 },
    { rank: 2, name: "Bob", score: 1400 },
    { rank: 3, name: "Charlie", score: 1350 },
    { rank: 4, name: "David", score: 1200 },
    { rank: 5, name: "Eve", score: 1100 },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-5">
          <h1 className="text-2xl font-bold mb-5">Leaderboard</h1>
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Rank</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((user) => (
                <tr key={user.rank}>
                  <td className="border px-4 py-2">{user.rank}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default Leaderboard;
