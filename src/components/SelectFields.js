import React from "react";

const SelectField = ({ label, name, value, onChange, options, required = false }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2">{label}:</label>
      <select
        className="w-full p-2 border rounded"
        name={name}
        value={value}
        onChange={onChange}
        multiple
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
