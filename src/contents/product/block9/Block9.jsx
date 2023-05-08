import { Avatar, Box, Grid, Paper, Typography, styled } from '@mui/material'
import React from 'react'
import { technologyUsed } from '../../../constants/technologyUsed';
const Container = styled(Box)(({theme})=>({
width:"100%",
height:"auto",
background:"#fff",
padding:"40px 100px",
display:"flex", justifyContent:"center",
alignItems:"center",
flexDirection:"column",
[theme.breakpoints.down('md')]: {
  padding:"50px 20px 50px 20px"

  },
  [theme.breakpoints.down('sm')]: {
    padding:"50px 20px 50px 20px"
        
        },
}))
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Block9 = () => {
  return (
    <Container>
        <Typography variant='h2' sx={{fontFamily:"Roboto", fontSize:{md:"40px", sm:"32px", xs:"28px"}, fontWeight:"600", marginBottom:"40px", color:"#1D2A3B"}} >Technology Used</Typography>
       <Grid  spacing={2} container >
        {technologyUsed.map((data)=>(

            <Grid item xs={6} md={2.4}>
    <Item>
        <Box sx={{display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column" }} >
            <Avatar src={data.image} sx={{width:"150px", height:"150px", borderRadius:"0px!important", objectFit:"contain!important", "&:hover":{transform:"scale(1.03px)", transition:"all 0.4s linear alternate"}}} ></Avatar>
            <Typography variant='h4' sx={{fontFamily:"Roboto", fontSize:"16px", fontWeight:"600"}} >{data.name}</Typography>
        </Box>
    </Item>
  </Grid>
      ))}
 
</Grid>
    
    </Container>
  )
}

export default Block9