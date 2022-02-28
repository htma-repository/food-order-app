import React, { forwardRef } from "react";

const Input = forwardRef(({ label, input, onChange, value }, ref) => {
  return (
    <div className="flex flex-row gap-x-4">
      <label htmlFor={input.id} className="text-xs md:text-base">
        {label}
      </label>
      <input {...input} onChange={onChange} value={value} ref={ref} />
    </div>
  );
});

export default Input;
