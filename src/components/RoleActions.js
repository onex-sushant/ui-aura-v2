import React from "react";
import { Button, Modal } from "react-bootstrap";

const RoleActions = ({ onEdit }) => {
  const [showAssignModal, setShowAssignModal] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  return (
    <>
      <Button variant="link" onClick={onEdit}>
        <i className="fas fa-edit"></i> Edit
      </Button>
      <Button variant="link" onClick={() => setShowAssignModal(true)}>
        <i className="fas fa-user-plus"></i> Assign
      </Button>
      <Button variant="link" onClick={() => setShowDeleteModal(true)}>
        <i className="fas fa-trash-alt"></i> Delete
      </Button>

      {/* Assign Role Modal */}
      <Modal show={showAssignModal} onHide={() => setShowAssignModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select className="form-control mb-2">
            <option>Select Child</option>
          </select>
          <select className="form-control">
            <option>Select User</option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAssignModal(false)}>
            Cancel
          </Button>
          <Button variant="primary">Assign</Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Role Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this role?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger">Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RoleActions;
