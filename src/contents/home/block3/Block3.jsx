import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const Icons = styled(Box)(({theme})=>({
  width:'104px',
  height:'101px',
  border:'1px solid #000000',
  borderRadius:'19px',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  [theme.breakpoints.down('md')]: {
    width:'90px',
    height:'88px'
  } ,
  [theme.breakpoints.down('sm')]: {
    width:'65px',
    height:'62px',
    borderRadius:'10px'
  } ,
}))

const IconsContainer = styled(Box)(({theme})=>({
  display:'grid',
  gridTemplateColumns:'auto auto auto auto auto auto auto auto',
  gridGap:'20px',
  marginTop:'20px',
  [theme.breakpoints.down('1200')]: {
    gridTemplateColumns:'auto auto auto auto auto auto auto',
  } ,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns:'auto auto auto auto auto auto',
  } ,
  [theme.breakpoints.down('800')]: {
    gridTemplateColumns:'auto auto auto auto',
  } ,
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns:'auto auto auto',
    gridGap:'10px'
  } 
}))

function Block3() {
  return (
    <Box sx={{width:'100%',padding:'0 22px'}}>
        <Box sx={{border:'1px solid rgba(0, 0, 0, 0.42)',borderRadius:'40px',padding:{sm:'20px 0 20px 36px',xs:'20px 0 20px 20px'}}}>
            <Box sx={{}}><Typography sx={{fontSize:{md:'36px',sm:'30px',xs:'25px'},fontWeight:300,fontFamily:'Roboto'}}>During Construction</Typography></Box>
            <IconsContainer >
                <Icons> <img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/img1.png' /> </Icons>
                <Icons> <img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/img1.png' /> </Icons>
                <Icons> <img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/img1.png' /> </Icons>
                <Icons> <img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/img1.png' /> </Icons>
                <Icons> <img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/img1.png' /> </Icons>
                <Icons> <img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/img1.png' /> </Icons>
                <Icons> <img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/img1.png' /> </Icons>
                <Icons> <img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/img1.png' /> </Icons>
                <Icons> <img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/img1.png' /> </Icons>
                <Icons> <img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/img1.png' /> </Icons>
                <Icons> <img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/img1.png' /> </Icons>
                <Icons> <img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/img1.png' /> </Icons>
                <Icons> <img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/img1.png' /> </Icons>
                <Icons> <img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/img1.png' /> </Icons>
                <Icons> <img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/img1.png' /> </Icons>
                <Icons> <img style={{width:'50%',height:'50%'}} alt='before construction image' src='/images/category/home/block2/img1.png' /> </Icons>
            </IconsContainer>
        </Box>
    </Box>
  )
}

export default Block3