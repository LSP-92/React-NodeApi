import React from "react";

import Select from "react-select";
import "./select.css";

const Sel = ({ name, options }) => {
  return (
    <Select
      isMulti
      name={name}
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder={name}
    />
  );
};

export default Sel;
