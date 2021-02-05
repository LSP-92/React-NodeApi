import axios from "axios";
import { setDataLocal, clearLocal } from "../lib/withLocalStorage";

const client = axios.create({
  baseURL: "http://127.0.0.1:5000/apiv1/",
});

const setAuth = (token) => {
  client.defaults.headers["Authorization"] = `Bearer ${token}`;
};

const setLogOut = () => {
  client.defaults.headers["Authorization"] = ``;
};

export const loginApi = async (credentials) => {
  try {
    const { data } = await client.post("auth/login", credentials);
    setAuth(data.token);
    setDataLocal(data.token);
    return data;
  } catch (err) {
    return err.message;
  }
};

export const logOut = () => {
  clearLocal();
  setLogOut();
};

export default client;
