import { Box, styled,useTheme } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {GrUserSettings} from 'react-icons/gr'
import {FaRegHeart,FaAddressBook} from 'react-icons/fa'
import {RiCoupon2Line} from 'react-icons/ri'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BsHeadset} from 'react-icons/bs'
import {RiLogoutCircleLine} from 'react-icons/ri'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import { useDispatch } from 'react-redux'
import { logOut } from '../../../redux/userRedux'
import { addProduct } from '../../../redux/cartRedux'
import { clearOrders } from '../../../redux/orderRedux'
import Cookies from 'js-cookie'

const InnerBox = styled(Link)(({theme})=>({
    // color: theme.colors.alpha.black[100],
    display:'flex',
    gap:'15px',
    textDecoration:'none',
    alignItems:'center',
    textAlign:'center',
    fontSize:'15px',
    cursor:'pointer',
    [theme.breakpoints.down('md')]:{
        flexDirection:'column',
        cursor:'none',
        fontSize:'14px',
        minWidth:'60px',
        height:'80px'
    },
    [theme.breakpoints.down('sm')]:{
        fontSize:'12px',
        gap:'5px',
        width:'50px',
        height:"80px"
    },
}))
const AnchorTag = styled('a')(({theme})=>({
    // color: theme.colors.alpha.black[100],
    display:'flex',
    gap:'15px',
    textDecoration:'none',
    alignItems:'center',
    textAlign:'center',
    fontSize:'15px',
    cursor:'pointer',
    [theme.breakpoints.down('md')]:{
        flexDirection:'column',
        cursor:'none',
        fontSize:'14px',
        minWidth:'60px',
        height:'80px'
    },
    [theme.breakpoints.down('sm')]:{
        fontSize:'12px',
        gap:'5px',
        width:'50px',
        height:"80px"
    },
}))

export default function BlockLeft() {
    const theme = useTheme();
    const location = window.location.pathname;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        // logout();
        dispatch(logOut());
    Cookies.remove('authCookie');
    localStorage.clear();
    dispatch(addProduct({}));
    dispatch(clearOrders());
    navigate("/")
    window.location.reload();
        
      }
  return (
    <Box sx={{width:{md:'20%',sm:'100%'},marginBottom:{md:'0',xs:'20px'},minWidth:'227px',height:{md:'460px',sm:'100px',xs:'200px'},background:`${theme.colors.alpha.white[100]}`,display:{sm:'flex',xs:'grid'},gridAutoFlow:'row',gridTemplateColumns:'auto auto auto auto',gridTemplateRows:'auto auto' ,flexDirection:{md:'column',xs:'row'},gap:{md:'40px',sm:'5px',xs:'0'},
    justifyContent:{md:'normal',xs:'space-between'} ,padding:'20px',border:`1px solid ${theme.colors.alpha.black[10]}`,}}>
        <InnerBox to={'/my-account/profile'} style={{color:`${location}`==='/my-account/profile'? `${theme.colors.success.dark}`:`${theme.colors.alpha.black[100]}`}}>
            <GrUserSettings style={{fontSize:"25px"}}/>
             Profile
             <ArrowLeftOutlinedIcon sx={{display:{md:`${location}`==='/my-account/profile'?'block':'none',xs:'none'}}}/>
        </InnerBox>
        <InnerBox to={'/my-account/address'} style={{color:`${location}`==='/my-account/address'? `${theme.colors.success.dark}`:`${theme.colors.alpha.black[100]}`}}>
            <FaAddressBook style={{fontSize:"25px"}}/>
             Address
             <ArrowLeftOutlinedIcon sx={{display:{md:`${location}`==='/my-account/address'?'block':'none',xs:'none'}}}/>
        </InnerBox>
        <InnerBox to={'/my-account/wishlist'}>
            <FaRegHeart style={{fontSize:"25px"}}/>
            My Wishlist
            <ArrowLeftOutlinedIcon sx={{display:{md:`${location}`==='/my-account/wishlist'?'block':'none',xs:'none'}}}/>
        </InnerBox>
        <InnerBox to={'/my-account/coupons'}>
            <RiCoupon2Line style={{fontSize:"25px"}}/>
            Coupons
            <ArrowLeftOutlinedIcon sx={{display:{md:`${location}`==='/my-account/coupons'?'block':'none',xs:'none'}}}/>
        </InnerBox>
        <InnerBox to={'/my-account/notification'}>
            <IoMdNotificationsOutline style={{fontSize:"25px"}}/>
            Manage Notifications
            <ArrowLeftOutlinedIcon sx={{display:{md:`${location}`==='/my-account/notifications'?'block':'none',xs:'none'}}}/>
        </InnerBox>
        <AnchorTag href={'https://contact.techpyro.com/contact'} target='_blank' >
            <BsHeadset style={{fontSize:"25px"}}/>
            Help Center
            <ArrowLeftOutlinedIcon sx={{display:{md:`${location}`==='/my-account/help'?'block':'none',xs:'none'}}}/>
        </AnchorTag>
        <InnerBox onClick={handleLogout} >
            <RiLogoutCircleLine style={{fontSize:"25px"}}/>
            Log out
        </InnerBox>
    </Box>
  )
}
