import React from "react";

const FormField = ({ label, name, value, onChange, type = "text", required = false }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2">{label}:</label>
      <input
        className="w-full p-2 border rounded"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormField;
