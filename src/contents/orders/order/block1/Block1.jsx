import { Backdrop, Box, Card, CircularProgress, styled, Typography, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { orderValue } from '../../../../redux/orderRedux'
import LeftBar from './blockLeft/LeftBar'
import Item from './item/Item'
import SearchBar from './searchBar/SearchBar'
import NotInterestedIcon from '@mui/icons-material/NotInterested';

const OrderContainer = styled(Box)(({theme})=>({
    margin:'20px 100px',
    "@media (max-width: 810px)": {
        margin:'20px 20px',
      },
    "@media (max-width: 600px)": {
        margin:'0px 0px',
      },
}))

export default function Block1() {
  const order = useSelector(orderValue);

  let products = Array.from(order.products?.data?.data)

  const [loading,setLoading] = useState(true);
  const [filterlist,setFilterList] = useState(null);
  const [items,setItems] = useState(products?.sort(function(a,b){return new Date(b.createdAt)-new Date(a.createdAt)}));
  const [searchOrder, setSearchOrder] = useState("")
  
  // let items = [];
  // // items.push(...order.products)
  
  // const arrays = ()=>{
  //   items.length=0;
    
  // }

  console.log(items)
  useEffect(() => {
    const timer = setTimeout(()=> {
      setLoading(false);  
      setItems(Array.from(products.map((item)=>{
        // console.log(item)
        // let product = item;
        // console.log(product)
        // const res = item.products.filter(check)
        // console.log(res)
        // product.products.length = 0;
        // product.products = Array.from(res);
        return {products:item.products.filter(check)};
      })));
      
    } ,500)
    return () => {
      clearTimeout(timer);
      setLoading(true);
    }
  }, [searchOrder,filterlist]) // eslint-disable-line react-hooks/exhaustive-deps
  
  function check (item){
    console.log(searchOrder)
    if(searchOrder==="" && (filterlist===null || (!(filterlist?.orderConfirmed) && !(filterlist?.delivered) && !(filterlist?.cancel) && !(filterlist?.refunded))) ){
      return item;
    }
    else if(searchOrder!=="" && (filterlist===null || (!(filterlist?.orderConfirmed) && !(filterlist?.delivered) && !(filterlist?.cancel) && !(filterlist?.refunded)))){
      return (item?.productId?.title?.longTitle.includes(searchOrder) || item?.packageId?.name?.includes(searchOrder));
    }
    else if(searchOrder!==""){
      return item?.orderStatus?.orderConfirm?.isConfirmed===filterlist?.orderConfirmed && item?.orderStatus?.delivered?.isConfirmed===filterlist?.delivered && item?.orderStatus?.cancel?.isConfirmed===filterlist?.cancel && item?.orderStatus?.refunded?.isConfirmed===filterlist?.refunded && (item?.productId?.title?.longTitle.includes(searchOrder) || item?.packageId?.name?.includes(searchOrder))
    }
    else{
      return item?.orderStatus?.orderConfirm?.isConfirmed===filterlist?.orderConfirmed && item?.orderStatus?.delivered?.isConfirmed===filterlist?.delivered && item?.orderStatus?.cancel?.isConfirmed===filterlist?.cancel && item?.orderStatus?.refunded?.isConfirmed===filterlist?.refunded 
    }
  }

  return (
    <OrderContainer sx={{display:'flex',gap:'20px',marginTop:{sm:'0',xs:'100px'}}}>
        <Box sx={{flex:"1",display:{md:'block',xs:'none'}}}>
            <LeftBar setFilterList={setFilterList}/>
        </Box>
        <Box sx={{flex:'3',marginTop:'60px'}}>
            <SearchBar setSearchOrder={setSearchOrder}/>
           {items.length!==0? items.map((item,index)=>(
             item && item.products && item.products.map((i,l)=>{
                 return <Item product={i} index={(items.length-index-1)} l={l} key={index} />        
              })
            )):
            <Card sx={{display:'flex',flexDirection:'column',gap:'10px',justifyContent:'center',alignItems:'center',flex:'3',height:{sm:'200px',xs:'120px'},margin:{sm:'30px',xs:'0'}}}>
              <NotInterestedIcon sx={{fontSize:'30px'}}/>
              <Typography sx={{fontSize:'30px'}}>Not Found</Typography>
            </Card>
            }
        </Box>
        <Backdrop
        sx={{ color: (theme) => theme.colors.success.dark , zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress sx={{width:'50px!important',height:'50px!important'}} color="inherit" />
</Backdrop>
    </OrderContainer>
  )
}
