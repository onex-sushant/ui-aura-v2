import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Icon from "../utils/Icon";
import CustomCheckbox from "./CustomCheckbox";

const RoleTable = () => {
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: "Admin",
      permissions: {
        login: { createEdit: true, view: true },
        newSMS: { createEdit: true, view: true },
        dashboard: { view: true },
        campaign: { createEdit: true, view: true },
        userManagement: { createEdit: true, view: true },
        credits: { createEdit: true, view: true },
        reports: { view: true },
        telcoReports: { view: true },
        dlt: { createEdit: true, view: true },
        api: { createEdit: true, view: true },
        phonebook: { createEdit: true, view: true },
        notification: { createEdit: true, view: true },
        allSchedule: { view: true },
      },
      editable: false,
      addCustomRole: false,
    },
    {
      id: 2,
      name: "Manager",
      permissions: {
        login: { createEdit: true, view: true },
        newSMS: { createEdit: true, view: true },
        dashboard: { view: true },
        campaign: { createEdit: true, view: true },
        userManagement: { createEdit: false, view: true },
        credits: { createEdit: false, view: true },
        reports: { view: true },
        telcoReports: { view: true },
        dlt: { createEdit: true, view: true },
        api: { createEdit: false, view: true },
        phonebook: { createEdit: false, view: true },
        notification: { createEdit: true, view: true },
        allSchedule: { view: true },
      },
      editable: false,
      addCustomRole: false,
    },
    {
      id: 3,
      name: "Agent",
      permissions: {
        login: { createEdit: true, view: true },
        newSMS: { createEdit: true, view: true },
        dashboard: { view: true },
        campaign: { createEdit: true, view: true },
        userManagement: { createEdit: false, view: false },
        credits: { createEdit: false, view: false },
        reports: { view: true },
        telcoReports: { view: false },
        dlt: { createEdit: false, view: true },
        api: { createEdit: false, view: false },
        phonebook: { createEdit: true, view: true },
        notification: { createEdit: false, view: true },
        allSchedule: { view: true },
      },
      editable: false,
      addCustomRole: false,
    },
    {
      id: 4,
      name: "Report Viewer",
      permissions: {
        login: { createEdit: true, view: true },
        newSMS: { createEdit: false, view: false },
        dashboard: { view: true },
        campaign: { createEdit: false, view: false },
        userManagement: { createEdit: false, view: false },
        credits: { createEdit: false, view: false },
        reports: { view: true },
        telcoReports: { view: true },
        dlt: { createEdit: false, view: false },
        api: { createEdit: false, view: false },
        phonebook: { createEdit: false, view: false },
        notification: { createEdit: false, view: true },
        allSchedule: { view: false },
      },
      editable: false,
      addCustomRole: false,
    },
    {
      id: 5,
      name: "Enter Name",
      permissions: {
        login: { createEdit: false, view: false },
        newSMS: { createEdit: false, view: false },
        dashboard: { view: false },
        campaign: { createEdit: false, view: false },
        userManagement: { createEdit: false, view: false },
        credits: { createEdit: false, view: false },
        reports: { view: false },
        telcoReports: { view: false },
        dlt: { createEdit: false, view: false },
        api: { createEdit: false, view: false },
        phonebook: { createEdit: false, view: false },
        notification: { createEdit: false, view: false },
        allSchedule: { view: false },
      },
      editable: false,
      addCustomRole: true,
    },
  ]);

  const [showAssignModal, setShowAssignModal] = useState(false);
  const [customRoles, setCustomRoles] = useState([]);

  const toggleEditMode = (id) => {
    setRoles((prevRoles) =>
      prevRoles.map(
        (role) =>
          role.id === id
            ? { ...role, editable: !role.editable }
            : { ...role, editable: false } // Ensure only one role is editable at a time
      )
    );
  };

  const handlePermissionChange = (roleId, column, permission) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === roleId
          ? {
              ...role,
              permissions: {
                ...role.permissions,
                [column]: {
                  ...role.permissions[column],
                  [permission]: !role.permissions[column][permission],
                },
              },
            }
          : role
      )
    );
  };

  const handleAddNewRole = () => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.addCustomRole ? { ...role, editable: true } : role
      )
    );
  };
  const saveEdit = (id) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === id ? { ...role, editable: false } : role
      )
    );
  };

  const cancelEdit = (id) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === id ? { ...role, editable: false } : role
      )
    );
  };

  const saveNewRole = () => {
    const customRow = roles.find((role) => role.addCustomRole);

    if (!customRow || !customRow.name.trim()) {
      alert("Role Name is mandatory!");
      return;
    }

    const newRole = {
      id: `custom-${Date.now()}`,
      name: customRow.name,
      permissions: { ...customRow.permissions },
      editable: false,
    };

    setRoles((prevRoles) => {
      const customRowIndex = prevRoles.findIndex((role) => role.addCustomRole);

      if (customRowIndex === -1) {
        console.error("Custom row not found!");
        return prevRoles;
      }

      const updatedRoles = [...prevRoles];
      updatedRoles.splice(customRowIndex, 0, newRole);
      updatedRoles[customRowIndex + 1] = {
        ...customRow,
        name: "New Role",
        permissions: Object.keys(customRow.permissions).reduce(
          (acc, key) => ({
            ...acc,
            [key]: { createEdit: false, view: false },
          }),
          {}
        ),
        editable: false,
      };

      return updatedRoles;
    });
  };

  const cancelNewRole = (roleIndex) => {
    setCustomRoles((prev) => prev.filter((_, index) => index !== roleIndex));
  };

  return (
    <div className="role-management-container">
      <div className="table-responsive role-management">
        <table className="table">
          <thead>
            <tr>
              <th className="sticky-column">Role Name</th>
              <th>
                Login
                <div className="permissions-icons">
                  <Icon name="edit" size={16} color="gray" />
                  <Icon name="view" size={16} color="gray" />
                </div>
              </th>
              <th>
                New SMS
                <div className="permissions-icons">
                  <Icon name="edit" size={16} color="gray" />
                  <Icon name="view" size={16} color="gray" />
                </div>
              </th>
              <th>
                Dashboard
                <div className="permissions-icons">
                  <Icon name="view" size={16} color="gray" />
                </div>
              </th>
              <th>
                Campaign
                <div className="permissions-icons">
                  <Icon name="edit" size={16} color="gray" />
                  <Icon name="view" size={16} color="gray" />
                </div>
              </th>
              <th>
                User Management
                <div className="permissions-icons">
                  <Icon name="edit" size={16} color="gray" />
                  <Icon name="view" size={16} color="gray" />
                </div>
              </th>
              <th>
                Credits
                <div className="permissions-icons">
                  <Icon name="edit" size={16} color="gray" />
                  <Icon name="view" size={16} color="gray" />
                </div>
              </th>
              <th>
                Reports
                <div className="permissions-icons">
                  <Icon name="view" size={16} color="gray" />
                </div>
              </th>
              <th>
                Telco Reports
                <div className="permissions-icons">
                  <Icon name="view" size={16} color="gray" />
                </div>
              </th>
              <th>
                DLT
                <div className="permissions-icons">
                  <Icon name="edit" size={16} color="gray" />
                  <Icon name="view" size={16} color="gray" />
                </div>
              </th>
              <th>
                API
                <div className="permissions-icons">
                  <Icon name="edit" size={16} color="gray" />
                  <Icon name="view" size={16} color="gray" />
                </div>
              </th>
              <th>
                Phonebook
                <div className="permissions-icons">
                  <Icon name="edit" size={16} color="gray" />
                  <Icon name="view" size={16} color="gray" />
                </div>
              </th>
              <th>
                Notification
                <div className="permissions-icons">
                  <Icon name="edit" size={16} color="gray" />
                  <Icon name="view" size={16} color="gray" />
                </div>
              </th>
              <th>
                All Schedule
                <div className="permissions-icons">
                  <Icon name="view" size={16} color="gray" />
                </div>
              </th>
              <th className="sticky-column">Action</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="role-row">
                <td className="sticky-column">
                  {role.addCustomRole && role.editable ? (
                    <div className="custom-role-input">
                      <label
                        htmlFor={`custom-role-${role.id}`}
                        className="form-label"
                      >
                        New Role
                      </label>
                      <input
                        id={`custom-role-${role.id}`}
                        type="text"
                        value={role.name}
                        onChange={(e) =>
                          setRoles((prev) =>
                            prev.map((r) =>
                              r.id === role.id
                                ? { ...r, name: e.target.value }
                                : r
                            )
                          )
                        }
                        placeholder="Enter role name"
                        className="form-control"
                      />
                    </div>
                  ) : role.addCustomRole ? (
                    <div className="custom-role-input">
                      <label
                        htmlFor={`custom-role-${role.id}`}
                        className="form-label"
                      >
                        New Role
                      </label>
                      <input
                        id={`custom-role-${role.id}`}
                        type="text"
                        value={role.name}
                        onChange={(e) =>
                          setRoles((prev) =>
                            prev.map((r) =>
                              r.id === role.id
                                ? { ...r, name: e.target.value }
                                : r
                            )
                          )
                        }
                        placeholder="Enter role name"
                        className="form-control"
                      />
                    </div>
                  ) : (
                    role.name
                  )}
                </td>

                {Object.entries(role.permissions).map(([column, perms]) => (
                  <td key={column}>
                    <div className="permission-credits">
                      {/* Create/Edit Permission */}
                      {perms.createEdit !== undefined && (
                        <>
                          {role.editable ? (
                            <CustomCheckbox
                              checked={perms.createEdit}
                              onChange={(checked) =>
                                handlePermissionChange(
                                  role.id,
                                  column,
                                  "createEdit"
                                )
                              }
                            />
                          ) : (
                            <Icon
                              name={perms.createEdit ? "checked" : "cancel"}
                              size={20}
                              color={perms.createEdit ? "green" : "red"}
                            />
                          )}
                        </>
                      )}

                      {/* View Permission */}
                      {role.editable ? (
                        <CustomCheckbox
                          checked={perms.view}
                          onChange={(checked) =>
                            handlePermissionChange(role.id, column, "view")
                          }
                        />
                      ) : (
                        <Icon
                          name={perms.view ? "checked" : "cancel"}
                          size={20}
                          color={perms.view ? "green" : "red"}
                        />
                      )}
                    </div>
                  </td>
                ))}

                <td className="sticky-column">
                  {role.addCustomRole && role.editable ? (
                    <div className="d-flex gap-2 justify-content-center">
                      <Button variant="success" size="sm" onClick={saveNewRole}>
                        <Icon name={"add"} size={24} color={"#fff"} />
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() =>
                          setRoles((prev) =>
                            prev.map((r) =>
                              r.id === role.id ? { ...r, editable: false } : r
                            )
                          )
                        }
                      >
                        <Icon name={"cancel"} size={20} color={"#fff"} />
                      </Button>
                    </div>
                  ) : role.addCustomRole ? (
                    <Button
                      variant="success"
                      size="sm"
                      onClick={handleAddNewRole}
                      className="full-round-btn"
                    >
                      <Icon name={"addButton"} size={44} color={"#198754"} />
                    </Button>
                  ) : role.editable ? (
                    <div className="d-flex gap-2">
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => saveEdit(role.id)}
                      >
                        Save
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => cancelEdit(role.id)}
                      >
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <div className="action-option dropdown">
                      <button
                        className="btn btn-sm custom-dropdown-btn"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <Icon name="threeDots" size={20} color="gray" />
                      </button>
                      <ul className="tooltip-menu dropdown-menu">
                        <li>
                          <button
                            className="dropdown-item d-flex align-items-center"
                            onClick={() => toggleEditMode(role.id)}
                          >
                            <Icon name="edit" size={20} color="gray" />
                            Edit Role
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item d-flex align-items-center"
                            onClick={() => setShowAssignModal(true)}
                          >
                            <Icon name="assign" size={20} color="gray" />
                            Assign Role
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}

            {customRoles.map((role, index) => (
              <tr key={role.id}>
                <td className="sticky-column">
                  <input
                    type="text"
                    value={role.name}
                    onChange={(e) =>
                      setCustomRoles((prev) =>
                        prev.map((r, i) =>
                          i === index ? { ...r, name: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Enter Role Name"
                    className="form-control"
                  />
                </td>
                {Object.entries(role.permissions).map(([column, perms]) => (
                  <td key={column}>
                    <div className="permission-credits">
                      {/* Create/Edit Permission */}
                      {perms.createEdit !== undefined && (
                        <>
                          {role.editable ? (
                            <CustomCheckbox
                              checked={perms.createEdit}
                              onChange={(checked) =>
                                handlePermissionChange(
                                  role.id,
                                  column,
                                  "createEdit"
                                )
                              }
                            />
                          ) : (
                            <Icon
                              name={perms.createEdit ? "checked" : "cancel"}
                              size={20}
                              color={perms.createEdit ? "green" : "red"}
                            />
                          )}
                        </>
                      )}

                      {/* View Permission */}
                      {role.editable ? (
                        <CustomCheckbox
                          checked={perms.view}
                          onChange={(checked) =>
                            handlePermissionChange(role.id, column, "view")
                          }
                        />
                      ) : (
                        <Icon
                          name={perms.view ? "checked" : "cancel"}
                          size={20}
                          color={perms.view ? "green" : "red"}
                        />
                      )}
                    </div>
                  </td>
                ))}

                <td className="sticky-column">
                  <div className="d-flex gap-2">
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => saveNewRole(index)}
                    >
                      <Icon name={"addButton"} size={44} color={"#198754"} />
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => cancelNewRole(index)}
                    >
                      <Icon name={"cancel"} size={44} color={"#198754"} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Assign Role Modal */}
        <Modal show={showAssignModal} onHide={() => setShowAssignModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Assign Role</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Select Child</Form.Label>
                <Form.Select>
                  <option>Child 1</option>
                  <option>Child 2</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Select User</Form.Label>
                <Form.Select>
                  <option>User 1</option>
                  <option>User 2</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowAssignModal(false)}
            >
              Cancel
            </Button>
            <Button variant="primary">Assign</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default RoleTable;
