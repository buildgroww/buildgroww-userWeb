import {reducer as authReducer} from "../slices/auth";
<<<<<<< HEAD
import {reducer as productReducer} from "../slices/products"
=======
import {reducer as companyReducer} from "../slices/company";

>>>>>>> 7b1198ad43fbb63a9058f67bfc272ddc3cbc1bad
import {combineReducers} from "@reduxjs/toolkit";


export const rootReducer = combineReducers({
<<<<<<< HEAD
   auth:authReducer, 
  product:productReducer
=======
   auth:authReducer,
   company:companyReducer 
>>>>>>> 7b1198ad43fbb63a9058f67bfc272ddc3cbc1bad
});
