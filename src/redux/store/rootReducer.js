import {reducer as authReducer} from "../slices/auth";

import {combineReducers} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
   auth:authReducer, 
  
});
