import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        products:{},
        clickIndex:{},
    },
    reducers: {
        addOrderProduct: (state, action) =>{
            state.products.length=0;
            state.clickIndex=null;
            // state.orderId=null;

            state.products = action.payload;
            // state.orderId=action.payload.id;

            // state.products.map((item,index)=>{
            //     let data = {};
            //     data = item;
            //     if(item.productId !== undefined){
            //         data.productId = item.productId.id;
            //     }
            //     item && state.productList.products.push(data)
 
            //     return 0;
            //  })
        },
        // updateProductList: (state,action) =>{
        //     state.productList.products.length=0;
        //     state.productList.products.push(...action.payload.products)
        // },
        updateIndex:(state,action) =>{
            console.log(action.payload)
            state.clickIndex=action.payload;
        },
        // addOrderItem:(state,action) =>{
        //     state.productList.products.unshift(...action.payload.products);
        // },
        clearOrders:(state) =>{
            state.products.length=0;
            // state.productList.products.length=0;
            state.clickIndex={};
            // state.orderId=null;
        }
        
    },
});

export const {addOrderProduct,updateIndex,clearOrders} = orderSlice.actions;
export const orderValue =(state) => state.order;
export default orderSlice.reducer;