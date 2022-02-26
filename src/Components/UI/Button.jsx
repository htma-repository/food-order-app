import React from "react";

const Button = ({ children, type, onClick, className }) => {
  return (
    <button
      className={`cursor-pointer rounded-full text-sm shadow-md ${className}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
