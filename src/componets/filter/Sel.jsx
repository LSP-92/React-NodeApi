import React from "react";

import Select from "react-select";
import "./select.css";

const Sel = (props) => {
  return (
    <Select
      {...props}
      name={props.name}
      options={props.options}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder={props.name}
    />
  );
};

export default Sel;
