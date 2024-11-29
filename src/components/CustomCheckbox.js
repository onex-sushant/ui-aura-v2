import React from "react";
import PropTypes from "prop-types";
import "../styles/CustomCheckbox.css";

const CustomCheckbox = ({ checked, onChange, label, className }) => {
  return (
    <div
      className={`form-check form-check-inline custom-checkbox ${className}`}
      onClick={() => onChange(!checked)}
    >
      <input
        className="form-check-input"
        type="checkbox"
        checked={checked}
        readOnly
      />
      {label && <label className="form-check-label">{label}</label>}
    </div>
  );
};

CustomCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

CustomCheckbox.defaultProps = {
  label: "",
  className: "",
};

export default CustomCheckbox;
