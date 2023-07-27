import { FavoriteBorderOutlined, KeyboardArrowLeft, NotificationsNone } from '@mui/icons-material'
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Block2 = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{display:{md:'none',sm:'none',xs:'block'}}}>
      <Box sx={{width:'100%',padding:'10px 20px',display:'flex',background:'rgba(0,0,0,0.1)',justifyContent:'space-between'}}>
        <KeyboardArrowLeft onClick={() => navigate(-1)} sx={{fontSize:'25px'}}/>
        <Typography sx={{fontSize:'20px',fontWeight:'700'}}>Engineers</Typography>
        <NotificationsNone/>
      </Box>
     <Divider/>
      <Box sx={{padding:'20px'}}>
         <Typography sx={{fontSize:'18px',display:'flex',gap:'20px'}}><FavoriteBorderOutlined/> Civil Engineers</Typography>
      </Box>
      <Divider/>

      <Box sx={{padding:'20px'}}>
         <Typography sx={{fontSize:'18px',display:'flex',gap:'20px'}}><FavoriteBorderOutlined/> Civil Engineers</Typography>
      </Box>
      <Divider/>

      <Box sx={{padding:'20px'}}>
         <Typography sx={{fontSize:'18px',display:'flex',gap:'20px'}}><FavoriteBorderOutlined/> Civil Engineers</Typography>
      </Box>
      <Divider/>

      <Box sx={{padding:'20px'}}>
         <Typography sx={{fontSize:'18px',display:'flex',gap:'20px'}}><FavoriteBorderOutlined/> Civil Engineers</Typography>
      </Box>
      <Divider/>

      <Box sx={{padding:'20px'}}>
         <Typography sx={{fontSize:'18px',display:'flex',gap:'20px'}}><FavoriteBorderOutlined/> Civil Engineers</Typography>
      </Box>
      <Divider/>

      <Box sx={{padding:'20px'}}>
         <Typography sx={{fontSize:'18px',display:'flex',gap:'20px'}}><FavoriteBorderOutlined/> Civil Engineers</Typography>
      </Box>
      <Divider/>

      <Box sx={{padding:'20px'}}>
         <Typography sx={{fontSize:'18px',display:'flex',gap:'20px'}}><FavoriteBorderOutlined/> Civil Engineers</Typography>
      </Box>
      <Divider/>
    </Box>
  )
}

export default Block2
