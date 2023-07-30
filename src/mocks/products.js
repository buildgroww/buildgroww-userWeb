import axios from "axios";

class ProductApi{
    async getProduct (query){
        const data ={
            "query":query,
            "options": {
              "collation": "",
              "sort": {"name":1},
              "populate": "shop",
              "projection": "",
              "lean": false,
              "leanWithId": true,
              "page": 1,
              "limit": 9,
              "pagination": true,
              "useEstimatedCount": false,
              "useCustomCountFn": false,
              "forceCountFn": false,
              "read": {},
              "options": {}
            },
            "isCountOnly": false
          }
       const res =await axios.post(`${process.env.REACT_APP_POST}/userapp/product/list`,data,{
        method:"post",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
       })
       if(res.data.status==="SUCCESS")
       return res.data;
       else
       return false;
    }
}

export const productApi = new ProductApi()