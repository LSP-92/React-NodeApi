import React, { useState, useEffect } from "react";

import Input from "../shared/form/Input";
import Button from "../shared/buttons/Button";
import Sel from "./Sel";
import RangeSlider from "./Slider";
import SearchIcon from "@material-ui/icons/Search";
import "./filter.css";

const Filter = ({ onSubmit }) => {
  const defaultValue = {
    name: "",
    price: [0, 50000],
  };

  const [value, setValue] = useState({ ...defaultValue });

  const [stateStyle, setStateEstyle] = useState("no-view");

  const handleOnchangeText = (e) => {
    console.log(e.target.name);
    setValue({ ...value, name: e.target.value });
  };

  const changeStyle = (e) => {
    if (stateStyle === "no-view") setStateEstyle("filters");
    if (stateStyle === "filters") setStateEstyle("no-view");
  };

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue({ ...value, price: newValue });
  };

  const handleChangeSelect = (selectedOption) => {
    if (selectedOption.value === 0) {
      console.log("entra en ");
      return setValue({ ...value, sale: "true,false" });
    }
    setValue({ ...value, sale: selectedOption.value });
  };

  const handleChangeSelectTags = (selectedOption) => {
    if (selectedOption) {
      const selected = selectedOption.map((element) => element.value);
      return setValue({ ...value, tags: selected.toString() });
    }
    setValue({ ...value, tags: "none" });
  };

  const { name: nombre } = value;
  const searchStyle = {
    color: "blue",
    fontSize: 18,
    fontWeigth: 500,
    paddingRight: "1rem",
  };

  const sendData = (ev) => {
    ev.preventDefault();
    onSubmit(value);
  };

  useEffect(() => {
    return setValue(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="icon">
        <SearchIcon style={searchStyle} id="search" onClick={changeStyle} />
        <label htmlFor="search">Filters</label>
      </div>
      <form className={stateStyle} onSubmit={sendData}>
        <div className="filters-component">
          <Input
            styleDiv="inpDiv-filter"
            styleInp="inp-filter"
            id="inp-name"
            type="text"
            name="name"
            label="Name"
            value={nombre}
            onChange={handleOnchangeText}
          />
          <Sel
            onChange={handleChangeSelect}
            name="State"
            options={[
              { value: "true", label: "Shell" },
              { value: "false", label: "Buy" },
              { value: 0, label: "All" },
            ]}
          />
          <Sel
            isMulti
            name="tags"
            onChange={handleChangeSelectTags}
            options={[
              { value: "mobile", label: "Mobile" },
              { value: "pc", label: "Pc" },
              { value: "lifestyle", label: "Lifestyle" },
              { value: "motor", label: "Motor" },
              { value: "gaming", label: "Gaming" },
            ]}
          />
          <RangeSlider onChange={handleChange} value={value.price} />
        </div>
        <Button className="btnForm1 filter-button" title="Find" type="submit" />
      </form>
    </>
  );
};

export default Filter;
