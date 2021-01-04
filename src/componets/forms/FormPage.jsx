import React, { useState } from "react";

import "./formpage.css";
import Input from "../shared/form/Input";
import Button from "../shared/buttons/Button";
import Header from "../header/Header";
import loginApi from "../../lib/axiosGlobal";

const FormPage = () => {
  const [value, setValue] = useState({ email: "", password: "" });

  const handleOnchange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const viewInput = async (e) => {
    e.preventDefault();
    console.log(value);
    console.log(await loginApi(value));
  };
  const { email, password } = value;
  return (
    <>
      <Header state={true} />
      <form className="FormPage1" onSubmit={viewInput}>
        <Input
          id="inp-email"
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleOnchange}
        />
        <Input
          id="inp-password"
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleOnchange}
        />
        <Button className="btnForm1" title="Send" type="submit" />

        <label htmlFor="remchk">
          <input type="checkbox" id="remchk" />
          {"Remember"}
        </label>
      </form>
    </>
  );
};

export default FormPage;
