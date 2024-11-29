import React, { useState } from "react";
import Select from "react-select";
import Icon from "../utils/Icon";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CreateUser = ({ addUser, handleTabChange }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    altMobile: "",
    companyName: "",
    tucName: "",
    roles: "",
    userName: "username_auto",
    password: "********",
  });

  const tucOptions = [
    { value: "TUC1", label: "SushantkDemo(20001)" },
    { value: "TUC2", label: "TanantDemo(20002)" },
    { value: "TUC3", label: "DemoCompany(20003)" },
  ];

  const roleOptions = [
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "Agent", label: "Agent" },
  ];

  const handleSelectChange = (selectedOption, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      altMobile: "",
      companyName: "",
      tucName: "",
      roles: "",
      userName: "username_auto",
      password: "********",
    });
  };

  const generateUserName = () => {
    setFormData((prev) => ({
      ...prev,
      userName: `user_${Date.now()}`,
    }));
  };

  return (
    <div className="create-user-container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-4">
              <h5>
                <i className="bi bi-person-circle"></i> Personal Info
              </h5>
              <div className="mb-3">
                <label className="form-label">
                  Full Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Email Id <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* TUC & Roles */}
            <div className="mb-4">
              <h5>
                <i className="bi bi-shield-lock"></i> TUC & Roles
              </h5>
              <div className="mb-3">
                <label className="form-label">
                  Select TUC <span className="text-danger">*</span>
                </label>
                <Select
                  options={tucOptions}
                  isSearchable
                  placeholder="Search TUC"
                  value={tucOptions.find(
                    (option) => option.value === formData.tucName
                  )}
                  onChange={(selectedOption) =>
                    handleSelectChange(selectedOption, "tucName")
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Roles <span className="text-danger">*</span>
                </label>
                <Select
                  options={roleOptions}
                  placeholder="Select Role"
                  value={roleOptions.find(
                    (option) => option.value === formData.roles
                  )}
                  onChange={(selectedOption) =>
                    handleSelectChange(selectedOption, "roles")
                  }
                  required
                />
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="col-md-6">
            {/* Contact Details */}
            <div className="mb-4">
              <h5>
                <i className="bi bi-telephone"></i> Contact Details
              </h5>
              <div className="mb-3">
                <label className="form-label">
                  Mobile Number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name="mobile"
                  className="form-control"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Alternative Mobile Number</label>
                <input
                  type="text"
                  name="altMobile"
                  className="form-control"
                  value={formData.altMobile}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account Details */}
            <div className="mb-4 gray-frame">
              <h5>
                <i className="bi bi-person-badge"></i> Account Details
              </h5>
              <div className="mb-3 d-flex align-items-end">
                <div className="flex-grow-1">
                  <label className="form-label">
                    User Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="userName"
                    className="form-control"
                    value={formData.userName}
                    readOnly
                  />
                </div>
                <CopyToClipboard text={formData.userName}>
                  <button
                    type="button"
                    className="btn btn-outline-secondary ms-2"
                  >
                    <Icon name="copy" size={20} color="#e1e1e1" />
                  </button>
                </CopyToClipboard>
                <button
                  type="button"
                  className="btn btn-outline-primary ms-2"
                  onClick={generateUserName}
                >
                  Generate
                </button>
              </div>
              <div className="mb-3 d-flex align-items-end">
                <div className="flex-grow-1">
                  <label className="form-label">
                    Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    readOnly
                  />
                </div>
                <CopyToClipboard text={formData.password}>
                  <button
                    type="button"
                    className="btn btn-outline-secondary ms-2"
                  >
                    <Icon name="copy" size={20} color="#e1e1e1" />
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end mt-4">
          <button
            type="button"
            className="btn btn-secondary me-3"
            onClick={() => handleTabChange("view")}
          >
            Reset
          </button>
          <button type="submit" className="btn btn-primary">
            Create User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
