import React, { useEffect, useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/allUsers");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleToggleRole = async (userId, currentRole) => {
    try {
      // Toggle the role value (0 for "user" and 1 for "admin")
      const newRole = currentRole === 0 ? 1 : 0;
      
      await fetch(`http://localhost:8080/api/v1/auth/toggleRole/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: newRole }),
      });

      // Update the user role in the local state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, role: newRole } : user
        )
      );
    } catch (error) {
      console.error("Error toggling role for the user:", error);
    }
  };

  const handleRemoveUser = async (userId) => {
    try {
      await fetch(`http://localhost:8080/api/v1/auth/removeUser/${userId}`, {
        method: "DELETE",
      });

      // Remove the user from the local state
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error removing the user:", error);
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.role === 1 ? "admin" : "user"}</td>
              <td>
                <button onClick={() => handleToggleRole(user._id, user.role)}>Toggle Role</button>
                <button onClick={() => handleRemoveUser(user._id)}>Remove User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
