import React from "react";

const Card = ({ className, children }) => {
  return (
    <section className={`rounded-xl p-5 shadow-lg ${className}`}>
      {children}
    </section>
  );
};
export default Card;
