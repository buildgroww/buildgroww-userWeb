import { Launch, ResetTvRounded } from '@mui/icons-material'
import { Backdrop, Box, CircularProgress, styled, Zoom } from '@mui/material'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import CheckOut from '../../../../pages/checkout/CheckOut'
import { addPackages, cartListProduct, createCart, updateCartProduct } from '../../../../redux/apiCalls'
import { addItem, cartValue } from '../../../../redux/cartRedux'
import { selectUser } from '../../../../redux/userRedux'
import Block8 from '../../block8/Block8'

import "./leftbar.css"
import Sliders from './Slider/Sliders'
import SlidersLeft from "./slider2/SlidersLeft"
const LeftContainer = styled(Box)(({ theme }) => ({
  flex: "2",
  background: "#fff",
  marginRight: "10px",
  maxHeight: "80vh",
  position: "sticky",
  top: "0px",
  
  [theme.breakpoints.down('md')]: {
    maxHeight:"60vh",
},


  [theme.breakpoints.down('sm')]: {
    width:"100%",
    position:"static",
    marginRight:"0px"
},


}))
const LeftMainImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",


}))
const ButtonHover = styled("button")(({ theme }) => ({
  width: "40%",
  height: "50px",
  position: "absolute",
  display: "none",
  background: "rgba( 255, 255, 255, 0.9 )",
  borderRadius:"5px",
  border:"none",
  left: "40%",
  alignItems: "center",
  zIndex:"100",
  justifyContent: "center",
  "&:hover":{
    background: "rgba( 5, 35, 65, 0.55 )",
     color:"white",
     transition:"all 0.2s linear"
  }
,
  [theme.breakpoints.down('md')]: {
      left:"30%",
      width:"50%"
  },

}))
const Button = styled("button")(({ theme }) => ({
  width: "190px",
  height: "50px",
  fontSize: "16px",
  backgroundColor: "darkorange",
  border: "none",
  color: "white",
  cursor: "pointer",
  [theme.breakpoints.down('lg')]: {
    width: "150px",
  },
  [theme.breakpoints.down('md')]: {
    width: "120px",
  },
  [theme.breakpoints.down('sm')]: {
    width: "33%",
  },


}))
const Button1 = styled("button")(({ theme }) => ({
  width: '190px',
  height: "50px",
  border: "none",
  backgroundColor: "tomato",
  fontSize: "16px",
  color: "white",
  cursor: "pointer",
  [theme.breakpoints.down('lg')]: {
    width: "150px",
  },
  [theme.breakpoints.down('md')]: {
    width: "120px",
  },
  [theme.breakpoints.down('sm')]: {
    width: "33%",
  },

}))
const Button2 = styled("a")(({ theme }) => ({
  width: '250px',
  border: "none",
  backgroundColor: "teal",
  fontSize: "16px",
  color: "white",
  height: '50px',
  alignSelf: "center",
  display: 'flex',
  justifyContent: "center",
  cursor: "pointer",
  alignItems: "center",
  marginLeft: "65px",
  textDecoration:'none',
  [theme.breakpoints.down('md')]: {
    marginLeft:"0px",
    width:"180px"
  },
  [theme.breakpoints.down('sm')]: {
  display:"none"
  },


}))
const Button3 = styled("button")(({ theme }) => ({
  width: '250px',
  border: "none",
  backgroundColor: "teal",
  fontSize: "16px",
  color: "white",
  height: '50px',
  alignSelf: "center",
  display: 'none',
  
  justifyContent: "center",
  cursor: "pointer",
  alignItems: "center",
  marginLeft: "65px",
  [theme.breakpoints.down('md')]: {
    marginLeft:"0px",
    width:"180px"
    
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft:"0px",
    width:"33%",
    display:"flex"
  },


}))
const LowerContainer = styled(Box)(({theme})=>({
  display:"flex",
  justifyContent:"space-between",
  [theme.breakpoints.down('xl')]: {
    margin:  "10px 20px 10px 100px",
  },
  [theme.breakpoints.down('lg')]: {
    margin:  "10px 20px 10px 100px",
  },
  [theme.breakpoints.down('md')]: {
    margin:  "10px 20px",
  },
  [theme.breakpoints.down('sm')]: {
  display:'none'
   
  },

}))

