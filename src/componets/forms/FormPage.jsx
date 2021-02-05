import React, { useState } from "react";
import "./formpage.css";
import Input from "../shared/form/Input";
import Button from "../shared/buttons/Button";
import { loginApi } from "../../lib/axiosGlobal";
import DescriptionAlerts from "../shared/alert/Alert";

const FormPage = (props) => {
  const defaultValue = {
    state: true,
    message: "",
    title: "",
    severity: "info",
  };

  const [value, setValue] = useState({ email: "", password: "" });
  const [modal, setModal] = useState(defaultValue);

  const handleOnchange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handlerResponse = (response, title, severity) => {
    setModal({
      state: false,
      message: response,
      title: title,
      severity: severity,
    });
  };

  const viewInput = async (e) => {
    e.preventDefault();
    try {
      const { ok, error } = await loginApi(value);
      if (ok === false) {
        console.log("kkk");
        handlerResponse(error, "Error", "error");
        return;
      }
      handlerResponse("Login", "Success", "success");
      props.history.push("/");
    } catch (error) {
      handlerResponse("error.message", "Error", "error");
      console.log(error, "error");
    }
  };

  const { email, password } = value;
  return (
    <>
      <form className="FormPage1" onSubmit={viewInput}>
        <Input
          id="inp-email"
          type="email"
          name="email"
          label="Email"
          value={email}
          autoComplete
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
        <Button
          className="btnForm1"
          disabled={email && password ? false : true}
          title="Send"
          type="submit"
        />
        <div className={!!modal.state ? "noView" : "view"}>
          <DescriptionAlerts
            title={modal.title}
            message={modal.message}
            severity={modal.severity}
          />
        </div>
        <label htmlFor="remchk">
          <input type="checkbox" id="remchk" />
          {"Remember"}
        </label>
      </form>
    </>
  );
};

export default FormPage;
