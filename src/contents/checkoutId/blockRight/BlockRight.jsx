import { Box, Card, Divider, Typography ,useTheme} from '@mui/material'
import React from 'react'
import {CurrencyRupee} from '@mui/icons-material'
import { useSelector } from 'react-redux';
import { cartValue } from '../../../redux/cartRedux';

export default function BlockRight() {
  const cartVal = useSelector(cartValue);
  const theme = useTheme();

  let addonPrice = 0;
  cartVal.products?.data?.data[cartVal.products?.data?.data?.length-1]?.products[0].addonId?.map((item)=>{
      addonPrice += item.price;
      return 0;
  }) 

  return (
    <Box sx={{width:{md:'25%',xs:'100%'},position:{md:'fixed',xs:'static'},right:{md:'9%'}}}>
      {/* <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center', height:'60px',padding:'0 25px',borderRadius:'5px',background:`${theme.colors.alpha.white[100]}`,cursor:{md:'pointer',xs:'none'},fontSize:'20px', marginBottom:'20px'}}>
        <Box sx={{display:'flex',alignItems:'center',}}>
          <CiDiscount1/>
          <Typography sx={{paddingLeft:'10px',fontSize:'18px'}}>Check For Coupons</Typography>
        </Box>
        <KeyboardArrowRightIcon/>
      </Box> */}
      <Card sx={{padding:'20px'}}>
          <Box sx={{display:'flex',height:'40px',justifyContent:'space-between',alignItems:'center'}}>
              <Typography>Total product Price</Typography>
              <Typography><CurrencyRupee sx={{fontSize:"14px"}}/>{cartVal.products?.data?.data[cartVal.products?.data?.data?.length - 1]?.products[0].packageId?.price * cartVal.products?.data?.data[cartVal.products?.data?.data?.length - 1]?.products[0].qty}</Typography>
          </Box>
          <Box sx={{display:'flex',height:'40px',justifyContent:'space-between',alignItems:'center'}}>
              <Typography>AddOns Price</Typography>
              <Typography sx={{color:`${theme.colors.success.main}`}}><CurrencyRupee sx={{fontSize:"14px"}}/>{addonPrice}</Typography>
          </Box>
          <Box sx={{display:'flex',height:'40px',justifyContent:'space-between',alignItems:'center'}}>
              <Typography>Shipping Charge</Typography>
              <Typography sx={{color:`${theme.colors.success.main}`,fontWeight:500}}>FREE</Typography>
          </Box>
          <Divider sx={{marginTop:'10px'}}/>
          <Box sx={{display:'flex',height:'60px',justifyContent:'space-between',alignItems:'center'}}>
              <Typography sx={{fontSize:'18px',fontWeight:500}}>Total Amount</Typography>
              <Typography sx={{fontSize:'18px',fontWeight:500}}><CurrencyRupee sx={{fontSize:"14px"}}/>{(cartVal.products?.data?.data[cartVal.products?.data?.data?.length-1]?.products[0].packageId?.price * cartVal.products?.data?.data[cartVal.products?.data?.data?.length-1]?.products[0].qty) + addonPrice}</Typography>
          </Box>
          {/* <Divider sx={{marginBottom:'10px'}}/>
          <Typography sx={{color:`${theme.colors.success.main}`}}>You will save <CurrencyRupee sx={{fontSize:"14px"}}/>{(product?.price?.mrp - product?.price?.cost)*qty} on this order</Typography> */}
          {/* <Box sx={{display:{md:'block',xs:'none'}}}>
            <Block3/>
          </Box> */}
      </Card>
      
    </Box>
  )
}
