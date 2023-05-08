import React,{useState,useRef, useEffect} from 'react'
// import DoneIcon from '@mui/icons-material/Done'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary,Autocomplete, Box, Button, TextField, Typography ,useTheme,Zoom} from '@mui/material';
import {AiOutlineCreditCard} from 'react-icons/ai'
import {BsCreditCard2Front,BsCalendar3} from 'react-icons/bs'
import {GrMoney} from 'react-icons/gr'
import {GiTakeMyMoney} from 'react-icons/gi'

import ReCAPTCHA from "react-google-recaptcha"
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/userRedux';
import { cartValue, removeItem, updateCheck } from '../../../redux/cartRedux';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { addOrderItem, orderValue } from '../../../redux/orderRedux';
import { createOrder, deleteCart, orderListProduct, updateOrderProduct } from '../../../redux/apiCalls';

export default function Block4(props) {
    const theme = useTheme();
    const [captchaToken, setCaptchaToken] = useState(null);
    // const [click, setClick] = useState(0);
    const captchaRef = useRef(null);
    const user = useSelector(selectUser)
    const cart = useSelector(cartValue)
    const order = useSelector(orderValue)
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addon = useSelector((state)=>state.addon)

    // useEffect(() => {
    //   async function fetchdata(){
    //       if(click){
    //       let query = {"userId":`${user.currentUser?.data?.id}`,"isDeleted":false}
    //       let sort = {"name":1}
    //       const resUpdate = await updateOrderProduct(order.orderId,order.productList);
    //       const resGet = await orderListProduct(query,sort,dispatch);

    //       if(resUpdate.data?resUpdate.data.status==='SUCCESS':false && resGet.data?resGet.data.status==='SUCCESS':false){
    //         navigate('/orders');
    //         enqueueSnackbar('Order Confirmed successfully', {
    //           variant: 'success',
    //           anchorOrigin: {
    //             vertical: 'top',
    //             horizontal: 'center'
    //           },
    //           TransitionComponent: Zoom
    //           });
    //       }
    //       else{
    //         enqueueSnackbar('Some Error Occured', {
    //           variant: 'error',
    //           anchorOrigin: {
    //             vertical: 'top',
    //             horizontal: 'center'
    //           },
    //           TransitionComponent: Zoom
    //           });
    //       }
    //     }
    //   }
    //   fetchdata();
    //   setClick(0);
    // }, [click]) // eslint-disable-line react-hooks/exhaustive-deps

    const verify = () =>{
        captchaRef.current.getResponse().then(res => {
            setCaptchaToken(res)
        })

    }

  const cashOnDelivery = async ()=>{
    let data =  {
      "userId":`${user.currentUser?.data?.id}`,
      "products":[],
      "address":{
        "locality" : `${user.currentUser?.data?.address[props.addressIndex]?.locality}`,
        "city" : `${user.currentUser?.data?.address[props.addressIndex]?.city}`,
        "state" : `${user.currentUser?.data?.address[props.addressIndex]?.state}`,
        "country" : `${user.currentUser?.data?.address[props.addressIndex]?.country}`,
        "zipcode" : user.currentUser?.data?.address[props.addressIndex]?.zipcode
      },
    }

    const add = [];
    cart.products?.data?.data[cart.products?.data?.data?.length-1]?.products[0].addonId.map((item)=>{
          add.push(item.id)
      })

        data.products.push({
          "productId": `${cart.products?.data?.data[cart.products?.data?.data?.length-1]?.products[0].productId.id}`,
          "qty": `${cart.products?.data?.data[cart.products?.data?.data?.length-1]?.products[0].qty}`,
          "packageId":`${cart.products?.data?.data[cart.products?.data?.data?.length-1]?.products[0].packageId.id}`,
          "addonId":add,
          "status": "upcoming",
          "paymentStatus": "pending",
          "orderStatus":{
              "orderConfirm":{
               "isConfirmed":true,
               "date":new Date()
              },
              "shipped":{
               "isConfirmed":false,
              },
              "outForDelivery":{
               "isConfirmed":false,
              },
              "delivered":{
               "isConfirmed":false,
              },
              "cancel":{
               "isConfirmed":false,
              },
              "refunded":{
               "isConfirmed":false,
              } 
          }
        })

      if(user.currentUser===null){
          navigate('/login');
      }
      else{
      const res = await createOrder(data,dispatch);
      let query = {"userId":`${user.currentUser?.data?.id}`,"isDeleted":false}
      let sort = {"name":1}
      const resGet = await orderListProduct(query,sort,dispatch);
      if(res.data?res.data.status==='SUCCESS':false && resGet.data?resGet.data.status==='SUCCESS':false){
        dispatch(removeItem(cart.products?.data?.data?.length-1));
        await deleteCart(cart.products?.data?.data[cart.products?.data?.data?.length-1].id);
        navigate('/orders');
        dispatch(updateCheck(false))
        enqueueSnackbar('Order Placed  Successfully', {
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

  return (
    <Box ref={props.ref} sx={{marginBottom:'100px',padding:'0 10px',boxShadow:`${theme.colors.shadows.cardSm}`,background:`${theme.colors.alpha.white[100]}`,}}>
        <Box sx={{height:'50px',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 20px',
        borderBottom:`1px solid ${theme.colors.alpha.black[10]}`,
        }}>
        <Box sx={{display:'flex',gap:'20px',alignItems:'center'}}>
            <Box sx={{width:'20px',height:'20px', textAlign:'center',background:`${theme.colors.alpha.black[10]}`}}>4</Box>
            <Typography sx={{fontSize:'20px',fontWeight:500}}>Payment Method</Typography>
            {/* <DoneIcon sx={{color:`${theme.colors.success.dark}`}} fontSize='small'/> */}
        </Box>
    </Box>
    <Box sx={{display:`${props.activeStep}`==='2'?'block':'none'}}>
        <Accordion TransitionProps={{timeout:600}} sx={{borderBottom:`1px solid ${theme.colors.alpha.black[10]}`,}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <AiOutlineCreditCard style={{fontSize:'28px'}} />
          <Typography sx={{marginLeft:'20px',textAlign:'center',fontSize:'17px',fontWeight:400}} >Credit Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box>
                    <TextField sx={{width:{md:'15vw',sm:'30vw',xs:'30vw'}}} required placeholder='Card Number*' variant='outlined'/>
                </Box>
                <Box sx={{display:'flex'}}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={month}
                  sx={{ width: {md:'12vw',sm:'20vw',xs:'20vw'} }}
                  renderInput={(params) => <TextField {...params} placeholder='Expiry Month' />}
                />
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={year}
                  sx={{ width: {md:'12vw',sm:'20vw',xs:'25vw'}}}
                  renderInput={(params) => <TextField {...params} placeholder='Expiry Year' />}
                />
                </Box>
            </Box>
            <Box sx={{marginTop:'20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box> <TextField sx={{width:{md:'15vw',sm:'30vw',xs:'30vw'}}} placeholder='Name on Card'/> </Box>
                <Box sx={{display:'flex',gap:{md:'40px',xs:'10px'}}}> 
                    <TextField sx={{width:{md:'10vw',sm:'15vw',xs:'15vw'}}} placeholder='CVV'/>
                    <Button sx={{background:`${theme.colors.gradients.pink2}`,width:{md:'10vw',sm:'17vw',xs:'19vw'}}} variant='contained'>Pay Now</Button>
                </Box>
                
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

        <Accordion TransitionProps={{timeout:600}} sx={{borderBottom:`1px solid ${theme.colors.alpha.black[10]}`}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <BsCreditCard2Front style={{fontSize:'28px'}} />
          <Typography sx={{marginLeft:'20px',textAlign:'center',fontSize:'17px',fontWeight:400}}>Debit Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box>
                    <TextField sx={{width:{md:'15vw',sm:'30vw',xs:'30vw'}}} required placeholder='Card Number*' variant='outlined'/>
                </Box>
                <Box sx={{display:'flex'}}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={month}
                  sx={{ width: {md:'12vw',sm:'20vw',xs:'20vw'} }}
                  renderInput={(params) => <TextField {...params} placeholder='Expiry Month' />}
                />
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={year}
                  sx={{ width: {md:'12vw',sm:'20vw',xs:'25vw'}}}
                  renderInput={(params) => <TextField {...params} placeholder='Expiry Year' />}
                />
                </Box>
            </Box>
            <Box sx={{marginTop:'20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box> <TextField sx={{width:{md:'15vw',sm:'30vw',xs:'30vw'}}} placeholder='Name on Card'/> </Box>
                <Box sx={{display:'flex',gap:{md:'40px',xs:'10px'}}}> 
                    <TextField sx={{width:{md:'10vw',sm:'15vw',xs:'15vw'}}} placeholder='CVV'/>
                    <Button sx={{background:`${theme.colors.gradients.pink2}`,width:{md:'10vw',sm:'17vw',xs:'19vw'}}} variant='contained'>Pay Now</Button>
                </Box>
                
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

        <Accordion TransitionProps={{timeout:600}} sx={{borderBottom:`1px solid ${theme.colors.alpha.black[10]}`}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <BsCalendar3 style={{fontSize:'28px'}}/>
          <Typography sx={{marginLeft:'20px',textAlign:'center',fontSize:'17px',fontWeight:400}}>EMI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            EMI Not Available
          </Typography>
        </AccordionDetails>
      </Accordion>
      
        <Accordion TransitionProps={{timeout:600}} sx={{borderBottom:`1px solid ${theme.colors.alpha.black[10]}`}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <img style={{marginTop:'-8px',width:'40px',height:'40px',objectFit:'cover'}} src='/images/checkout/upi-icon.png' alt='upi icon'/>
          <Typography sx={{marginLeft:'10px',textAlign:'center',fontSize:'17px',fontWeight:400}}>UPI ID</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <Typography>All popular UPI Apps supported</Typography>
                <Box sx={{display:{sm:'flex',xs:'block'},justifyContent:'space-between',alignItems:'center'}}>
                    <Box sx={{border:`1px solid ${theme.colors.alpha.black[30]}`,width:'300px',display:'flex',      justifyContent:'space-between',alignItems:'center'}}>
                      <TextField required placeholder='Enter Your UPI ID*' sx={{ "& fieldset": { border:     'none' }, '& .MuiInputBase-input': {
                          padding: "8px",
                      },}} />
                      <Button disabled variant='contained'>Verify</Button>
                    </Box>
                    <Button sx={{marginTop:{sm:'0',xs:'10px'},background:`${theme.colors.gradients.pink2}`,width:{md:'10vw',sm:'17vw',xs:'100px'}}} variant='contained'>Pay Now</Button>
                </Box>
                <Typography>We will save your UPI address for a faster checkout. To remove your details, visit my account</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      
        <Accordion TransitionProps={{timeout:600}} sx={{borderBottom:`1px solid ${theme.colors.alpha.black[10]}`}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <GrMoney style={{fontSize:'28px'}}/>
          <Typography sx={{marginLeft:'20px',textAlign:'center',fontSize:'17px',fontWeight:400}}>Netbanking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
        <Accordion TransitionProps={{timeout:600}} sx={{borderBottom:`1px solid ${theme.colors.alpha.black[10]}`}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <GiTakeMyMoney style={{fontSize:'28px'}}/>
          <Typography sx={{marginLeft:'20px',textAlign:'center',fontSize:'17px',fontWeight:400}}>Cash On Delivery</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box>
            <Box sx={{display:{sm:'flex',xs:'block'},justifyContent:'space-between',alignItems:'center'}}>
              <ReCAPTCHA ref={captchaRef} onVerify={verify} sitekey="Your client site key" />
              <Button onClick={cashOnDelivery} sx={{marginTop:{sm:'0',xs:'10px'},background:`${theme.colors.gradients.pink2}`,width:   {md:'10vw',sm:'17vw',xs:'100px'}}} variant='contained'>Pay Now</Button>
            </Box>
            <Typography sx={{marginTop:'20px'}}>Pay with Cash when your order is delivered</Typography>
        </Box>
        </AccordionDetails>
      </Accordion>
      </Box>
    </Box>
  )
}

const month = [
    {label:'jan'},
    {label:'feb'},
    {label:'mar'},
    {label:'apr'},
    {label:'may'},
    {label:'jun'},
    {label:'jul'},
    {label:'aug'},
    {label:'sep'},
    {label:'oct'},
    {label:'nov'},
    {label:'dec'},
]
const year = [
    {label:'2023'},
    {label:'2024'},
    {label:'2025'},
    {label:'2026'},
    {label:'2027'},
    {label:'2028'},
    {label:'2029'},
    {label:'2030'},
    {label:'2031'},
    {label:'2032'},
    {label:'2033'},
    {label:'2034'},
]
