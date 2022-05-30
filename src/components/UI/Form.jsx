import React, { Fragment } from "react";

const Form = (props) => {
  return (
    <Fragment>
      <label htmlFor={props.id}>{props.children}</label>
      <input
        placeholder={props.children}
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        className={props.className}
        ref={props.refs}
      />
    </Fragment>
  );
};

export default Form;
