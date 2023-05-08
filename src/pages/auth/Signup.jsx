import { Box, IconButton } from '@mui/material'
import React from 'react'
import Block from '../../contents/auth/Block'
import Block1 from '../../contents/auth/signup/block1/Block1'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  return (
    <Box sx={{width:'100%',position:'relative',height:{sm:'100vh',xs:'92vh'},backgroundImage:{sm:"url('/images/loginBackground.jpg')",xs:'none'}}}>
    <IconButton sx={{display:{sm:'none',xs:'block'},zIndex:1,position:'absolute',top:15,left:15,}} onClick={()=>navigate(-1)} >
      <WestOutlinedIcon sx={{fontSize:'35px'}}/>
    </IconButton>
    {/* <Typography sx={{textAlign:'center',fontSize:'30px',margin:'10px 0'}}>Login</Typography> */}
    <Box sx={{width:'100%',height:{sm:'100vh',xs:'92vh'},display:'flex',alignItems:{sm:'center',xs:'flex-start'},justifyContent:'center'}}>
        <Block/>
        <Block1/>
    </Box>
</Box>
  )
}

export default Signup