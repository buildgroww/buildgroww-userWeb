import React,{useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './searchbar/SearchBar'
import NavButton from './navButton/NavButton'
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    styled,
    Badge,
    Drawer,
    IconButton,
    useTheme,
    Button,
    Zoom
} from "@mui/material";

import { ShoppingCart, Menu,} from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Phone';
import WestIcon from '@mui/icons-material/West';
import Siderbar from '../sideBar/Siderbar';
import { useDispatch, useSelector } from 'react-redux';
import { cartValue } from '../../../redux/cartRedux';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOffIcon from '@mui/icons-material/LocationOff';
import { useSnackbar } from 'notistack';
import { selectUser, updateLocation } from '../../../redux/userRedux';
import axios from 'axios';
import {HiExternalLink} from 'react-icons/hi'

  const StyleToolbar = styled(Toolbar)(({theme}) => ({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
  }));
  
  const Cart = styled(Box)(({theme})=>({
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flex: '2',
        color: theme.header.textColor,
        [theme.breakpoints.down('md')]: {
            flex:'1',
        } 
  }));

  const Logo = styled(Box)(({theme}) => ({
        color: theme.header.textColor,
        [theme.breakpoints.down('md')]:{
            paddingBottom:'5px',
        }
}));

  const CartButton = styled(Box)`
    flex: 1;
    align-items: center;
    justify-Content: flex-end;
  `;

  const NavLeft = styled(Box)(({theme}) => ({

      flex:'4',
      display: 'flex',
      gap:'10px',
     justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        height: '50px',
    },
      [theme.breakpoints.down('md')]: {
        flex:'3',
    }
  }));

  const MenuButton = styled(IconButton)(({ theme }) => ({
    color: '#000000',
    [theme.breakpoints.down('md')]: {
        right:'12px'
    }
}));

  const NavBar = styled(AppBar)(({ theme }) => ({
    backgroundColor:  '#ffffff',
}));

const Paragraph = styled(Typography)(({theme})=>({
    fontFamily: 'Roboto'
}))



