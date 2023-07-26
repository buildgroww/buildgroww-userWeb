import { Close } from '@mui/icons-material';
import { Box, Divider, Stack, Typography, styled, useTheme } from '@mui/material'
import React from 'react'

export default function Siderbar({setOpen,setLogin,setDrawer}) {
    const theme = useTheme();
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
   <Typography onClick={handleLoginOpen} sx={{fontSize:{md:'20px',sm:'17px',xs:'14px'}}}>Login/</Typography>
   <Typography onClick={handleDrawer} sx={{fontSize:{md:'20px',sm:'17px',xs:'14px'}}}>Sign Up</Typography>
   </Box>
   </Box>
  )
}
