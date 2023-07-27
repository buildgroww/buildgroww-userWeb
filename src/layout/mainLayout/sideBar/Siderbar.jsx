import { Close } from '@mui/icons-material';
import { Box, Divider, Stack, Typography, styled, useTheme } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Siderbar({setOpen,setLogin,setDrawer}) {
    const theme = useTheme();
    const navigate = useNavigate();
    const handleClose = () => {
        setOpen(false)
    }
    const handleDrawer = () => {
        setDrawer(true)
    }
    const handleLoginOpen = () => {
        setLogin(true)
    }
  return (
   <Box sx={{margin:'20px'}}>
   <Box sx={{width:'300px',display:'flex',justifyContent:'space-between'}}>
    <Typography sx={{fontSize:'25px',fontWeight:'600'}}>BuildGroww</Typography>
    <Close onClick={handleClose}/>
   </Box>

   <Box>
   <Typography onClick={handleLoginOpen} sx={{fontSize:{md:'20px',sm:'17px',xs:'18px'}}}>Login/</Typography>
   <Typography onClick={handleDrawer} sx={{fontSize:{md:'20px',sm:'17px',xs:'18px'}}}>Sign Up</Typography>
   <Typography onClick={()=> navigate('/account')}  sx={{fontSize:{md:'20px',sm:'17px',xs:'18px'},}}>Account</Typography>
   </Box>
   </Box>
  )
}
