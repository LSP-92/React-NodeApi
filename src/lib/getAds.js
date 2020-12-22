import axios from 'axios'
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

export const getAds = () => {
    const url = 'http://127.0.0.1:5000/apiv1/adverts'
    return axios.get(url)
}