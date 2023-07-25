import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_HOST}/userapp`;
console.log(BASE_URL)

let privateRequest;

export const publicRequest = axios.create({
    baseURL: BASE_URL
})


try {

 privateRequest = axios.create({
    baseURL: BASE_URL,
    headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}
})
    
} catch (error) {
    
}

export default privateRequest;