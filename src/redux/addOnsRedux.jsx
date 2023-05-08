import {createSlice} from "@reduxjs/toolkit";

export const addonSlice = createSlice({
    name: "addon",
    initialState: {
        addons: [],
        isFetching: false,
        error: false,
    },
    reducers: {
         // get all
         getAddonStart:(state)=>{
            state.isFetching = true
            state.error = false
         },
         getAddonSuccess: (state, action)=>{
          state.isFetching = false;
          state.addons = action.payload;

         },
         getAddonFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
         },
    
           
         //add
         addAddonStart:(state)=>{
            state.isFetching = true
            state.error = false
         },
         addAddonSuccess: (state, action)=>{
          state.isFetching = false;
          state.addons = action.payload;
         },
         addAddonFailure: (state)=>{
            state.isFetching = null;
            state.error = true;
         },
         
         removeAddon:(state,action) =>{
            state.addons?.addOn.splice(action.payload,1);
         }

    },

})
export const {getAddonStart, getAddonSuccess, getAddonFailure ,addAddonStart, addAddonSuccess, addAddonFailure,removeAddon} = addonSlice.actions;

export default addonSlice.reducer;