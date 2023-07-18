import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the users from your backend API
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/users");
        setUsers(response.data); // Assuming the API returns an array of user objects
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const handleRoleChange = async (userId, isAdmin) => {
    try {
      // Make an API call to update the user's role
      await axios.put(`http://localhost:8080/api/v1/users/${userId}`, { isAdmin });
      // Assuming the API updates the user's role successfully
      // We will update the local state with the updated user
      const updatedUsers = users.map((user) =>
        user._id === userId ? { ...user, isAdmin } : user
      );
      setUsers(updatedUsers);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <select
                        value={user.isAdmin}
                        onChange={(e) =>
                          handleRoleChange(user._id, e.target.value === "true")
                        }
                      >
                        <option value={true}>Admin</option>
                        <option value={false}>User</option>
                      </select>
                    </td>
                    <td>
                      <button
                        onClick={() => handleRoleChange(user._id, !user.isAdmin)}
                      >
                        Toggle Role
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
