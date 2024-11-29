import React from "react";
import { Table, Button } from "react-bootstrap";

const ViewUsers = ({ users, deleteUser }) => {
  return (
    <div className="view-users">
      <h2>User List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User Name</th>
            <th>TUC Name</th>
            <th>Company Name</th>
            <th>Roles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.fullName}</td>
              <td>{user.tucName}</td>
              <td>{user.companyName}</td>
              <td>{user.roles.join(", ")}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewUsers;
