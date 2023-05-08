import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const Icons = styled(Box)(({theme})=>({
    width:'104px',
    height:'101px',
    border:'1px solid #000000',
    borderRadius:'19px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}))

const IconsContainer = styled(Box)(({theme})=>({
    display:'grid',
    textAlign:'center',
    gridTemplateColumns:'auto auto auto auto auto auto auto auto',
    gridRowGap:'20px',
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
    } ,
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns:'auto auto auto',
    } 

}))

function Block2() {
  return (
    <Box sx={{width:'100%',padding:'0 22px'}}>
        <Box sx={{border:'1px solid rgba(0, 0, 0, 0.42)',borderRadius:'40px',padding:'20px 36px'}}>
            <Box sx={{}}><Typography sx={{fontSize:'36px',fontWeight:300,fontFamily:'Roboto'}}>Before Construction</Typography></Box>
            <IconsContainer>
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

export default Block2