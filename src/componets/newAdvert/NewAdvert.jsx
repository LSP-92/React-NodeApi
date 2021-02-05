import React, { useState } from "react";
import Input from "../shared/form/Input";
import Button from "../shared/buttons/Button";
import Sel from "../filter/Sel";
import { createAds } from "../../lib/getAds";
import DescriptionAlerts from "../shared/alert/Alert";

import "./newadvert.css";

const NewAdvert = (props) => {
  const defaultValue = {
    state: true,
    message: "",
    title: "",
    severity: "info",
  };

  const [value, setValue] = useState({ name: "", price: 0 });
  const [modal, setModal] = useState(defaultValue);

  const handleOnchange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
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

  const handlerResponse = (response, title, severity) => {
    setModal({
      state: false,
      message: response,
      title: title,
      severity: severity,
    });
  };

  const handlerSubmit = (ev) => {
    ev.preventDefault();
    createAds(value)
      .then((data) => {
        handlerResponse("Ad created ...", "Success", "success");
        props.history.push("/adverts");
      })
      .catch(handlerResponse("Ooops server Error ...", "Error", "error"));
  };

  console.log(value);
  return (
    <>
      <form className="new-adevert" onSubmit={handlerSubmit}>
        <Input
          styleDiv="inpDiv-filter"
          styleInp="inp-filter"
          id="inp-adname"
          type="text"
          name="name"
          label="Name"
          value={value?.name}
          onChange={handleOnchange}
        />
        <Input
          styleDiv="inpDiv-filter"
          styleInp="inp-filter"
          id="inp-password"
          type="number"
          name="price"
          label="Price"
          value={value?.price}
          onChange={handleOnchange}
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
        <input className="file-input" type="file" name="image" />
        <Button
          className="btnForm1"
          title="Create"
          type="submit"
          disabled={
            value?.name && value?.price && value?.sale && value?.tags
              ? false
              : true
          }
        />

        <div className={!!modal.state ? "noView" : "view"}>
          <DescriptionAlerts
            title={modal.title}
            message={modal.message}
            severity={modal.severity}
          />
        </div>
      </form>
    </>
  );
};

export default NewAdvert;
