
import { Box, styled, Typography } from '@mui/material'
import FavoriteOutlined from '@mui/icons-material/FavoriteOutlined';
import {IoLogoFacebook, IoLogoLinkedin, IoLogoPinterest, IoLogoYoutube} from "react-icons/io"
import {FaInstagramSquare} from "react-icons/fa"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Button = styled("button")(({theme})=>({
background:"#485769",
fontFamily:"Roboto",
fontSize:'15px',
lineHeight:"19px",
  width:"100%", 
  height:"50px",
  color:"#FFF",
  cursor:"pointer"
}))
const Container = styled(Box)(({theme})=>({
width:"100%",
background:"#172337",
padding:"70px 70px 40px 70px",


fontFamily:"Roboto",
[theme.breakpoints.down('md')]: {
 padding:"20px 20px 20px 20px"


},

}))
const Wrapper = styled(Box)(({theme})=>({
  display:"flex",
  gap:"50px",
  justifyContent:"space-between",
  paddingBottom:"40px",
  borderBottom:"1px solid #EEEEEE",
  [theme.breakpoints.down('md')]: {
   gap:"30px"
   
   },
   [theme.breakpoints.down('sm')]: {
    flexDirection:"column",
    width:"100%",

    
    },

}))

const Box1 = styled(Box)(({theme})=>({
  display:"flex",
  flexDirection:"column",
  gap:"20px",
  width:"20%",
  [theme.breakpoints.down('sm')]: {
    width:"100%",
    
    
    },

}))

const Box2 = styled(Box)(({theme})=>({
  display:"flex",
  flexDirection:"column",
  gap:"20px"
}))
const Box3 = styled(Box)(({theme})=>({
  display:"flex",
  flexDirection:"column",
  gap:"20px"
}))
const Box4 = styled(Box)(({theme})=>({
  display:"flex",
  flexDirection:"column",
  gap:"20px"
}))
const Box5 = styled(Box)(({theme})=>({
  display:"flex", 
  flexDirection:"column",
  gap:"20px"
}))
const Box6 = styled(Box)(({theme})=>({
  display:"flex",
  flexDirection:"column",
  gap:"20px"
}))
const LinkContainer = styled(Box)(({theme})=>({
  display:"flex",
  flexDirection:"column",
  gap:"15px",
  fontFamily:"Roboto"
}))

