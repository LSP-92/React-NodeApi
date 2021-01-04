import React from "react";
import "./form.css";

const Form = ({ type, id, name, label, styleDiv, styleInp, ...props }) => {
  return (
    <div className={styleDiv || "form1"}>
      <input
        {...props}
        className={styleInp || "input-form1"}
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
