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
    List,
    ListItem,
    ListItemText,
    useMediaQuery
} from "@mui/material";

import { Menu,} from '@mui/icons-material';

import WestIcon from '@mui/icons-material/West';
import Siderbar from '../sideBar/Siderbar';


import LocationOnIcon from '@mui/icons-material/LocationOn';




import Signup from '../../../pages/auth/Signup';
import Login from '../../../pages/auth/Login';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

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

const SearchList = styled(List)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      width: "98vw",
    },
  }));

  const StyledListItem = styled(ListItem)`
    padding: 2px 10px;
  `;



export default function Navbar(props) {

    const [open, setOpen] = useState(false);
    const [drawer,setDrawer] = useState(false);
    const [login,setLogin] = useState(false);
    const [res,setRes] = useState({});
    const [on,setOn] = useState(false);
    // const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();
    const [loca,setLoca] = useState(null);
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

    useEffect(() => {
        // handleCurrLocation();
      }, [])

      const handleLocationChange = async (e)=>{
        // try {
        //     const data = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${e.target.value}&key=AIzaSyCKGZHeJAtVP9Poo7O8SGbf1KdooaMwbhE`)
        //     const location = await data.json();
        //     console.log(location);
        //     if(location.status==='OK'){
        //         setLoca(location.predictions)
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
           
      }
  
      const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
      <NavBar  sx={{paddingLeft: {sm:'27px',xs:'5px'},paddingRight: {sm:'27px',xs:'5px'}}} position="fixed">
        <StyleToolbar sx={{height:{sm:'95px',xs:'100px',},top:{sm:'0',xs:'-21px',},}}>
            <MenuButton sx={{display:{md:'none',xs:`${props.arrow}`}}} onClick={()=>navigate(-1)}>
                <WestIcon/>
            </MenuButton>
            <NavLeft sx={{flex:'4'}}>
                <Logo onClick={()=>{navigate('/')}} sx={{display:'flex',gap:{md:'10px',xs:'7px'},cursor:{md:'pointer',xs:'none'},marginRight:'10px'}}>
                    <Paragraph   component="div" sx={{color:'#60360F',fontSize: {md:'40px',sm:'25px',xs:'20px'},}}>
                        {props.logo.split(' ').slice(0,1)}
                    </Paragraph>
                    <Paragraph component="div" sx={{color:'#548F25',fontSize: {md:'40px',sm:'25px',xs:'20px'},}}>
                    {props.logo.split(' ').slice(1)}
                    </Paragraph>
                </Logo>

                {res && res.city && <Button sx={{display:{sm:'flex',xs:'none'},backgroundColor:'rgba(217, 217, 217, 0.39)',color:'#000000',justifyContent:'flex-start',gap:'30px',padding:'13px 15px',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',borderRadius:'21px',width:'270px',minWidth:'160px'}}><LocationOnIcon/>{res.city}</Button>}

                {/* {(!res || !res.city) && <Button sx={{display:{sm:'flex',xs:'none'}, backgroundColor:'rgba(217, 217, 217, 0.39)',color:'#000000',justifyContent:'flex-start',gap:{md:'30px',sm:'20px',xs:'15px'},padding:'13px 15px',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',borderRadius:'21px',width:{md:'270px',sm:'230px',xs:'100px'},minWidth:'150px'}}><LocationOnIcon/>Haridwar</Button>} */}

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
                        background: 'rgba(217, 217, 217, 0.39)',
                        "& fieldset": { border:'none' },
                        boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius:'21px',
                        width:{md:'270px',sm:'230px',xs:'130px'},
                        padding:{md:'7px 15px',sm:'4px 10px',xs:'0px 0'},
                        position:'relative'
                      }}
                      onChange={handleLocationChange}
                      variant="outlined"
                      size="small"
                />}

                {loca && <SearchList
          color="secondary"
          sx={{
              width:'70%',
            display: 'block',
            flexDirection: "column",
            marginTop: "54px",
            bgcolor: "#fff",
            position: "absolute",
            left: "0",
            right: "0",
            zIndex: "100",
            borderColor:'#3E96DF',
            borderRadius:'21px'
          }}
          component="nav"
          aria-label="mailbox folders"
        //   ref={catMenu}
        >
          {loca && loca.map((item, index) => (
                <StyledListItem
                  key={index}
                  sx={{ gap: "15px" }}
                  button
                >
                    <LocationOnIcon/>
                  <ListItemText primary={`${item?.description}`} />
                </StyledListItem>
              ))}
              </SearchList>}
                
                

             
                <SearchBar/>
             
            </NavLeft>
            <Box>
                <Avatar onClick={()=>{navigate('/account')}}/>
            </Box>
            <MenuButton sx={{display:{md:'none',xs:`${props.menu}`},right:'0 !important',marginLeft:'5px',marginTop:'4px'}} onClick={handleOpen}>
                <Menu/>
            </MenuButton>
            <Drawer anchor='right' open={open} onClose={handleClose} transitionDuration={{enter:400 , exit:400}} ModalProps={{sx:{position:'absolute'}}}>
                <Siderbar setOpen={setOpen} setLogin={setLogin} />
            </Drawer>
            <Box  sx={{color:'#000000',cursor:'pointer',fontSize:'18px',display:{md:'flex',xs:'none'},justifyContent:'flex-end',alignItems:'center'}}>
                {/* <HiExternalLink style={{fontSize:'30px'}}/> */}

                <Box>
                <Typography onClick={handleLoginOpen} sx={{fontSize:{md:'20px',sm:'17px',xs:'14px'}}}>Login/</Typography>


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
