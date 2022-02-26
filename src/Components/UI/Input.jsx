import React from "react";

const Input = ({ label, input, onChange, value }) => {
  return (
    <div className="flex flex-row gap-x-4">
      <label htmlFor={input.id} className="text-xs md:text-base">
        {label}
      </label>
      <input {...input} onChange={onChange} value={value} />
    </div>
  );
};

export default Input;
