import { cartApi } from "../../mocks/cart";
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    carts:[]
}

const slice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        createCart(state,action){
                state.carts= [action.payload.data,...state.carts]
        }
    }
})

export const {reducer} = slice;

export const createCart =(data)=>async(dispatch)=>{
    try {
        const res = await cartApi.createCart(data);
        if(res){
            dispatch(slice.actions.createCart(res))
            return true
        }
        else{
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}