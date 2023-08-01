import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "../../mocks/products";

const initialState ={
    products: {},
}
const slice=createSlice({
    name:'product',
    initialState,
    reducers:{
        getProducts(state,action){
            let data = {...action.payload.data}
            state.products=data;
        }
    }
})

export const {reducer} =slice;

export const getProducts = (query,page)=>async(dispatch)=>{
    try {
    const result = await productApi.getProduct(query,page)
    if(result){
        dispatch(slice.actions.getProducts(result))
        return true
    }
    else{
        return false
    }
} catch (error) {
      console.log(error);  
}
}