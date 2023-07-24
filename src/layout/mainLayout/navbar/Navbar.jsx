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
    Zoom,
    Popover,
    Dialog,
    Avatar
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
import Signup from '../../../pages/auth/Signup';
import Login from '../../../pages/auth/Login';

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
    const [drawer,setDrawer] = useState(false);
    const [login,setLogin] = useState(false);
    const user = useSelector(selectUser);
    const [res,setRes] = useState({});
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();
    const handleOpen = ()=>{
        setOpen(true);
    };

    const handleDrawer = ()=>{
        setDrawer(true);
    };
    const handleLoginOpen = ()=>{
        setLogin(true);
    };

    // const handleLoginClose = ()=>{
    //     setLogin(false);
    // };

    // const handleDrawerClose = ()=>{
    //     setDrawer(false);
    // };

    const handleClose = ()=>{
        setOpen(false);
    }

    const navigate = useNavigate();
    const theme = useTheme();
    const cartVal = useSelector(cartValue);

    useEffect(() => {
        // handleCurrLocation();
      }, [])
  

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

            <Box>
                <Avatar onClick={()=>{navigate('/account')}}/>
            </Box>
            <Box  sx={{color:'#000000',cursor:'pointer',fontSize:'18px',display:'flex',gap:'10px',justifyContent:'flex-end',alignItems:'center'}}>
                <HiExternalLink style={{fontSize:'30px'}}/>

                <Box>
                <Typography onClick={handleLoginOpen} sx={{fontSize:'20px'}}>Login /</Typography>


                <Dialog open={login}>
                <Login setLogin={setLogin}/>
    
                </Dialog>

                </Box>
                <Box>
                <Typography onClick={handleDrawer} sx={{fontSize:'20px'}}>Sign Up</Typography>

                <Dialog open={drawer}>
                <Signup setDrawer={setDrawer}/>
    
                </Dialog>
                </Box>


            </Box>
           
        </StyleToolbar>
      </NavBar>

  )
}
