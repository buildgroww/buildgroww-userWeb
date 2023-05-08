import React, { useState } from 'react'
import { ArrowForward } from '@mui/icons-material'
import { Box, Button, styled, Typography } from '@mui/material'
const Container = styled(Box)(({theme})=>({
    // padding:"0px 80px 50px 120white
    position:"relative",
    // marginTop:'30px',
    [theme.breakpoints.down('md')]: {
    //  padding:"0px 40px 50px 60px"
    
    
    },
    [theme.breakpoints.down('sm')]: {
        // padding:"0px 20px 50px 20px"
        
        
        },
}))
const Wrapper = styled(Box)(({theme})=>({
    width:"100%",
}))
const Image = styled("img")(({theme})=>({
width:"100%",
height:"100%",
objectFit:"cover",
[theme.breakpoints.down('md')]: {

    width:"100%",
    height:'500px'
    
},

[theme.breakpoints.down('sm')]: {
        width:"100%",
        height:"500px"
        },


}))
const Block1 = () => {

    // const [visible, setVisible] = useState(false)
  
    // const toggleVisible = () => {
    //   const scrolled = document.documentElement.scrollBottom;
    //   if (scrolled > 300){
    //     setVisible(true)
    //   } 
    //   else if (scrolled <= 300){
    //     setVisible(false)
    //   }
    // };
    // const handleScroll = () =>{
    //     console.log("heello")
    //     window.scrollTo({
    //         bottom: 0, 
    //         behavior: 'smooth'
    //         /* you can also use 'auto' behaviour
    //            in place of 'smooth' */
    //       });
    // }

    // window.addEventListener('scroll', toggleVisible);
  return (
    <Container>
    <Wrapper>
        <Box sx={{display:"flex", flexDirection:"column", gap:"15px", alignItems:{sm:"center", xs:"center"}, justifyContent:{sm:"center", xs:"center"}, position:"absolute", top:"0", left:"0", right:"0", bottom:"0"}} >
            <Typography variant='h2' sx={{fontSize:{md:"2.8rem", xs:"1.8rem"},fontWeight:"400", color:"white", fontFamily:"Roboto", textAlign:{sm:"left", xs:"center"}}} >Your trusted or reliable source for</Typography>
            <Typography variant="h1" sx={{fontSize:{md:"3.5rem", xs:"2.2rem"},color:"white", fontFamily:"Roboto", textAlign:{sm:"left", xs:"center"}}} >Website, App & CRM</Typography>
            <Typography variant="h1" sx={{fontSize:{md:"3.5rem", xs:'2.2rem'},color:"white", fontFamily:"Roboto", textAlign:{sm:"left", xs:"center"}}} >Maintenance</Typography>
            <Typography variant='h1' sx={{fontSize:{md:"3.5rem", xs:"2.2rem"},color:"white", fontFamily:"Roboto", textAlign:{sm:"left", xs:"center"}}} >Services and Support</Typography>
            {/* <Typography variant='h1' sx={{fontSize:{md:"3.5rem", xs:"2.2rem"},color:"white", fontFamily:"Roboto", textAlign:{sm:"left", xs:"center"}}} >Support</Typography> */}
            <Typography  sx={{fontFamily:"Roboto", textAlign:{sm:"left", xs:"center"}, color:"white"}} >We help you to keep your websites, apps and dashboards upto date an secure</Typography>
       <Button variant='contained' size="large" endIcon={<ArrowForward/>} sx={{backgroundColor:"white", color:"#1368B8", fontSize:"20px", "&:hover":{letterSpacing:"3px", transition:"all 0.3s linear", background:"white", fontFamily:"Roboto"}}} >Check Our Plans</Button>
   
        </Box>
        <Box >
            <Image src="/images/category/package/hosting.png" alt="website package contact"  />
        </Box>
    </Wrapper>

</Container>
)
}

export default Block1
