import {reducer as authReducer} from "../slices/auth";
import {reducer as productReducer} from "../slices/products"
import {reducer as companyReducer} from "../slices/company";
import {reducer as cartReducer} from "../slices/cart"
import {combineReducers} from "@reduxjs/toolkit";


export const rootReducer = combineReducers({
   auth:authReducer, 
  product:productReducer,
   company:companyReducer ,
cart:cartReducer
});
