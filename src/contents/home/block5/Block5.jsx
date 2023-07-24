import { Box, Typography } from '@mui/material'
import React from 'react'

function Block5() {
  return (
    <Box sx={{width:'100%',padding:'0 22px'}}>
        <Box sx={{border:'1px solid rgba(0, 0, 0, 0.42)',borderRadius:'30px',padding:'20px 36px'}}>
            <Box sx={{}}><Typography sx={{fontSize:'36px',fontWeight:300,fontFamily:'Roboto'}}>Home services</Typography></Box>

            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'10px'}}>

                <Box sx={{width:'317px',textAlign:'center',fontSize:'20px',fontWeight:400}}> <img alt='Our Engineer' style={{width:'100%',height:'220px',borderRadius: '19px',border: '1px solid #000000',objectFit:'cover'}} src="/images/category/carousel/engineer.jpg"/>Equipment rental</Box>

                <Box sx={{width:'317px',textAlign:'center',fontSize:'20px',fontWeight:400}}> <img alt='Our Engineer' style={{width:'100%',height:'220px',borderRadius: '19px',border: '1px solid #000000',objectFit:'cover'}} src="/images/category/carousel/engineer.jpg"/>Project management</Box>

                <Box sx={{width:'317px',textAlign:'center',fontSize:'20px',fontWeight:400}}> <img alt='Our Engineer' style={{width:'100%',height:'220px',borderRadius: '19px',border: '1px solid #000000',objectFit:'cover'}} src="/images/category/carousel/engineer.jpg"/>Site preparation</Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Block5