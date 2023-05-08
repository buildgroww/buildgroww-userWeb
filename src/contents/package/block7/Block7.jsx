import { Box, Grid, Paper, Typography, styled } from '@mui/material'
import React from 'react'
import { services } from '../../../constants/package/Services';
const Container = styled(Box)(({theme})=>({
    padding:"40px 100px",
   background:"#fff",
   [theme.breakpoints.down('md')]: {
    padding:"50px 20px 50px 20px"
  
    },
    [theme.breakpoints.down('sm')]: {
      padding:"50px 20px 50px 20px"
          
          
          },
}))
const Paragraph = styled(Typography)(({theme})=>({
fontFamily:"Roboto"
}))
const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
const Block7 = () => {
  return (
    <>
    <Container>
        <Paragraph sx={{fontSize:{md:"40px", sm:"32px", xs:"28px"}, fontWeight:"600",marginBottom:"20px", textAlign:{sm:"left", xs:"center"} }} >All in One Platform</Paragraph>
        <Paragraph variant='body1' sx={{fontSize:"18px",fontWeight:"400", color:"#647087", lineHeight:"24px", marginBottom:"40px" }} >With our all-in-one platform, you can focus on growing your business while we take care of your digital needs. Our platform is designed to be user-friendly and requires no technical knowledge. You can access all our solutions from a single platform, making it easy to manage your online presence.</Paragraph>
       <Grid spacing={2} container >
        {services.map((item)=>(
            <Grid item xs={12} sm={6} md={4}>
        <Item>
        <Box sx={{display:"flex",justifyContent:"center", flexDirection:"column" }} >   
            <Paragraph variant='h4' sx={{fontSize:"20px", fontWeight:"500", color:"#333",marginBottom:"8px"}} >{item.head}</Paragraph>
            <Paragraph variant='body1' sx={{fontSize:"16px", fontWeight:"400"}} >{item.para}</Paragraph>   
        </Box>
    </Item>
  </Grid>
    ))}
  
</Grid>
    </Container>
    </>
  )
}

export default Block7