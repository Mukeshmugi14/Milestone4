const UserManagement = () => {
  // Placeholder data
  const users = [
    { id: 1, email: "alice@example.com", role: "user" },
    { id: 2, email: "bob@example.com", role: "user" },
    { id: 3, email: "charlie@example.com", role: "admin" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User Management</h2>
      <table className="w-full text-left table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
