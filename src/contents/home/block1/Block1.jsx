import React from 'react'
import Block from './slider/Block'
import { Box } from '@mui/material'

function Block1() {
  return (
    <>
        <Box sx={{display:'flex',justifyContent: 'space-between',marginTop:'120px',padding:'22px'}}>
            <Box sx={{width:'40vw'}}> <Block/> </Box>
            <Box sx={{width:'13vw',textAlign:'center',fontSize:'20px',fontWeight:400}}> <img alt='Our Engineer' style={{width:'100%',height:'220px',borderRadius: '19px',border: '1px solid #000000',objectFit:'cover'}} src="/images/category/carousel/engineer.jpg"/> Our engineers</Box>

            <Box sx={{width:'13vw',textAlign:'center',fontSize:'20px',fontWeight:400}}> <img alt='Our Engineer' style={{width:'100%',height:'220px',borderRadius: '19px',border: '1px solid #000000',objectFit:'cover'}} src="/images/category/carousel/engineer.jpg"/> Our business partners</Box>

            <Box sx={{width:'13vw',textAlign:'center',fontSize:'20px',fontWeight:400}}> <img alt='Our Engineer' style={{width:'100%',height:'220px',borderRadius: '19px',border: '1px solid #000000',objectFit:'cover'}} src="/images/category/carousel/engineer.jpg"/> Our workers</Box>
        </Box>
    </>
  )
}

export default Block1