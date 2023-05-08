import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:{},
        // updateList:{"products":[]},
        // cartId:null,
        quantity: 0,
        total: 0,
        totalCart: 0,
        check:false
    },
    reducers: {
        addProduct: (state, action) =>{
            // state.updateList.products.length=0;
            // state.cartId=null;
            state.quantity=0;
            state.total=0;
            state.totalCart= 0;

            state.quantity += action.payload?.data?.data?.length;
            state.products = action.payload;
            // state.cartId = action.payload.id;
            state.products?.data?.data.map((item)=>{
            //    item && state.updateList.products.push({
            //         "productId": `${item.productId.id}`,
            //         "qty": item.qty,
            //         "packageId": `${item.packageId.id}`,
            //     })
                let addonPrice = 0;
                item.products[0].addonId.map((i)=>{
                   addonPrice += i?.price

                   return 0;
                })
                state.total += (item.products[0]?.packageId?.price * item?.products[0]?.qty) + addonPrice ;
                // state.totalCart += item.products[0].productId.price.mrp * item.products[0].qty;

                return 0;
            })
        },
        increaseQty:(state,action) =>{
            state.products.data.data[action.payload].products[0].qty += 1;
            state.total += state.products?.data?.data[action.payload].products[0].packageId.price ;
        },
        decreaseQty:(state,action) =>{
            state.products.data.data[action.payload].products[0].qty -= 1;
            state.total -= state.products?.data?.data[action.payload].products[0].packageId.price ;
        },
        removeItem:(state,action) =>{
                let addonPrice = 0;
                state.products && state.products.data && state.products.data.data[action.payload] && state.products.data.data[action.payload].products[0].addonId.map((i)=>{
                   addonPrice += i?.price

                   return 0;
                })
            state.total -= (state.products.data?.data[action.payload].products[0].packageId.price * state.products.data?.data[action.payload].products[0].qty) - addonPrice ;

            // state.totalCart -= state.products?.data?.data[action.payload].products[0].productId.price.mrp * state.products?.data?.data[action.payload].products[0].qty;

            state.quantity --;
            state.products.data?.data?.splice(action.payload,1);
        },
        removeAddon:(state,action) =>{
            state.total -= state.products?.data?.data[action.payload.index].products[0].addonId[action.payload.i].price;
            state.products?.data?.data[action.payload.index].products[0].addonId.splice(action.payload.i,1);
        },
        addAddon:(state,action) =>{
            let addonPrice = 0;
                state.products?.data?.data[action.payload.index].products[0].addonId.map((i)=>{
                   addonPrice += i?.price

                   return 0;
                })
            state.total -= addonPrice ;

            addonPrice = 0;

            action.payload.addOn.map((item)=>{
                addonPrice += item.price

                return 0;
            })

            state.total += addonPrice ;

            state.products.data.data[action.payload.index].products[0].addonId = action.payload.addOn;

        },
        updateCheck:(state,action) =>{
            state.check = action.payload
        }
        // addItem:(state,action) =>{
        //     state.updateList.products.push(action.payload);
        // }
    },
});

export const {addProduct,increaseQty,decreaseQty,removeItem,addItem,removeAddon,addAddon,updateCheck} = cartSlice.actions;
export const cartValue =(state) => state.cart;
export default cartSlice.reducer;