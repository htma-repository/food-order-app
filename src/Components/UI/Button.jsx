import React from "react";

const Button = ({ children, type, onClick, className }) => {
  return (
    <button
      className={`cursor-pointer rounded-full text-sm shadow-md ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
