import axios from "axios";


class CartApi{
    async createCart(data){
        const response = await axios.post(`${process.env.REACT_APP_HOST}/userapp/cart/create`,data,{
            method: "post",
            headers: { 
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        });
        if(response.data.status==="SUCCESS"){
            return response.data;
        }
        else{
            return false;
        }
    }
}

export const cartApi = new CartApi();