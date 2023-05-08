// import { Snackbar } from "@mui/material";
// import MuiAlert from '@mui/material/Alert';
// import React from "react";
import { publicRequest, userRequest } from "../requestMethods";
import { addProduct} from "./cartRedux";
import { addOrderProduct, clearOrders, updateProductList } from "./orderRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
// import { addUserFailure, addUserStart, addUserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess, getUserFailure, getUserStart, getUserSuccess, updateUserFailure, updateUserStart, updateUserSuccess } from "./usersCallRedux";
import { addProductFailure, addProductStart, addProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess} from "./productRedux";
import { addPackageFailure, addPackageStart, addPackageSuccess } from "./packageRedux";
import { addAddonFailure, addAddonStart, addAddonSuccess } from "./addOnsRedux";
// Authentication
export const authenticateLogin = async(dispatch, user) =>{

    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);
        console.log(res)
        if(res?.data?.status==='SUCCESS')
            dispatch(loginSuccess(res.data));
        return res;
    }catch(err){
        dispatch(loginFailure());
        return err
    }

}
export const sentOtpLogin = async(user) =>{
    try{
        const res = await publicRequest.post("/auth/login-otp", user)
        return res;
    }catch(err){
        return err;
    }

}
export const resetPasswordOtp= async(user) =>{
    try{
        const res = await publicRequest.post("/auth/reset-password-otp", user)
        return res;
    }catch(err){
        return err;
    }

}
export const resetPassword = async(user) =>{
    try{
        const res = await publicRequest.put("/auth/reset-password", user)
        return res;
    }catch(err){
        return err;
    }

}
export const logout = async () =>{
    
    try {
       const res = await userRequest.post("/auth/logout")
        console.log(res)
        localStorage.clear();
        window.location.reload();
        return res;

      } catch (e) {
        return e;
      }

}

export const authenticateSignup = async(user) =>{
    try{
        const res = await publicRequest.post("/auth/register", user)
        return res;
    }catch(err){
        return err;
    }

}

export const sentOtpRegister = async(user) =>{
    try{
        const res = await publicRequest.post("/auth/register-otp", user)
        return res;
    }catch(err){
        return err;
    }

}

// user 

export const updateUser = async(userId,data,dispatch) =>{
    try{
        const res = await userRequest.put(`/user/update/${userId}`, data)
        dispatch(loginSuccess(res.data));
        return res;
    }catch(err){
        return err;
    }

}

// cart

export const createCart = async(product) =>{
    try{
        const res = await userRequest.post(`/cart/create`, product);
        return res;
    }catch(err){
        return err;
    }
} 

export const cartListProduct = async(query,sort,dispatch) =>{
    let product = {
        "query":query,
        "options": {
          "collation": "",
          "sort": sort,
          "populate": "products.productId products.packageId products.addonId",
          "projection": "",
          "lean": false,
          "leanWithId": true,
          "page": 1,
          "limit": 10,
          "pagination": true,
          "useEstimatedCount": false,
          "useCustomCountFn": false,
          "forceCountFn": false,
          "read": {},
          "options": {}
        },
        "isCountOnly": false};
    try{
        const res = await userRequest.post(`/cart/list`, product);
        if(res.data.data!==null)
            dispatch(addProduct(res.data));
        return res;
    }catch(err){
        return err;
    }
}

export const updateCartProduct = async(productCartId,data) =>{
    try{
        const res = await userRequest.put(`/cart/update/${productCartId}`,data);
        return res;
    }catch(err){
        return err;
    }
} 
export const deleteCart = async(cartId) =>{
    try{
        const res = await userRequest.delete(`/cart/soft-delete/${cartId}`);
        // dispatch(addProduct({"products":[],"id":null}));
        return res;
    }catch(err){
        return err;
    }
} 


// order 
export const createOrder = async(data) =>{
    try{
        const res = await userRequest.post(`/order/create`,data);
        console.log(res)
        return res;
    }catch(err){
        return err;
    }
} 

export const getOrder = async(orderId,dispatch) =>{
    try{
        const res = await userRequest.get(`/order/get/${orderId}`);
        // dispatch(updateProductList(res.data.data))
    }catch(err){
        return err;
    }
} 

export const orderListProduct = async(query,sort,dispatch) =>{
    let body = {
        "query":query,
        "options": {
          "collation": "",
          "sort": sort,
          "populate": "products.productId products.packageId products.addonId",
          "projection": "",
          "lean": false,
          "leanWithId": true,
          "page": 1,
          "limit": 10,
          "pagination": true,
          "useEstimatedCount": false,
          "useCustomCountFn": false,
          "forceCountFn": false,
          "read": {},
          "options": {}
        },
        "isCountOnly": false
      }
    try{
        const res = await userRequest.post(`/order/list`, body);
        console.log(res)
        dispatch(addOrderProduct(res.data));
        return res;
    }catch(err){
        return err;
    }
}

