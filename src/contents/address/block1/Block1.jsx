import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, Menu, MenuItem, Radio, RadioGroup, Select, styled, TextField, Typography,useTheme,Zoom } from '@mui/material'
import React,{useEffect,useState} from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { updateUser } from '../../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { addressDelete, selectUser, updateLocation } from '../../../redux/userRedux';
import { useSnackbar } from 'notistack';
import Block2 from './Block2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {ImLocation} from 'react-icons/im'

const schema = Yup.object({
    // name: Yup.string().min(2).required("Please enter your Name"),
    locality: Yup.string().min(2).required("Please enter your locality"),
    // area: Yup.string().min(2).required("Please enter your area"),
    city: Yup.string().min(2).required("Please enter your city"),
    state: Yup.string().min(2).required("Please select your state"),
    country: Yup.string().min(2).required("Please select your country"),
    zipcode: Yup.number().min(100000).max(999999).required("please enter your pinCode"),
    // phone: Yup.number().min(1000000000),
    // email: Yup.string().email(),
    // addressType: Yup.string().min(2).required("Please select your addressType"),
  });


  const GridForm = styled('form')(({theme})=>({
      display:'grid',
      rowGap:'20px',
      gridTemplateColumns:'auto auto',
      [theme.breakpoints.down('sm')]:{
        gridTemplateColumns:'auto',
      }

  })) 

