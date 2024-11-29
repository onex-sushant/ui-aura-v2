import React, { useState } from "react";
import RoleTable from "../components/RoleTable";
import ChildTUC from "../components/ChildTUC"; // Assuming you have this component
import UserContainer from "../components/UserContainer"; // Assuming you have this component
import { Nav, Tab } from "react-bootstrap";

const Roles = () => {
  const [activeTab, setActiveTab] = useState("role");

  const renderHeading = () => {
    switch (activeTab) {
      case "role":
        return "Role Management";
      case "childTUC":
        return "Child TUC Management";
      case "user":
        return "User Management";
      default:
        return "Role Management";
    }
  };

  return (
    <>
      <div className="tab-list-bar">
        {/* Tabs Navigation */}
        <Nav
          className="custom-tabs"
          activeKey={activeTab}
          onSelect={(selectedKey) => setActiveTab(selectedKey)}
        >
          <Nav.Item>
            <Nav.Link eventKey="childTUC">Child TUC</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="user">User</Nav.Link>
          </Nav.Item>{" "}
          <Nav.Item>
            <Nav.Link eventKey="role">Role</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="content-container p-4">
        {/* Dynamic Heading */}
        <h2>{renderHeading()}</h2>

        {/* Tab Content */}
        <Tab.Content className="mt-4">
          <Tab.Pane eventKey="childTUC" active={activeTab === "childTUC"}>
            <ChildTUC />
          </Tab.Pane>
          <Tab.Pane eventKey="user" active={activeTab === "user"}>
            <UserContainer />
          </Tab.Pane>
          <Tab.Pane eventKey="role" active={activeTab === "role"}>
            <RoleTable />
          </Tab.Pane>
        </Tab.Content>
      </div>
    </>
  );
};

export default Roles;
