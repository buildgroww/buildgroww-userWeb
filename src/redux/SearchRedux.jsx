import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        searchList:[],
        query:null
    },
    reducers:{
        addSearchProduct:(state,action)=>{
            console.log(action.payload)
            let check = false;
            state.searchList.map((item)=>{
               if(action.payload.key===item.key){
                    check = true;
                }

                return 0;
            });
            if(check===false)
                state.searchList.unshift(action.payload);
        },
        updateQuery:(state,action)=>{
            state.query=action.payload;
        },
        clearSearchlist:(state)=>{
            state.searchList.length=0;
        }
    },
});

export const {addSearchProduct,updateQuery,clearSearchlist} = searchSlice.actions;
export default searchSlice.reducer;