export const updateOrderProduct = async(orderId,data) =>{
    try{
        const res = await userRequest.put(`/order/update/${orderId}`,data);
        return res;
    }catch(err){
        return err;
    }
} 

// product

export const getProduct = async(id) =>{
    try{
        const res = await userRequest.get(`/product/get/${id}`);
        return res;
    }catch(err){
        return err;
    }
} 

export const addProducts = async(query={}, sort='', dispatch) =>{
    console.log(dispatch);
      dispatch(addProductStart());
      const obj = { 
      "query":query,
      "options": {
        "collation": "",
        "sort": sort,
        "populate": "",
        "projection": "",
        "lean": false,
        "leanWithId": true,
        "page": 1,
        "limit": 10,
        "pagination": true,
        "useEstimatedCount": false,
        "useCustomCountFn": false,
        "forceCountFn": false,
        "read": {},
        "options": {}
      },
      "isCountOnly": false
    }
      try{
          const res = await publicRequest.post("/product/list", obj);
          dispatch(addProductSuccess(res.data));
          return res;
      }catch(err){
          dispatch(addProductFailure());
      }
  
  }
export const ProductsList = async(query, sort) =>{
    // console.log(dispatch);
    //   dispatch(addProductStart());
      const obj = { 
      "query":query,
      "options": {
        "collation": "",
        "sort": sort,
        "populate": "",
        "projection": "",
        "lean": false,
        "leanWithId": true,
        "page": 1,
        "limit": 10,
        "pagination": true,
        "useEstimatedCount": false,
        "useCustomCountFn": false,
        "forceCountFn": false,
        "read": {},
        "options": {}
      },
      "isCountOnly": false
    }
      try{
          const res = await publicRequest.post("/product/list", obj);
        //   dispatch(addProductSuccess(res.data));
          return res;
      }catch(err){
        //   dispatch(addProductFailure());
        return err;
      }
  
  }

  export const ProductsListPopulate = async(populate, query) =>{
    // console.log(dispatch);
    //   dispatch(addProductStart());
      const obj = { 
      "query":query,
      "options": {
        "collation": "",
        "sort": {"name":1},
        "populate": populate,
        "projection": "",
        "lean": false,
        "leanWithId": true,
        "page": 1,
        "limit": 10,
        "pagination": true,
        "useEstimatedCount": false,
        "useCustomCountFn": false,
        "forceCountFn": false,
        "read": {},
        "options": {}
      },
      "isCountOnly": false
    }
      try{
          const res = await publicRequest.post("/product/list", obj);
        //   dispatch(addProductSuccess(res.data));
          return res;
      }catch(err){
        //   dispatch(addProductFailure());
        return err;
      }
  
  }





export const addPackages = async(query={}, sort={}, dispatch) =>{
    // console.log(dispatch);
    dispatch(addPackageStart());
    const obj = { 
    "query":query,
    "options": {
        "collation": "",
        "sort": sort,
        "populate": "",
        "projection": "",
        "lean": false,
        "leanWithId": true,
        "page": 1,
        "limit": 10,
        "pagination": true,
        "useEstimatedCount": false,
        "useCustomCountFn": false,
        "forceCountFn": false,
        "read": {},
        "options": {}
      },
      "isCountOnly": false
    }
    try{
        const res = await publicRequest.post("/package/list", obj);
        dispatch(addPackageSuccess(res.data));
        console.log(res.data)
        return res;
    }catch(err){
        dispatch(addPackageFailure());
    }

}

export const addAddOns = async(dispatch) =>{
    // console.log(dispatch);
    dispatch(addAddonStart());
    const obj = { 
    "query":{},
    "options": {
        "collation": "",
        "sort":"",
        "populate": "",
        "projection": "",
        "lean": false,
        "leanWithId": true,
        "page": 1,
        "limit": 10,
        "pagination": true,
        "useEstimatedCount": false,
        "useCustomCountFn": false,
        "forceCountFn": false,
        "read": {},
        "options": {}
      },
      "isCountOnly": false
    }
    try{
        const res = await publicRequest.post("/addon/list", obj);
        dispatch(addAddonSuccess(res.data));
        return res;
    }catch(err){
        dispatch(addAddonFailure());
    }

}

export const updateProduct = async(data, url, dispatch) =>{
//    console.log(data)
    try{
        const res = await userRequest.put(`/product/update/${url}`, data);
        // console.log(res)
        return res;
    }catch(err){
     console.log(err)
    }
}  