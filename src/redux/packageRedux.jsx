import {createSlice} from "@reduxjs/toolkit";

export const packageSlice = createSlice({
    name: "package",
    initialState: {
        packages: [],
        isFetching: false,
        error: false,
    },
    reducers: {
         // get all
         getPackageStart:(state)=>{
            state.isFetching = true
            state.error = false
         },
         getPackageSuccess: (state, action)=>{
          state.isFetching = false;
          state.packages = action.payload;

         },
         getPackageFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
         },
    
           
            //add
            addPackageStart:(state)=>{
               state.isFetching = true
               state.error = false
            },
            addPackageSuccess: (state, action)=>{
             state.isFetching = false;
             state.packages = action.payload;
            },
            addPackageFailure: (state)=>{
               state.isFetching = null;
               state.error = true;
            }


    },

})
export const {getPackageStart, getPackageSuccess, getPackageFailure ,addPackageStart, addPackageSuccess, addPackageFailure} = packageSlice.actions;

export default packageSlice.reducer;