function Block1() {
    const [show, setShow] = useState('none');
    const [phone, setPhone] = useState('');
    const theme = useTheme();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
    

    let initialValues = {
        // name: "",
        // phone:"",
        zipcode:"",
        locality:"",
        // area:"",
        city:"",
        state:"",
        country:"",
        // email:""
        // addressType:"",
      };
      
      const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
          initialValues,
          validationSchema: schema,
          validateOnChange: true,
          validateOnBlur: false,
          //// By disabling validation onChange and onBlur formik will validate on submit.
          onSubmit: (values) => {
            console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
            //// to get rid of all the values after submitting the form
          },
        });
        
        const addAddressButton = ()=>{
            setShow('flex');
        }
        const handleCancel = ()=>{
            setShow('none');
            // values=initialValues;
        }

        const phoneChange = (e)=>{
            e.preventDefault();
            setPhone(e.target.value)
        }
        
        const updateAddress = async () => {
            let len = user.currentUser.data.address.length;
            let data = {
                "address":[]
            };
            data.address.push(...user.currentUser.data.address);
            data.address.push(values);
            if(user.currentUser.data.phone===undefined && open){
                setOpen(false)
                return;
            }
            else if(user.currentUser.data.phone===undefined && !open){
              data.phone=parseFloat(phone);
            }
            const res = await updateUser(user.currentUser.data.id,data,dispatch)
            console.log(res)
            if(res.data?.status==='SUCCESS'){
                handleCancel();
                handleClose();
                enqueueSnackbar(`${len}`===0?'Address added SuccessFully':'Address updated SuccessFully', {
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

     let checkPhone = user.currentUser?.data?.phone !==undefined ? true:phone.length===10; 
     
     const getPosition = async (latitude,longitude)=>{
      await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_CLIENTID}`).then((res)=>{
        console.log(res)
        if(res?.data?.status==='OK'){
          const locality = res.data?.results[0]?.address_components.filter((item)=>{ return item.types.includes('sublocality_level_1')})
          const city = res.data?.results[0]?.address_components.filter((item)=> item.types.includes('locality'))
          const state = res.data?.results[0]?.address_components.filter((item)=> item.types.includes('administrative_area_level_1'))
          const country = res.data?.results[0]?.address_components.filter((item)=> item.types.includes('country'))
          const pin = res.data?.results[0]?.address_components.filter((item)=> item.types.includes('postal_code'))

                values.city = city.length !==0? city[0].long_name:"";
                values.locality =  locality.length !==0 ? locality[0].long_name :"";
                values.state = state.length!==0 ? state[0].long_name:"";
                values.country = country.length!==0 ? country[0].long_name :"";
                values.zipcode = pin!==0 ? parseFloat(pin[0].long_name):"";
                setOpen(true);
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
        }).catch((e)=>{
          console.log(e)
          enqueueSnackbar('Some Error Occured '+e, {
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center'
            },
            TransitionComponent: Zoom
            });
        })
      }

     const handleCurrLocation = async ()=>{
        if(user.currentLocation===null){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition((position)=>{
                  const {latitude,longitude} = position.coords;
                  dispatch(updateLocation({latitude,longitude}))
                  getPosition(latitude,longitude)
                },(error)=>{
                  dispatch(updateLocation({code:error.code,message:error.message}))
                  console.log(error)
                })
              }
              else{
                alert('Your Browser is not supporting geoLocation, Please Update your browser');
              }
        }
        else if(user.currentLocation.latitude!=undefined&&user.currentLocation.longitude!=undefined){
            getPosition(user.currentLocation.latitude,user.currentLocation.longitude)
        }
        else{
            enqueueSnackbar(`${user.currentLocation.code}`===1?'User Blocked Loaction, Please unblocked and reload ':`${user.currentLocation.message}`, {
                variant: 'error',
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'center'
                },
                TransitionComponent: Zoom
                });
        }
     }
        
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
        <Button sx={{display:`${show}`==='flex'?'none':'flex',alignItems:'center',gap:'10px',borderRadius:'5px',padding:'5px 10px',fontSize:'16px',justifyContent:'flex-start'}} variant='outlined' onClick={addAddressButton}><AddOutlinedIcon/>Add a New Address</Button>
        <Box sx={{display:`${show}`,flexDirection:'column',gap:'10px',border:`1px solid ${theme.colors.alpha.black[30]}`,padding:'20px'}}>
            <Typography sx={{fontSize:'16px',textAlign:'center',border:`1px solid ${theme.colors.alpha.black[30]}`,padding:'10px',fontWeight:500}}>Add a New Address</Typography>
            <Button onClick={handleCurrLocation} variant='contained' sx={{maxWidth:'230px',display:'flex',alignItems:'center',gap:'5px',borderRadius:'5px',padding:{sm:'5px 10px',xs:'5px 5px'},fontSize:{sm:'16px',xs:'13px'},fontWeight:500}}><MyLocationOutlinedIcon sx={{fontSize:'20px'}}/>Use my current location</Button>
            <GridForm style={{}}>
                {/* <TextField 
                    required
                    sx={{
                        maxWidth:'280px',
                        "> div":{
                            borderRadius:'5px',
                        },
                      "> div > input": {
                        padding:'10px 10px',
                        fontSize:'15px',
                      },
                    }}
                    type="text"
                    autoComplete="off"
                    name="name"
                    id="name"
                    placeholder="Name*"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                /> */}
                <TextField 
                        required
                        sx={{
                            maxWidth:'280px',
                            "> div":{
                                borderRadius:'5px',
                            },
                          "> div > input": {
                            padding:'10px 10px',
                            fontSize:'15px',
                          },
                        }}
                        type="text"
                        autoComplete="off"
                        name="locality"
                        id="locality"
                        placeholder="Locality*"
                        value={values.locality}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <TextField 
                    required
                    sx={{
                        maxWidth:'280px',
                        "> div":{
                            borderRadius:'5px',
                        },
                      "> div > input": {
                        padding:'10px 10px',
                        fontSize:'15px',
                      },
                    }}
                    type="text"
                    autoComplete="off"
                    name="city"
                    id="city"
                    maxLength="10"
                    placeholder="City/District/Town *"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                
                {/* <TextField 
                    required
                    sx={{
                        width:{md:'600px',sm:'400px',xs:'300px'},
                        gridColumn:'1 / 3',
                        "> div":{
                            borderRadius:'5px',
                        },
                      "> div > input": {
                        padding:'10px 10px',
                        fontSize:'15px',
                        height:{md:'70px'},
                      },
                    }}
                    type="text"
                    autoComplete="off"
                    name="area"
                    id="area"
                    placeholder="Address(Area and Street)*"
                    value={values.number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                /> */}
                
                <Box sx={{ width: 200 }}>
                    <FormControl  fullWidth>
                        <InputLabel id="state">State</InputLabel>
                        <Select
                          sx={{borderRadius:'5px',
                                // "> div":{
                                //     padding:'10px 10px'
                                // }  
                            }}
                          name="state"
                          labelId="state"
                          id="state"
                          value={values.state}
                          label="State"
                          onChange={handleChange}
                        >
                          <MenuItem value={"Andaman and Nicobar Islands"}>Andaman and Nicobar Islands</MenuItem>
                          <MenuItem value={"Andhra Pradesh"}>Andhra Pradesh</MenuItem>
                          <MenuItem value={"Arunachal Pradesh"}>Arunachal Pradesh</MenuItem>
                          <MenuItem value={"Assam"}>Assam</MenuItem>
                          <MenuItem value={"Bihar"}>Bihar</MenuItem>
                          <MenuItem value={"Chandigarh"}>Chandigarh</MenuItem>
                          <MenuItem value={"Chhattisgarh"}>Chhattisgarh</MenuItem>
                          <MenuItem value={"Dadra & Nagar Haveli and Daman & Diu"}>Dadra & Nagar Haveli and Daman & Diu</MenuItem>
                          <MenuItem value={"Delhi"}>Delhi</MenuItem>
                          <MenuItem value={"Goa"}>Goa</MenuItem>
                          <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                          <MenuItem value={"Haryana"}>Haryana</MenuItem>
                          <MenuItem value={"Himachal Pradesh"}>Himachal Pradesh</MenuItem>
                          <MenuItem value={"Jammu and Kashmir"}>Jammu and Kashmir</MenuItem>
                          <MenuItem value={"Jharkhand"}>Jharkhand</MenuItem>
                          <MenuItem value={"Kerala"}>Kerala</MenuItem>
                          <MenuItem value={"Ladakh"}>Ladakh</MenuItem>
                          <MenuItem value={"Lakshadweep"}>Lakshadweep</MenuItem>
                          <MenuItem value={"Madhya Pradesh"}>Madhya Pradesh</MenuItem>
                          <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
                          <MenuItem value={"Manipur"}>Manipur</MenuItem>
                          <MenuItem value={"Meghalaya"}>Meghalaya</MenuItem>
                          <MenuItem value={"Mizoram"}>Mizoram</MenuItem>
                          <MenuItem value={"Nagaland"}>Nagaland</MenuItem>
                          <MenuItem value={"Odisha"}>Odisha</MenuItem>
                          <MenuItem value={"Puducherry"}>Puducherry</MenuItem>
                          <MenuItem value={"Punjab"}>Punjab</MenuItem>
                          <MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
                          <MenuItem value={"Sikkim"}>Sikkim</MenuItem>
                          <MenuItem value={"Tamil Nadu"}>Tamil Nadu</MenuItem>
                          <MenuItem value={"Telangana"}>Telangana</MenuItem>
                          <MenuItem value={"Tripura"}>Tripura</MenuItem>
                          <MenuItem value={"Uttar Pradesh"}>Uttar Pradesh</MenuItem>
                          <MenuItem value={"Uttarakhand"}>Uttarakhand</MenuItem>
                          <MenuItem value={"West Bengal"}>West Bengal</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ width: 200 }}>
                    <FormControl  fullWidth>
                        <InputLabel id="country">Country</InputLabel>
                        <Select
                          sx={{borderRadius:'5px',
                                // "> div":{
                                //     padding:'10px 10px'
                                // }  
                            }}
                          name="country"
                          labelId="country"
                          id="country"
                          value={values.country}
                          label="Country"
                          onChange={handleChange}
                        >
                          <MenuItem value={"India"}>India</MenuItem>
                          {/* <MenuItem value={"Andhra Pradesh"}>Andhra Pradesh</MenuItem>
                          <MenuItem value={"Arunachal Pradesh"}>Arunachal Pradesh</MenuItem>
                          <MenuItem value={"Assam"}>Assam</MenuItem>
                          <MenuItem value={"Bihar"}>Bihar</MenuItem>
                          <MenuItem value={"Chandigarh"}>Chandigarh</MenuItem>
                          <MenuItem value={"Chhattisgarh"}>Chhattisgarh</MenuItem>
                          <MenuItem value={"Dadra & Nagar Haveli and Daman & Diu"}>Dadra & Nagar Haveli and Daman & Diu</MenuItem>
                          <MenuItem value={"Delhi"}>Delhi</MenuItem>
                          <MenuItem value={"Goa"}>Goa</MenuItem>
                          <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                          <MenuItem value={"Haryana"}>Haryana</MenuItem>
                          <MenuItem value={"Himachal Pradesh"}>Himachal Pradesh</MenuItem>
                          <MenuItem value={"Jammu and Kashmir"}>Jammu and Kashmir</MenuItem>
                          <MenuItem value={"Jharkhand"}>Jharkhand</MenuItem>
                          <MenuItem value={"Kerala"}>Kerala</MenuItem>
                          <MenuItem value={"Ladakh"}>Ladakh</MenuItem>
                          <MenuItem value={"Lakshadweep"}>Lakshadweep</MenuItem>
                          <MenuItem value={"Madhya Pradesh"}>Madhya Pradesh</MenuItem>
                          <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
                          <MenuItem value={"Manipur"}>Manipur</MenuItem>
                          <MenuItem value={"Meghalaya"}>Meghalaya</MenuItem>
                          <MenuItem value={"Mizoram"}>Mizoram</MenuItem>
                          <MenuItem value={"Nagaland"}>Nagaland</MenuItem>
                          <MenuItem value={"Odisha"}>Odisha</MenuItem>
                          <MenuItem value={"Puducherry"}>Puducherry</MenuItem>
                          <MenuItem value={"Punjab"}>Punjab</MenuItem>
                          <MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
                          <MenuItem value={"Sikkim"}>Sikkim</MenuItem>
                          <MenuItem value={"Tamil Nadu"}>Tamil Nadu</MenuItem>
                          <MenuItem value={"Telangana"}>Telangana</MenuItem>
                          <MenuItem value={"Tripura"}>Tripura</MenuItem>
                          <MenuItem value={"Uttar Pradesh"}>Uttar Pradesh</MenuItem>
                          <MenuItem value={"Uttarakhand"}>Uttarakhand</MenuItem>
                          <MenuItem value={"West Bengal"}>West Bengal</MenuItem> */}
                        </Select>
                    </FormControl>
                </Box>
                <TextField 
                    required
                    sx={{
                        maxWidth:'280px',
                        "> div":{
                            borderRadius:'5px',
                        },
                      "> div > input": {
                        padding:'10px 10px',
                        fontSize:'15px',
                      },
                    }}
                    type="number"
                    autoComplete="off"
                    name="zipcode"
                    id="zipcode"
                    placeholder="Pincode*"
                    value={values.zipcode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {user.currentUser?.data?.phone === undefined ? <TextField 
                    required
                    sx={{
                        maxWidth:'280px',
                        "> div":{
                            borderRadius:'5px',
                        },
                      "> div > input": {
                        padding:'10px 10px',
                        fontSize:'15px',
                      },
                    }}
                    type="number"
                    autoComplete="off"
                    name="phone"
                    id="phone"
                    maxLength="10"
                    placeholder="Mobile Number(10-digit)*"
                    value={phone}
                    onChange={phoneChange}
                /> : null}
                {/* <TextField 
                    required
                    sx={{
                        maxWidth:'280px',
                        "> div":{
                            borderRadius:'5px',
                        },
                      "> div > input": {
                        padding:'10px 10px',
                        fontSize:'15px',
                      },
                    }}
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    placeholder={`${user.currentUser.data.email}`===undefined?'Email*':'Alternate Email'}
                    value={values.number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                /> */}
                
                {/* <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Address Type</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="addressType"
                      id="addressType"
                      onChange={handleChange}
                    >
                      <FormControlLabel value="Home" control={<Radio />} label="Home" />
                      <FormControlLabel value="Work" control={<Radio />} label="Work" />
                      <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl> */}
            </GridForm>
            <Box sx={{display:'flex',alignItems:'center',gap:'30px',justifyContent:'flex-end'}}>
                <Button variant='text' onClick={handleCancel}>Cancel</Button>
                <Button variant='contained' sx={{borderRadius:'5px',width:{md:'130px'}}} disabled={JSON.stringify(errors) === '{}' && values.locality!==''&&values.city!==''&&values.state!==''&&values.zipcode!==''&&values.country!==''&&checkPhone?false:true} onClick={updateAddress}>SAVE</Button>
            </Box>
        </Box>
        <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'30px',paddingTop:'20px'}}>
            <ImLocation style={{color:`${theme.colors.success.dark}`}}/>
        </Box>
        <DialogTitle sx={{fontSize:{md:'22px',sm:'20px',xs:'18px'}}} id="alert-dialog-title">
          {"Location Found"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{fontWeight:500}} id="alert-dialog-description">
          {values.locality}, {values.city}, {values.state} - {values.zipcode}, {values.country}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateAddress} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        <Box>
            {user.currentUser?.data?.address.map((item,index)=>(
                <Block2 item={item} key={index} index={index} />
            ))}
        </Box>
    </Box>
    </>
  )
}

export default Block1