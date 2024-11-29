import React, { useState } from "react";
import CreateUser from "./CreateUser";
import ViewUsers from "./ViewUsers";

const UserContainer = () => {
  const [activeTab, setActiveTab] = useState("view");

  const [users, setUsers] = useState([
    {
      id: 1,
      fullName: "User 01",
      email: "user01@example.com",
      mobile: "9876543210",
      companyName: "Company01",
      tucName: "Self",
      roles: ["Admin"],
    },
    {
      id: 2,
      fullName: "User 02",
      email: "user02@example.com",
      mobile: "9876543211",
      companyName: "Company02",
      tucName: "qaTanant01",
      roles: ["Manager", "Custom01"],
    },
  ]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const addUser = (newUser) => {
    const newId = users.length + 1;
    setUsers((prev) => [
      ...prev,
      { id: newId, ...newUser, roles: newUser.roles.split(",") },
    ]);
    setActiveTab("view");
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className="user-management-container">
      <div className="header d-flex justify-content-between align-items-center">
        <h3 className="m-0">
          {activeTab === "view" ? "User List" : "Create User"}
        </h3>
        {activeTab === "view" && (
          <button
            className="btn btn-primary"
            onClick={() => handleTabChange("create")}
          >
            Create User
          </button>
        )}
        {activeTab === "create" && (
          <button
            className="btn btn-secondary"
            onClick={() => handleTabChange("view")}
          >
            View Users
          </button>
        )}
      </div>

      <div className="tab-content mt-3">
        {activeTab === "create" && (
          <CreateUser addUser={addUser} handleTabChange={handleTabChange} />
        )}
        {activeTab === "view" && (
          <ViewUsers users={users} deleteUser={deleteUser} />
        )}
      </div>
    </div>
  );
};

export default UserContainer;
