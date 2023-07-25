import React,{useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './searchbar/SearchBar'

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
    Avatar,
    TextField,
    InputAdornment,
    useMediaQuery
} from "@mui/material";

import { Menu,} from '@mui/icons-material';

import WestIcon from '@mui/icons-material/West';
import Siderbar from '../sideBar/Siderbar';


import LocationOnIcon from '@mui/icons-material/LocationOn';




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
    
        [theme.breakpoints.down('md')]: {
            flex:'1',
        } 
  }));

  const Logo = styled(Box)(({theme}) => ({
       
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
   

  
  
      const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
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
                <Logo onClick={()=>{navigate('/')}} sx={{display:'flex',gap:{md:'10px',xs:'7px'},cursor:{md:'pointer',xs:'none'},marginRight:'10px'}}>
                    <Paragraph   component="div" sx={{color:'#60360F',fontSize: {md:'40px',sm:'25px',xs:'20px'},}}>
                        {props.logo.split(' ').slice(0,1)}
                    </Paragraph>
                    <Paragraph component="div" sx={{color:'#548F25',fontSize: {md:'40px',sm:'25px',xs:'20px'},}}>
                    {props.logo.split(' ').slice(1)}
                    </Paragraph>
                </Logo>

                { <Button sx={{display:{sm:'flex',xs:'none'},backgroundColor:'rgba(217, 217, 217, 0.39)',color:'#000000',justifyContent:'flex-start',gap:'30px',padding:'13px 15px',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',borderRadius:'21px',width:'270px',minWidth:'160px'}}><LocationOnIcon/></Button>}

               

                {<TextField
                    type="text"
                    InputProps={{
                       startAdornment: <InputAdornment position="start"><LocationOnIcon
                    //    sx={{
                    //      marginTop: "6px",
                    //      marginLeft: "10px",
                    //      color: `${theme.header.background}`,
                    //    }}
                     /></InputAdornment>,
                    }}
                      placeholder="Search For Location"
                      defaultValue='Haridwar'
                    //   defaultValue={on?'':'Haridwar'}
                      sx={{
                        display:{sm:'block',xs:'none'},
                        background: 'rgba(217, 217, 217, 0.39)',
                        "& fieldset": { border:'none' },
                        boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius:'21px',
                        width:{md:'270px',sm:'230px',xs:'100px'},
                        minWidth:'150px',
                        padding:'7px 15px'
                      }}
                    //   onFocus={()=>setOn(true)}
                      variant="outlined"
                      size="small"
                />}
                
                

             
                <SearchBar/>
             
            </NavLeft>



            <Box>
                <Avatar onClick={()=>{navigate('/account')}}/>
            </Box>
            <Box  sx={{color:'#000000',cursor:'pointer',fontSize:'18px',display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                {/* <HiExternalLink style={{fontSize:'30px'}}/> */}

                <Box>
                <Typography onClick={handleLoginOpen} sx={{fontSize:{md:'20px',sm:'17px',xs:'14px'}}}>Login /</Typography>


                <Dialog open={login} fullScreen={fullScreen}>
                <Login setLogin={setLogin}/>
    
                </Dialog>

                </Box>
                <Box>
                <Typography onClick={handleDrawer} sx={{fontSize:{md:'20px',sm:'17px',xs:'14px'}}}>Sign Up</Typography>

                <Dialog open={drawer} fullScreen={fullScreen}>
                <Signup setDrawer={setDrawer}/>
    
                </Dialog>
                </Box>


            </Box>
           
        </StyleToolbar>
      </NavBar>

  )
}
