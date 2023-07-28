import {reducer as authReducer} from "../slices/auth";
import {reducer as companyReducer} from "../slices/company";

import {combineReducers} from "@reduxjs/toolkit";


export const rootReducer = combineReducers({
   auth:authReducer,
   company:companyReducer 
});
