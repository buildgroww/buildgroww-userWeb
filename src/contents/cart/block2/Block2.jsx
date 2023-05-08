import { Box, Card, Divider, styled, Typography ,useTheme, Zoom} from '@mui/material'
import React from 'react'
import {CiDiscount1 }from 'react-icons/ci'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {CurrencyRupee} from '@mui/icons-material'
import Block3 from '../block3/Block3';
import { useSelector } from 'react-redux';
import { cartValue } from '../../../redux/cartRedux';
import { useSnackbar } from 'notistack';

const Paragraph = styled(Typography)(({theme})=>({
    fontFamily:'Roboto',
    flex:1
}))

export default function Block2() {
  const cartVal = useSelector(cartValue);
  const theme = useTheme();
  const {enqueueSnackbar} = useSnackbar();

  let TotalAddonPrice = 0;
  let TotalPackagePrice = 0;
  let TotalPackageQty = 0;
  let TotalAddonQty = 0;
  cartVal.products?.data?.data?.map((item)=>{
        
        item.products[0].addonId.map((i)=>{
           TotalAddonPrice += i.price;
           TotalAddonQty += 1;
        })
        TotalPackagePrice += ((item.products[0].packageId.price * item.products[0].qty)) ;
        TotalPackageQty += item.products[0].qty;

        return 0;
    })

  // const productPrice = 0;
  // cartVal.products?.data?.data?.map((item)=>{return productPrice+item.products[0].packageId })
  return (
    <Box sx={{width:{md:'25%',xs:'100%'},position:{md:'fixed',xs:'static'},right:{md:'9%'}}}>
      <Box onClick={(e)=>{
          e.preventDefault();
          enqueueSnackbar("Coupon not available yet! ", {
            variant: "warning",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
            TransitionComponent: Zoom,
          });
        }} sx={{display:'flex',justifyContent:'space-between',alignItems:'center', height:'60px',padding:'0 25px',borderRadius:'5px',background:`${theme.colors.alpha.white[100]}`,cursor:{md:'pointer',xs:'none'},fontSize:'20px', marginBottom:'20px'}}>
        <Box sx={{display:'flex',alignItems:'center',}}>
          <CiDiscount1/>
          <Paragraph sx={{paddingLeft:'10px',fontSize:'18px'}}>Check For Coupons</Paragraph>
        </Box>
        <KeyboardArrowRightIcon/>
      </Box>
      <Card sx={{padding:'20px'}}>
          <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'10px'}}>
              <Paragraph sx={{fontSize:'18px',fontWeight:500}}>Product</Paragraph>
              <Paragraph sx={{fontSize:'18px',fontWeight:500,textAlign:'center'}}>Quantity</Paragraph>
              <Paragraph sx={{fontSize:'18px',fontWeight:500,display:'flex',justifyContent:'flex-end',alignItems:'center'}}>Price</Paragraph>
          </Box>
          <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <Paragraph sx={{fontSize:'16px',fontWeight:400}}>Package(s)</Paragraph>
              <Paragraph sx={{fontSize:'16px',fontWeight:400,textAlign:'center'}}>{TotalPackageQty}</Paragraph>
              <Paragraph sx={{fontSize:'16px',fontWeight:400,display:'flex',justifyContent:'flex-end',alignItems:'center'}}><CurrencyRupee sx={{fontSize:"14px"}}/>{TotalPackagePrice}</Paragraph>
          </Box>
          <Box sx={{display:'flex',height:'40px',justifyContent:'space-between',alignItems:'center'}}>
              <Paragraph sx={{fontSize:'16px',fontWeight:400}}>Addon(s)</Paragraph>
              <Paragraph sx={{fontSize:'16px',fontWeight:400,textAlign:'center'}}>{TotalAddonQty}</Paragraph>
              <Paragraph sx={{fontSize:'16px',fontWeight:400,display:'flex',justifyContent:'flex-end',alignItems:'center'}}><CurrencyRupee sx={{fontSize:"14px"}}/>{TotalAddonPrice}</Paragraph>
          </Box>
          {/* <Box sx={{display:'flex',height:'40px',justifyContent:'space-between',alignItems:'center'}}>
              <Paragraph>Product price</Paragraph>
              <Paragraph sx={{color:`${theme.colors.success.main}`}}>-<CurrencyRupee sx={{fontSize:"14px"}}/>{cartVal.products?.data?.data?.map((item)=>{return })}</Paragraph>
          </Box> */}
          <Box sx={{display:'flex',height:'40px',justifyContent:'space-between',alignItems:'center'}}>
              <Paragraph>Shipping Charge</Paragraph>
              <Paragraph sx={{color:`${theme.colors.success.main}`,fontWeight:500,display:'flex',justifyContent:'flex-end',alignItems:'center'}}>FREE</Paragraph>
          </Box>
          <Divider sx={{marginTop:'10px'}}/>
          <Box sx={{display:'flex',height:'60px',justifyContent:'space-between',alignItems:'center'}}>
              <Paragraph sx={{fontSize:'18px',fontWeight:500}}>Total Amount</Paragraph>
              <Paragraph sx={{fontSize:'18px',fontWeight:500,display:'flex',justifyContent:'flex-end',alignItems:'center'}}><CurrencyRupee sx={{fontSize:"14px"}}/>{cartVal.total}</Paragraph>
          </Box>
          {/* <Divider sx={{marginBottom:'10px'}}/>
          <Paragraph sx={{color:`${theme.colors.success.main}`}}>You will save <CurrencyRupee sx={{fontSize:"14px"}}/>{cartVal.totalCart - cartVal.total} on this order</Paragraph> */}
          <Box sx={{display:{md:'block',xs:'none'}}}>
            <Block3/>
          </Box>
      </Card>
      
    </Box>
  )
}
