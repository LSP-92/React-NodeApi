import axios from "axios";
require("dotenv").config();

const client = axios.create({
  baseURL: "http://127.0.0.1:5000/apiv1/",
});

const setAuth = (token) => {
  client.defaults.headers["Authorization"] = `Bearer ${token}`;
};

const loginApi = (credentials) => {
  return client
    .post("auth/login", credentials)
    .then((auth) => {
      setAuth(auth.accessToken);
      console.log(auth);
      return auth.data;
    })
    .catch((err) => {
      return err.message;
    });
};

export default loginApi;