export default function Navbar(props) {

    const [open, setOpen] = useState(false);
    const user = useSelector(selectUser);
    const [res,setRes] = useState({});
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();
    const handleOpen = ()=>{
        setOpen(true);
    };

    const handleClose = ()=>{
        setOpen(false);
    }

    const navigate = useNavigate();
    const theme = useTheme();
    const cartVal = useSelector(cartValue);

    useEffect(() => {
        // handleCurrLocation();
      }, [])
  
    //   const getPosition = async (latitude,longitude)=>{
    //     await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_CLIENTID}`).then((res)=>{
    //       console.log(res)
    //       if(res?.data?.status==='OK'){
    //         const locality = res.data?.results[0]?.address_components.filter((item)=>{ return item.types.includes('sublocality_level_1')})
    //         const city = res.data?.results[0]?.address_components.filter((item)=> item.types.includes('locality'))
    //         const state = res.data?.results[0]?.address_components.filter((item)=> item.types.includes('administrative_area_level_1'))
    //         const country = res.data?.results[0]?.address_components.filter((item)=> item.types.includes('country'))
    //         const pin = res.data?.results[0]?.address_components.filter((item)=> item.types.includes('postal_code'))
    //         console.log(locality)
    //         setRes({city:city.length !==0? city[0].long_name:"",pincode:pin!==0 ? parseFloat(pin[0].long_name):"",country:country.length!==0 ? country[0].short_name :""})
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
    //     }).catch((e)=>{
    //       console.log(e)
    //       enqueueSnackbar('Some Error Occured '+e, {
    //         variant: 'error',
    //         anchorOrigin: {
    //           vertical: 'top',
    //           horizontal: 'center'
    //         },
    //         TransitionComponent: Zoom
    //         });
    //     })
    //   }
  
    //  const handleCurrLocation = async ()=>{
    //     if(user.currentLocation===null){
    //         if(navigator.geolocation){
    //             navigator.geolocation.getCurrentPosition((position)=>{
    //               const {latitude,longitude} = position.coords;
    //               dispatch(updateLocation({latitude,longitude}))
    //               getPosition(latitude,longitude)
    //             },(error)=>{
    //               dispatch(updateLocation({code:error.code,message:error.message}))
    //               console.log(error)
    //             })
    //           }
    //           else{
    //             alert('Your Browser is not supporting geoLocation, Please Update your browser');
    //           }
    //     }
    //     else if(user.currentLocation.latitude!==undefined&&user.currentLocation.longitude!==undefined){
    //         getPosition(user.currentLocation.latitude,user.currentLocation.longitude)
    //     }
    //     else{
    //         enqueueSnackbar(`${user.currentLocation.code}`===1?'User Blocked Loaction, Please unblocked and reload ':`${user.currentLocation.message}`, {
    //             variant: 'error',
    //             anchorOrigin: {
    //               vertical: 'top',
    //               horizontal: 'center'
    //             },
    //             TransitionComponent: Zoom
    //             });
    //     }
    //  }
  return (
      <NavBar  sx={{paddingLeft: '27px',paddingRight: '27px'}} position="fixed">
        <StyleToolbar sx={{height:{sm:'95px',xs:'100px',},top:{sm:'0',xs:'-21px',},}}>
            <MenuButton sx={{display:{md:'none',xs:`${props.arrow}`}}} onClick={()=>navigate(-1)}>
                <WestIcon/>
            </MenuButton>
            <MenuButton sx={{display:{md:'none',xs:`${props.menu}`}}} onClick={handleOpen}>
                <Menu/>
            </MenuButton>
            <Drawer anchor='left' open={open} onClose={handleClose} transitionDuration={{enter:400 , exit:400}} ModalProps={{sx:{position:'absolute'}}}>
                <Siderbar />
            </Drawer>
            <NavLeft sx={{flex:'4'}}>
                <Logo onClick={()=>{navigate('/')}} sx={{display:'flex',gap:'10px',cursor:{md:'pointer',xs:'none'},marginRight:'10px'}}>
                    <Paragraph   component="div" sx={{color:'#60360F',fontSize: {md:'40px',xs:'25px'},}}>
                        {props.logo.split(' ').slice(0,1)}
                    </Paragraph>
                    <Paragraph component="div" sx={{color:'#548F25',fontSize: {md:'40px',xs:'25px'},}}>
                    {props.logo.split(' ').slice(1)}
                    </Paragraph>
                </Logo>

                {res && res.city && <Button sx={{backgroundColor:'rgba(217, 217, 217, 0.39)',color:'#000000',justifyContent:'flex-start',gap:'30px',padding:'13px 15px',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',borderRadius:'21px',width:'270px',minWidth:'160px'}}><LocationOnIcon/>{res.city}</Button>}

                {user.currentLocation && user.currentLocation.code && user.currentLocation.code===1 && <Button sx={{backgroundColor:'rgba(217, 217, 217, 0.39)',color:'#000000',justifyContent:'flex-start',gap:{md:'30px',sm:'20px',xs:'10px'},padding:{md:'13px 15px'},boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',borderRadius:'21px',width:{md:'270px'},minWidth:'160px'}}><LocationOffIcon/>Location Off</Button>}
                <SearchBar/>
                {/* <Badge sx={{display:{sm:'block',md:'none'}, left:'48px'}}>
                    <ShoppingCart/>
                </Badge> */}
                {/* <NavButton/> */}
            </NavLeft>
            <Box onClick={()=> navigate('/login')} sx={{color:'#000000',cursor:'pointer',fontSize:'18px',display:'flex',gap:'10px',justifyContent:'flex-end',alignItems:'center'}}>
                <HiExternalLink style={{fontSize:'30px'}}/>
                Login / Sign up
            </Box>
            {/* <Cart sx={{flex:'2'}}>
                <Box sx={{display:{md:'flex',xs:'none'},justifyContent:'flex-start',alignItems:'center',paddingLeft:'20px',flex:'2',color:`#000000`}}>
                    <PhoneIcon/>
                    <Paragraph sx={{paddingLeft:'5px',fontSize:'20px',fontWeight:'400',color:`#000000`}}>+91-7300639790</Paragraph>
                </Box>
                <CartButton sx={{display:'flex',}}>
                    <Link to={'/cart'} style={{textDecoration:'none'}}>
                        <Badge anchorOrigin={{vertical:'top',horizontal:'right'}} badgeContent={cartVal.quantity===null?0:cartVal.quantity} color="warning" sx={{cursor: {md:'pointer',sm:'none'}}}>
                            <ShoppingCart sx={{color:`#000000`}}/>
                        </Badge>
                    </Link>
                </CartButton>
            </Cart> */}
        </StyleToolbar>
      </NavBar>

  )
}
