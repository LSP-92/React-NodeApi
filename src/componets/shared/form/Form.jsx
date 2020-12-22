import React from "react";
import "./form.css";

const Form = ({ type, id, name, label, ...props }) => {
  return (
    <div className="form1">
      <input
        {...props}
        className="input-form1"
        type={type}
        name={name}
        id={id}
        placeholder={label}
        autoComplete="off"
      />
    </div>
  );
};

export default Form;
