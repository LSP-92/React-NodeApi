import React, { useState } from "react";

import Input from "../shared/form/Input";
import Button from "../shared/buttons/Button";
import Sel from "./Sel";
import RangeSlider from "./Slider";
import SearchIcon from "@material-ui/icons/Search";
import "./filter.css";

const Filter = () => {
  const [value, setValue] = useState({ email: "", password: "" });
  const [stateStyle, setStateEstyle] = useState("no-view");

  const handleOnchange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const changeStyle = (e) => {
    if (stateStyle === "no-view") setStateEstyle("filters");
    if (stateStyle === "filters") setStateEstyle("no-view");
  };

  const { name } = value;
  const searchStyle = {
    color: "blue",
    fontSize: 32,
    fontWeigth: 500,
    paddingRight: "0.7rem",
  };
  return (
    <>
      <div className="icon">
        <SearchIcon style={searchStyle} id="search" onClick={changeStyle} />
        <label htmlFor="search">Filters</label>
      </div>
      <form className={stateStyle}>
        <div className="filters-component">
          <Input
            styleDiv="inpDiv-filter"
            styleInp="inp-filter"
            id="inp-name"
            type="text"
            name="name"
            label="Name"
            value={name}
            onChange={handleOnchange}
          />
          <Sel
            name="State"
            options={[
              { value: "Shell", label: "Shell" },
              { value: "Buy", label: "Buy" },
            ]}
          />
          <Sel
            name="tags"
            options={[
              { value: "mobile", label: "Mobile" },
              { value: "pc", label: "Pc" },
              { value: "lifestyle", label: "Lifestyle" },
              { value: "motor", label: "Motor" },
              { value: "gaming", label: "Gaming" },
            ]}
          />
          <RangeSlider />
        </div>
        <Button className="btnForm1 filter-button" title="Find" type="submit" />
      </form>
    </>
  );
};

export default Filter;
