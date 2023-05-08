import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import {TbArrowWaveRightDown} from "react-icons/tb"
const MainContainer = styled(Box)(({theme})=>({
    width:"100%",
    background:"#063992",
    color:"white",
    padding:"40px 0px",
    marginTop:"50px"
}))
const Container = styled(Box)(({theme})=>({
   
    padding:"40px 0px",
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
    gap:"50px", 
    [theme.breakpoints.down('sm')]: {
        flexDirection:"column"
        
        }
}))
const Paragraph = styled(Typography)(({theme})=>({
    fontFamily:"Roboto"
}))

const Image3 = styled("img")(({theme})=>({
    width:"100px",
    height:"100px",
    objectFit:"cover",
    filter:"contrast(0) brightness(100)",
    [theme.breakpoints.down('md')]: {
        width:"80px",
        height:'80px'
           
           }
       }))
const Block3 = () => {
  return (
    <>
    <MainContainer>

        <Paragraph variant='h2' sx={{fontSize:{md:"2.5rem", xs:"2rem"}, fontWeight:"500", textAlign:"center"}} >Websites, Apps & Dashboard Or CRM Packages</Paragraph>
    <Container>
    <Box sx={{marginTop:"40px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"5px"}}>
    <Image3 src="/images/team.png" alt='management'  />
     <Paragraph variant="h5" sx={{fontWeight:"500", fontSize:{md:"30px", xs:"20px"}}} >Team Alloted</Paragraph>
    <Paragraph variant='body1' sx={{color:"white", textAlign:"center"}} >Web Designer, Web Programmer, Graphics Designer</Paragraph> 
    </Box>
    <Box sx={{display:{md:"flex", xs:"none"}}} >
        <TbArrowWaveRightDown style={{fontSize:"70px"}} />
    </Box>

    <Box sx={{marginTop:"40px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"5px"}}>
    <Image3 src="/images/team.png" alt='management'  />
    <Paragraph variant="h5" sx={{fontWeight:"500", fontSize:{md:"30px", xs:"20px"}}} >Automated Backup</Paragraph>
    <Paragraph variant='body1' sx={{color:"white", textAlign:"center"}} >Weekly</Paragraph> 
    </Box>
    <Box sx={{display:{md:"flex", xs:"none"}}} >
        <TbArrowWaveRightDown style={{fontSize:"70px"}} />
    </Box>

    <Box sx={{marginTop:"40px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"5px"}}>
    <Image3 src="/images/open-24-hours.png" alt='management'  />
     <Paragraph variant="h5" sx={{fontWeight:"500", fontSize:{md:"30px", xs:"20px"}}} >Turn Around Time</Paragraph>
    <Paragraph variant='body1' sx={{color:"white", textAlign:"center"}} >24-48 hours</Paragraph> 
    </Box>
    </Container>

    </MainContainer>

    </>
  )
}

export default Block3