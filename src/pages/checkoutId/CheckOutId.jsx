import { Box, Stepper, Step, StepLabel } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Block1 from "../../contents/checkoutId/block1/Block1";
import Block2 from "../../contents/checkoutId/block2/Block2";
import Block3 from "../../contents/checkoutId/block3/Block3";
import Block4 from "../../contents/checkoutId/block4/Block4";
import BlockRight from "../../contents/checkoutId/blockRight/BlockRight";
import Navbar from "../../contents/checkoutId/navbar/Navbar";
import { deleteCart } from "../../redux/apiCalls";
import { cartValue, removeItem, updateCheck } from "../../redux/cartRedux";
import { publicRequest } from "../../requestMethods";

export default function CheckOutId() {
  const dispatch = useDispatch();
  const cart = useSelector(cartValue)
  const [activeStep, setActiveStep] = useState(0);
  const [addressIndex, setAddressIndex] = useState(0);
  const [click, setClick] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    window.onpopstate = async(e) => {
      dispatch(updateCheck(false))
      dispatch(removeItem(cart.products?.data?.data?.length-1));
      const resUpdate = await deleteCart(cart.products?.data?.data[cart.products?.data?.data?.length-1].id);
    };
  }, [])

  useEffect(() => {
    if(click){
      ref.current?.scrollIntoView({behavior:'smooth'});
    }
      
  }, [click])

  // const productId = location.pathname.split("/")[2];
  // const packageId = location.pathname.split("/")[3];

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       console.log(1)
  //       const res = await publicRequest.get(`/product/get/${productId}`);
  //       console.log(res)
  //       const resp = await publicRequest.get(`/package/get/${packageId}`);
  //       console.log(resp)
  //       const data = await res.data;
  //       const datap = await resp.data;
  //       setProduct(data);
  //       setPack(datap);
  //     } catch (err) {
  //       console.log(2)
  //       console.log(err);
  //       console.log("some error occured");
  //     }
  //   };
  //   // console.log(product)
  //   getProduct();
  //   console.log(3)
  //   // eslint-disable-next-line
  // }, []);

  return (
    <Box sx={{position:'relative'}}>
        <Navbar/>
        <Box sx={{display:'flex',flexDirection:{md:'row',xs:'column'},width:'100%',marginTop:'80px'}}>
            <Box sx={{display:'flex',flexDirection:'column',gap:'20px',width:{md:'50%',xs:'90%'},margin:{md:'0 0 0 150px',sm:'0 50px',xs:'0 20px'}}}>
            <Box sx={{display:{sm:'none',xs:'block'} }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              <Step>
                <StepLabel>Address</StepLabel>
              </Step>
              <Step>
                <StepLabel>Order Summary</StepLabel>
              </Step>
              <Step>
                <StepLabel>Payment</StepLabel>
              </Step>
            </Stepper>
            </Box>
                <Block1/>
                <Block2 setAddressIndex={setAddressIndex} setActiveStep={setActiveStep}/>
                <Block3 activeStep={activeStep} setActiveStep={setActiveStep} setClick={setClick}/>
                <div ref={ref}>
                  <Block4 addressIndex={addressIndex}  activeStep={activeStep} setActiveStep={setActiveStep}/>
                </div>
            </Box>
            <Box sx={{display:{sm:'block',xs:'none'} ,margin:{md:'0',sm:'0 50px',xs:'0 20px'}}}>
                <BlockRight/>
            </Box>
            
        </Box>
    </Box>
  );
}
