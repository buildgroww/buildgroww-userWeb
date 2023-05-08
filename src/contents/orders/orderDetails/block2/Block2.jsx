import {
  Box,
  Typography,
  useTheme,
  styled,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import React, { useState } from "react";
import { CurrencyRupee } from "@mui/icons-material";
import StarRateIcon from "@mui/icons-material/StarRate";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { useSelector } from "react-redux";
import { orderValue } from "../../../../redux/orderRedux";
import { selectUser } from "../../../../redux/userRedux";

const Container = styled(Box)(({ theme }) => ({
  margin: "20px 100px",
  "@media (max-width: 960px)": {
    margin: "20px 70px",
  },
  "@media (max-width: 800px)": {
    margin: "20px 20px",
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: "250px",
  height: "280px",
  objectFit: "cover",
  "@media (max-width: 960px)": {
    width: "180px",
  },
  "@media (max-width: 600px)": {
    width: "100%",
    height: "200px",
  },
}));

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 6px)",
    right: "calc(50% + 6px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));
const QontoConnectorVertical = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    height: 60,
    borderWidth: 2,
    borderRadius: 1,
    margin: "-13px 0 -15px -8px",
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height:22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
    marginLeft: -2,
  },
  "& .QontoStepIcon-circle": {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <CheckCircleOutlineIcon className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

let steps = ["order confirmed", "shipped", "out for Delivery", "Delivered"];

export default function Block2() {
  const theme = useTheme();
  const order = useSelector(orderValue);
  console.log(order)
  const user = useSelector(selectUser);

  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const confirmedDate = new Date(order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].orderStatus?.orderConfirm?.date);
  const shippedDate = new Date(order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].orderStatus?.shipped?.date);
  const outForDeliveryDate = new Date(order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].orderStatus?.outForDelivery?.date);
  const deliveredDate = new Date(order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].orderStatus?.delivered?.date);

  let activeSteps = ()=>{
      if(order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].orderStatus?.orderConfirm?.isConfirmed){
        if(order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].orderStatus?.shipped?.isConfirmed){
          if(order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].orderStatus?.outForDelivery?.isConfirmed){
            if(order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].orderStatus?.delivered?.isConfirmed){
              return 4;
            }
            else{
              return 3;
            }
          }
          else{
            return 2
          }
        }
        else{
          return 1;
        }
      }
  }

  let addonPrice=0;
  order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].addonId.map((item)=>{
      addonPrice += item.price
  }) 

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { sm: "row", xs: "column" },
        gap: "20px",
        padding: { md: "20px 30px", sm: "20px 20px", xs: "0" },
        background: `${theme.colors.alpha.white[100]}`,
        boxShadow: `${theme.colors.shadows.card}`,
      }}
    >
      <Box>
        <Image src={`${order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].productId !==undefined ? order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].productId?.productImages[0]?.path : '/images/package1.jpg'}`} alt="orders" />
      </Box>
      <Box sx={{ display: "flex", paddingBottom: { sm: "0", xs: "20px" } }}>
        <Box sx={{ display: { sm: "flex", xs: "block" } }}>
          <Box
            sx={{
              display: {md:'block',xs: "flex" },
              flexDirection: "column",
              gap:{md:0,sm:'40px',xs:0},
              paddingTop: { sm: "20px", xs: "0" },
            }}
          >
            <Box sx={{display:'flex',flexDirection:'column',gap:'10px' ,marginLeft: { sm: "0", xs: "25px" },paddingLeft:{md:'20px'} }}>
              <Typography sx={{ fontSize: { sm: "18px", xs: "16px" } }}>
                {order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].productId !==undefined ? order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].productId?.title?.shortTitle : order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].packageId?.name}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { lg: "20px", md: "18px", sm: "16px", xs: "15px" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CurrencyRupee sx={{ fontSize: "14px" }} /> {(order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].packageId?.price * order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].qty )+ addonPrice}
              </Typography>
              <Typography sx={{fontSize:'16px',fontWeight:500}}>Quantity : <span style={{color:`${theme.colors.success.dark}`}}>{order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].qty}</span></Typography>

              {order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].productId !==undefined ? <Typography sx={{fontSize:'16px',fontWeight:500}}>Package : <span style={{color:`${theme.colors.success.dark}`}}>{order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].packageId?.name}</span></Typography> : null}
            </Box>
            <Box
              sx={{
                display: { md: "flex", xs: "none" },
                alignItems: "center",
                marginTop: "40px",
              }}
            >
              <Stepper
                sx={{ background: `${theme.colors.alpha.white[100]}` }}
                alternativeLabel
                activeStep={activeSteps()}
                connector={<QontoConnector />}
              >
                {steps.map((label) => (
                  <Step sx={{":hover":{">div":{display:'block'}},cursor:'pointer'}} key={label}>
                   {(label==="order confirmed" && String(confirmedDate)!=='Invalid Date') ? <Box sx={{position:'absolute',top:-40,left:30}}>{weekday[confirmedDate.getDay()]} , {confirmedDate.getDate()}th {month[confirmedDate.getMonth()]}</Box>:null}

                   {(label==="shipped"&& String(shippedDate)!=='Invalid Date') ? <Box sx={{position:'absolute',top:-40,left:30}}>{weekday[shippedDate.getDay()]} , {shippedDate.getDate()}th {month[shippedDate.getMonth()]}</Box>:null}

                   {(label==="out for Delivery"&& String(outForDeliveryDate)!=='Invalid Date') ? <Box sx={{position:'absolute',top:-40,left:30}}>{weekday[outForDeliveryDate.getDay()]} , {outForDeliveryDate.getDate()}th {month[outForDeliveryDate.getMonth()]}</Box>:null}

                   {(label==="Delivered"&& String(deliveredDate)!=='Invalid Date')? <Box sx={{position:'absolute',top:-40,left:30}}>{weekday[deliveredDate.getDay()]} , {deliveredDate.getDate()}th {month[deliveredDate.getMonth()]}</Box>:null}

                    <StepLabel StepIconComponent={QontoStepIcon}>
                      {label}
                    </StepLabel>
                    
                    {(label==="order confirmed"&& String(confirmedDate)!=='Invalid Date')?<Box sx={{display:'none',position:'absolute',top:-40,width:'200px',background: `${theme.colors.alpha.white[100]}`,border:`1px solid ${theme.colors.alpha.black[10]}`,textAlign:'center',boxShadow:'1px 1px 1px'}}>Your Order is confirmed on {weekday[confirmedDate.getDay()]}, {confirmedDate.getDate()}th {month[confirmedDate.getMonth()]} {confirmedDate.getFullYear()}</Box>:null}

                      {(label==="shipped"&& String(shippedDate)!=='Invalid Date')?<Box sx={{display:'none',position:'absolute',top:-40,width:'200px',background: `${theme.colors.alpha.white[100]}`,border:`1px solid ${theme.colors.alpha.black[10]}`,textAlign:'center',boxShadow:'1px 1px 1px'}}>Your Order is shipped on {order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].orderStatus?.shipped?.date}</Box>:null}

                      {(label==="out for Delivery"&& String(outForDeliveryDate)!=='Invalid Date')?<Box sx={{display:'none',position:'absolute',top:-40,width:'200px',background: `${theme.colors.alpha.white[100]}`,border:`1px solid ${theme.colors.alpha.black[10]}`,textAlign:'center',boxShadow:'1px 1px 1px'}}>Your Order is out for Delivery on {order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].orderStatus?.outForDelivery?.date}</Box>:null}

                      {(label==="Delivered"&& String(deliveredDate)!=='Invalid Date')?<Box sx={{display:'none',position:'absolute',top:-40,width:'200px',background: `${theme.colors.alpha.white[100]}`,border:`1px solid ${theme.colors.alpha.black[10]}`,textAlign:'center',boxShadow:'1px 1px 1px'}}>Your product is reached on {order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].orderStatus?.delivered?.date}</Box>:null}
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Box
              sx={{
                width: "300px",
                display: { md: "none", sm: "none", xs: "flex" },
                padding: "10px 0 10px 30px",
              }}
            >
              <Stepper
                sx={{ background: `${theme.colors.alpha.white[100]}` }}
                orientation="vertical"
                activeStep={1}
                connector={<QontoConnectorVertical />}
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={QontoStepIcon}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Box
              sx={{
                display: { md: "none", sm: "block", xs: "block" },
                paddingLeft: { sm: "0", xs: "20px" },
              }}
            >
              <Link
                to={`/rateproduct/${order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].productId?.id}`} 
                style={{
                  fontSize: "14px",
                  textDecoration: "none",
                  display: "flex",
                  gap: "10px",
                  cursor:'none',
                  color: `${theme.colors.primary.dark}`,
                  fontWeight: 500,
                }}
                display={order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].productId?.id !== undefined ? "block" : "none" }
              >
                {" "}
                <StarRateIcon /> Rate and Review Product
              </Link>
              <Link
                to={"/orderdetails"}
                style={{
                  marginTop: "20px",
                  fontSize: "14px",
                  textDecoration: "none",
                  display: "flex",
                  cursor:'none',
                  gap: "10px",
                  color: `${theme.colors.primary.dark}`,
                  fontWeight: 500,
                }}
              >
                {" "}
                <HelpCenterIcon fontSize="medium" /> Need Help
              </Link>
            </Box>
          </Box>

          {/* <Box sx={{display:{md:'none',sm:'none',xs:'block'},paddingLeft:'20px'}}>
            <Link to={'/orderdetails'} style={{marginTop:'20px',fontSize:{md:'17px',xs:'14px'},textDecoration:'none',display:'flex',gap:'10px',color:`${theme.colors.primary.dark}`,fontWeight:500}}> <StarRateIcon sx={{fontSize:{md:'30px',xs:'25px'}}}/> Rate and Review Product</Link>
            <Link to={'/orderdetails'} style={{marginTop:'20px',fontSize:{md:'17px',xs:'14px'},textDecoration:'none',display:'flex',gap:'10px',color:`${theme.colors.primary.dark}`,fontWeight:500}}> <HelpCenterIcon sx={{fontSize:{md:'30px',xs:'25px'}}}/> Need Help</Link>
        </Box> */}
        </Box>
        {/* <Box sx={{display:{sm:'none',xs:'flex',},alignItems:'center',margin:'10px 20px 10px 5px'}}>
            <Slider
                orientation='vertical'
                size="small"
                disabled
                aria-labelledby="track-false-range-slider"
                getAriaValueText={marks.label}
                defaultValue={[0,33,66,100]}
                marks={marks}

                sx={{color:`${theme.colors.success.dark}`}}
    
            />
        </Box> */}
      </Box>
      <Box
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          width: "300px",
          paddingLeft: "20px",
        }}
      >
        <Link
          to={`/rateproduct/${order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].productId?.id }`} 
          style={{
            marginTop: "20px",
            fontSize: { md: "17px", xs: "14px" },
            textDecoration: "none",
            display:"flex",
            gap: "10px",
            alignItems:"center",
            color: `${theme.colors.primary.dark}`,
            fontWeight: 500,
          }}
          display={order.products.data?.data[order.clickIndex.index]?.products[order.clickIndex.l].productId?.id !== undefined ? "flex" : "none" }
        >
          {" "}
          <StarRateIcon sx={{ fontSize: { md: "30px", xs: "25px" } }} /> Rate
          and Review Product
        </Link>
        <Link
          to={"/orderdetails"}
          style={{
            marginTop: "20px",
            fontSize: { md: "17px", xs: "14px" },
            textDecoration: "none",
            display: "flex",
            gap: "10px",
            color: `${theme.colors.primary.dark}`,
            fontWeight: 500,
          }}
        >
          {" "}
          <HelpCenterIcon sx={{ fontSize: { md: "30px", xs: "25px" } }} /> Need
          Help
        </Link>
      </Box>
      <Box
        sx={{
          display: { md: "none", sm: "flex", xs: "none" },
          padding: "10px 0",
        }}
      >
        <Stepper
          sx={{ background: `${theme.colors.alpha.white[100]}` }}
          orientation="vertical"
          activeStep={1}
          connector={<QontoConnectorVertical />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Container>
  );
}
