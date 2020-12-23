import axios from "axios";
//const { URL_API: urlApi } = process.env

/* const client =  axios.create({
    urlApi
}) */
/* const setAuth = token => {
    client.defaults.headers['Authorization']= `Bearer ${token}`
} */

/* client.login = credentials => {
    client.post('auth/login', credentials).then(auth =>
        setAuth(auth.accessToken)

    )
} */

export const getAds = (path) => {
  const url = `http://192.168.1.134:5000/${path}`;
  return axios.get(url);
};