const LeftBar = ({product,setLoading}) => {
  const user = useSelector(selectUser);
  const cart = useSelector(cartValue);
  const {enqueueSnackbar} = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [click,setClick] = useState(0);
  const [clickType,setClickType] = useState("");
  const [open,setOpen] = useState(false);


  //  window.addEventListener("scroll", (event)=>{
//    if(this.scrollY > 100){
//      console.log("hello world")
//    }
//  })

const handleCart = async()=>{
  const res = await addPackages({},'',dispatch);
  if(res?.data?.status==='SUCCESS'){
    setClickType("addToCart")
    setOpen(true)
  }
}

const handleClick=() =>{
  window.open(product.data.productUrl,'_blank','noopener','noreferrer')
}

useEffect(() => {
  async function fetchdata(){
    if(click){
      setLoading(true);
      let query = {"userId":`${user.currentUser?.data?.id}`,"isDeleted":false}
      let sort = {"name":1}
      const resUpdate = await updateCartProduct(cart.cartId,cart.updateList,query,sort,dispatch);
      const resGet = await cartListProduct(query,sort,dispatch);
      setLoading(false);
      if(resUpdate?.status==='SUCCESS'&&resGet?.status==='SUCCESS'){
        enqueueSnackbar('Product added successfully in your cart', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
          },
          TransitionComponent: Zoom
          });
      }
      else{
        enqueueSnackbar('Some Error Occured', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
          },
          TransitionComponent: Zoom
          });
      }
    }
  }
  fetchdata();
  setClick(0);
}, [click]) // eslint-disable-line react-hooks/exhaustive-deps



  return (
    <LeftContainer>
      <LeftMainImageContainer>
        <Box sx={{ position: "relative", width: "100%", height: "100%", display: { md: "flex", xs: "none" }, justifyContent: "center", alignItems: "center" }} >
       
          <Sliders product={product} />
     
          <ButtonHover className="hidden-button" onClick={handleClick}  >Live Preview  <Launch /> </ButtonHover>
        </Box>
        <Box sx={{ position: "relative", width: "100%", height: "100%", display: {md:"none", sm:"flex"}, justifyContent: "center", alignItems: "center"}} >
            <Box  sx={{width:"100%", height:"100%"}}  >
            <SlidersLeft product={product}  />
            </Box>
          <ButtonHover className="hidden-button" onClick={handleClick}  >Live Preview  <Launch /> </ButtonHover>
        </Box>
        {/* <Box sx={{position:"relative",width:"100%", height:"100%",display:"flex", justifyContent:"center", alignItems:"center"}} >
      <MainImage src="https://colorlib.com/wp/wp-content/uploads/sites/2/education-free-template.jpg" />
      <ButtonHover className="hidden-button" >Live Preview  <Launch/> </ButtonHover>
      </Box> */}
        <LowerContainer  >
       <Button onClick={
        // (e)=>handleCartButton(e,product?.data)
        handleCart
        }>Add To Cart</Button>
          <Button3 onClick={handleClick}  >Live Preview <Launch/> </Button3>
          <Button1 onClick={async()=>{ 
            if(user.currentUser===null || (user.currentUser.data && user.currentUser.data === null)){
              enqueueSnackbar('Please, First Login to Buy product!', {
                variant: 'info',
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'center'
                },
                TransitionComponent: Zoom
                });
              navigate('/login');
            }
            else{
              const res = await addPackages({},'',dispatch);
              if(res?.data?.status==='SUCCESS'){
                setClickType("buyNow")
                setOpen(true)
              }
            }
            

            }}>Buy Now</Button1>
        </LowerContainer>
        <Button2 href={`${product.data.productUrl}`} target='_blank' >Live Preview <Launch /> </Button2>
      </LeftMainImageContainer>

      <Block8 open={open} setOpen={setOpen} clickType={clickType}/>
    </LeftContainer>
  )
}

export default LeftBar