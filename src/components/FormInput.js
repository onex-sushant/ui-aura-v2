import React from "react";
import { Form } from "react-bootstrap";
import Select from "react-select"; // For searchable select
import Autosuggest from "react-autosuggest"; // For auto-suggestion text box

const FormInput = ({
  label,
  name,
  type = "text", // Default to text input
  value,
  onChange,
  options = [], // For select and searchable select
  placeholder,
  isSearchable = false, // For searchable select
  autoSuggestOptions = [], // For auto-suggestion input
  checked, // For checkbox or radio
  required = false,
  disabled = false,
}) => {
  const handleAutosuggestChange = (event, { newValue }) => {
    onChange({ target: { name, value: newValue } });
  };

  const renderAutosuggest = () => {
    const inputProps = {
      placeholder,
      value,
      onChange: handleAutosuggestChange,
      name,
      className: "form-control",
    };

    return (
      <Autosuggest
        suggestions={autoSuggestOptions}
        onSuggestionsFetchRequested={({ value }) => {
          // Customize this logic to filter suggestions
        }}
        onSuggestionsClearRequested={() => {}}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={(suggestion) => <span>{suggestion}</span>}
        inputProps={inputProps}
      />
    );
  };

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <Form.Select
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
          >
            <option value="">Select {label}</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
        );

      case "searchable-select":
        return (
          <Select
            name={name}
            value={options.find((option) => option.value === value)}
            onChange={(selectedOption) =>
              onChange({ target: { name, value: selectedOption.value } })
            }
            options={options}
            isSearchable={isSearchable}
            placeholder={placeholder}
          />
        );

      case "radio":
      case "checkbox":
        return (
          <Form.Check
            type={type}
            name={name}
            label={label}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
        );

      case "auto-suggest":
        return renderAutosuggest();

      default:
        return (
          <Form.Control
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            disabled={disabled}
          />
        );
    }
  };

  return (
    <Form.Group className="mb-3">
      {type !== "checkbox" && type !== "radio" && (
        <Form.Label>{label}</Form.Label>
      )}
      {renderInput()}
    </Form.Group>
  );
};

export default FormInput;
