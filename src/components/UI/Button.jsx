import React from "react";

const Button = ({ children, type, onClick, className, disabled }) => {
  return (
    <button
      className={`rounded-full text-sm shadow-md ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
