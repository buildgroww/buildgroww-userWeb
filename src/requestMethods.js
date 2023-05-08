
import axios from "axios";
import Cookies from 'js-cookie';


const BASE_URL = `${process.env.REACT_APP_BASE_URL}/userapp`
let TOKEN = Cookies.get('authCookie')!==undefined ? Cookies.get('authCookie') : localStorage.getItem("persist:root")?(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.data?.token && JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.data?.token):"";
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers :{Authorization: `Bearer ${TOKEN}`}
})