const Image = styled("img")(({theme})=>({
  width:"120px",
  height:"100px",
  [theme.breakpoints.down("sm")]:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
}))
const Footer = () => {
  // const navigate = useNavigate()
  // const handleScrollToTop = () =>{
  //       Window.scrollTo({top:0, behaviour:"smooth"})
  // };

  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <Box>
      <Button onClick={scrollToTop}  >Back To Top</Button>
       <Container>
        <Wrapper>
        <Box1>
        <Link to="/" style={{display:"flex", width:"100%"}} >  
        <Image src="/images/mainLogo/logo1.png" alt="logo" /> </Link>
          <Typography variant='body1' sx={{color:"white", textAlign:"justify"}}>Get everything digitized with us! We are a platform providing services like website, application, dashboard, UI/UX design, digital marketing, graphic designing, logo design, presentations, and content writing for stores, hotels, restaurants, hospitals, and institutes.</Typography>
          <Box sx={{color:"white", display:"flex", flexDirection:"column", gap:"8px", justifyContent:{sm:"flex-start", xs:"center"}, width:"100%" }}   >
            <Typography sx={{display:"flex", alignItems:"center", fontSize:{lg:"12px", md:"10px", sm:"8px",xs:"15px"}, justifyContent:{sm:"flex-start", xs:"center"}}} >Show some love <FavoriteOutlined sx={{fontSize:{lg:"16px", md:"12px",sm:"10px",xs:"15px"}, margin:"0px 2px", display:{md:"flex",sm:"none" }}} /> on social media </Typography>
            <Box sx={{display:"flex", gap:"10px", alignItems:"center", justifyContent:{sm:"flex-start", xs:"center"}}} >
             <a href="https://www.facebook.com/profile.php?id=100089947674592" style={{textDecoration:"none", color:"white"}} rel="noreferrer" target="_blank" > <IoLogoFacebook style={{fontSize:"35px"}} /> </a>
             <a href='https://www.instagram.com/techpyroofficial/' style={{textDecoration:"none", color:"white"}} rel="noreferrer" target="_blank" > <FaInstagramSquare style={{fontSize:"35px"}} /> </a>
             <a href='https://www.linkedin.com/company/techpyro/' style={{textDecoration:"none", color:"white"}} rel="noreferrer" target="_blank" ><IoLogoLinkedin style={{fontSize:"35px"}} /> </a>
              <a><IoLogoYoutube style={{fontSize:"35px"}} /> </a>
              <a> <IoLogoPinterest style={{fontSize:"35px"}} /></a>
            </Box>
          </Box>
        </Box1>
        <Box2>
          <Typography sx={{color:"#7C6151", fontSize:"16px", fontWeight:"500"}} > Product</Typography>

          <LinkContainer>
          <Link to="/websites" style={{color:"white", textDecoration:"none"}} >Websites</Link>
          <Link to="/apps"  style={{color:"white", textDecoration:"none"}} >Apps</Link>
          <Link to="/dashboards"  style={{color:"white", textDecoration:"none"}} >Dashboards or CRM</Link>
          <Link to="/uiux" style={{color:"white", textDecoration:"none"}} >UI/UX Designs</Link>
          <Link to="graphics"  style={{color:"white", textDecoration:"none"}} >Graphics Designing</Link>
          <Link to="logos" style={{color:"white", textDecoration:"none"}} >Logo Designing</Link>
          </LinkContainer>
        </Box2>
        <Box3>
        <Typography   sx={{color:"#7C6151", fontSize:"16px"}}  >Topics</Typography>
        <LinkContainer>
          <Link style={{color:"white", textDecoration:"none"}} >Business & Services</Link>
          <Link style={{color:"white", textDecoration:"none"}} >Education</Link>
          <Link style={{color:"white", textDecoration:"none"}} >E-commerce</Link>
          <Link style={{color:"white", textDecoration:"none"}} >Food &Restaurant</Link>
          <Link style={{color:"white", textDecoration:"none"}} >News</Link>
          <Link style={{color:"white", textDecoration:"none"}} >Blogs</Link>
          <Link style={{color:"white", textDecoration:"none"}} >Real Estate</Link>
          <Link style={{color:"white", textDecoration:"none"}} >Travel & Adventures</Link>
          <Link style={{color:"white", textDecoration:"none"}} >Booking</Link>
          <Link to="/services-maintenance" style={{color:"white", textDecoration:"none"}} >Maintenance & Management</Link>
        </LinkContainer>
        </Box3>
        <Box4>
        <Typography sx={{color:"#7C6151", fontSize:"16px"}}  >About</Typography>
        <LinkContainer>
          <a href="https://about.techpyro.com" target="_parent"  style={{color:"white", textDecoration:"none"}} >About Us</a>
          <a href="https://contact.techpyro.com/contact" target="_parent" style={{color:"white", textDecoration:"none"}} >Contact Us</a>
         
        </LinkContainer>
        </Box4>
        <Box5>
        <Typography sx={{color:"#7C6151", fontSize:"16px"}}  >Help</Typography>
        <LinkContainer>
          <Link style={{color:"white", textDecoration:"none"}} >Payments</Link>
          <Link style={{color:"white", textDecoration:"none"}} >Shipping</Link>
          <Link  style={{color:"white", textDecoration:"none"}} >Cancellation & Returns</Link>
          <Link to="/services-maintenance" style={{color:"white", textDecoration:"none"}} >FAQ</Link>
          <Link to="/help"   style={{color:"white", textDecoration:"none"}} >Customer Support</Link>
          
        </LinkContainer>
        </Box5>
        <Box6>
        <Typography sx={{color:"#7C6151", fontSize:"16px"}}  >Policy</Typography>
        <LinkContainer>
          <Link to="returnpolicy" style={{color:"white", textDecoration:"none"}} >Return Policy</Link>
          <Link to="terms" style={{color:"white", textDecoration:"none"}} >Term Of Use</Link>
          <Link to="security" style={{color:"white", textDecoration:"none"}} >Security</Link>
          <Link to="privacy" style={{color:"white", textDecoration:"none"}} >Privacy</Link>
        </LinkContainer>
        </Box6>
        
        </Wrapper>
        <Typography sx={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"10px", color:"#fff"}} >&copy; Techpyro 2023 | All right reserved.</Typography>
       </Container>
    </Box>
  )
}

export default Footer