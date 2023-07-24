import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const Image = styled('img')(({theme})=>({
  width:'100%',
  height:'220px',
  objectFit:'cover',
  borderRadius: '19px',
  border: '1px solid #000000',
  [theme.breakpoints.down('md')]:{
    height:'180px',
  },
  [theme.breakpoints.down('sm')]:{
    height:'150px',
  },
}))

function Block5() {
  return (
    <Box sx={{width:'100%',padding:'0 22px'}}>
        <Box sx={{border:'1px solid rgba(0, 0, 0, 0.42)',borderRadius:'30px',padding:'20px 36px'}}>
            <Box sx={{}}><Typography sx={{fontSize:{md:'36px',sm:'30px',xs:'25px'},fontWeight:300,fontFamily:'Roboto'}}>Home services</Typography></Box>

            <Box sx={{display:'flex',flexDirection:{sm:'row',xs:'column'},gap:'10px',justifyContent:'space-between',alignItems:'center',marginTop:'10px'}}>

                <Box sx={{width:{md:'317px',xs:'100%'},textAlign:'center',fontSize:'20px',fontWeight:400}}> <Image alt='Our Engineer' src="/images/category/carousel/engineer.jpg"/>Equipment rental</Box>

                <Box sx={{width:{md:'317px',xs:'100%'},textAlign:'center',fontSize:'20px',fontWeight:400}}> <Image alt='Our Engineer'  src="/images/category/carousel/engineer.jpg"/>Project management</Box>

                <Box sx={{width:{md:'317px',xs:'100%'},textAlign:'center',fontSize:'20px',fontWeight:400}}> <Image alt='Our Engineer'  src="/images/category/carousel/engineer.jpg"/>Site preparation</Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Block5