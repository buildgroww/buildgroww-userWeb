import { Box, styled, Typography } from '@mui/material'
import React from 'react'
const ChooseContainer = styled(Box)(({theme})=>({
    marginTop:"100px",
    display:"flex",
    padding:"10px 100px",
    flexDirection:"column",
    [theme.breakpoints.down('md')]: {
    padding:'10px 30px'
    
        },
        [theme.breakpoints.down('sm')]: {
            padding:'10px 10px',
            marginTop:"50px"
                
        }

        
       }))
    
    const Image1 = styled("img")(({theme})=>({
     width:"100px",
     height:"100px",
     objectFit:"cover",
     [theme.breakpoints.down('md')]: {
     width:"80px",
     height:'80px'
        
        }
    }))

const Block2 = () => {
  return (
    <ChooseContainer>
    <Box sx={{display:"flex", flexDirection:"column", gap:"10px", alignItems:"center"}} >
            <Typography variant='h2' sx={{fontSize:{md:"2.8rem", xs:"2rem"},fontWeight:"500", color:"#063992", textAlign:"center", fontFamily:"Roboto"}} >Why Choose Techpyro As Your Website, App & Dashboard Maintenance Company?</Typography>
    </Box>
    <Box sx={{display:"flex", flexWrap:"wrap", gap:{md:"40px", xs:'20px'}, marginTop:"40px", marginLeft:{md:"40px", xs:"10px"}}} >

    <Box sx={{boxShadow:" 0px 3px 5px 2px rgba(104,154,247,0.78)", width:{md:"220px", xs:"150px"}, height:{md:"220px", xs:"150px"}, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", padding:'0px 20px'}} >
        <Image1 src="/images/laptop.png" />
        <Typography variant="h6" sx={{fontFamily:"Roboto",textAlign:"center", fontSize:{md:"20px", xs:'14px'}, fontWeight:"400", }}>On Demand Website Maintenance</Typography>
    </Box>

    <Box sx={{boxShadow:" 0px 3px 5px 2px rgba(104,154,247,0.78)", width:{md:"220px", xs:"150px"}, height:{md:"220px", xs:"150px"}, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}} >
        <Image1 src="/images/software.png" />
        <Typography variant="h6" sx={{textAlign:"center",fontFamily:"Roboto", fontSize:{md:"20px", xs:'14px'}, fontWeight:"400"}} >Customized Services</Typography>
    </Box>

    <Box sx={{boxShadow:" 0px 3px 5px 2px rgba(104,154,247,0.78)",  width:{md:"220px", xs:"150px"}, height:{md:"220px", xs:"150px"}, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}} >
        <Image1 src="/images/customer-service.png" />
        <Typography variant="h6" sx={{textAlign:"center",fontFamily:"Roboto", fontSize:{md:"20px", xs:'14px'}, fontWeight:"400"}}  >Client Centric Approach</Typography>
    </Box>

    <Box sx={{boxShadow:" 0px 3px 5px 2px rgba(104,154,247,0.78)",  width:{md:"220px", xs:"150px"}, height:{md:"220px", xs:"150px"}, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        <Image1 src="/images/income.png" />
        <Typography variant="h6" sx={{textAlign:"center",fontFamily:"Roboto", fontSize:{md:"20px", xs:'14px'}, fontWeight:"400"}} >Competitive Pricing</Typography>
    </Box>

    <Box sx={{boxShadow:" 0px 3px 5px 2px rgba(104,154,247,0.78)",  width:{md:"220px", xs:"150px"}, height:{md:"220px", xs:"150px"}, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}} >
        <Image1 src="/images/vision.png" />
        <Typography variant="h6" sx={{textAlign:"center",fontFamily:"Roboto", fontSize:{md:"20px", xs:'14px'}, fontWeight:"400"}} >No Hidden Cost</Typography>
    </Box>

    <Box sx={{boxShadow:" 0px 3px 5px 2px rgba(104,154,247,0.78)",  width:{md:"220px", xs:"150px"}, height:{md:"220px", xs:"150px"}, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}} >
        <Image1 src="/images/basket.png" />
        <Typography variant="h6" sx={{textAlign:"center", fontFamily:"Roboto",fontSize:{md:"20px", xs:'14px'}, fontWeight:"400"}} >Cancel Anytime</Typography>
    </Box>

    <Box sx={{boxShadow:" 0px 3px 5px 2px rgba(104,154,247,0.78)",  width:{md:"220px", xs:"150px"}, height:{md:"220px", xs:"150px"}, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}} >
        <Image1 src="/images/review.png" />
        <Typography variant="h6" sx={{textAlign:"center",fontFamily:"Roboto", fontSize:{md:"20px", xs:'14px'}, fontWeight:"400"}} >1000+ Happy Clients</Typography>
    </Box>

    <Box sx={{boxShadow:" 0px 3px 5px 2px rgba(104,154,247,0.78)",  width:{md:"220px", xs:"150px"}, height:{md:"220px", xs:"150px"}, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}} >
        <Image1 src="/images/creativity.png" />
        <Typography variant="h6" sx={{textAlign:"center",fontFamily:"Roboto", fontSize:{md:"20px", xs:'14px'}, fontWeight:"400"}} >21 Years of Expertise</Typography>
    </Box>
    <Box sx={{boxShadow:" 0px 3px 5px 2px rgba(104,154,247,0.78)",  width:{md:"220px", xs:"150px"}, height:{md:"220px", xs:"150px"}, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}} >
        <Image1 src="/images/open-24-hours.png" />
        <Typography variant="h6" sx={{textAlign:"center", fontFamily:"Roboto",fontSize:{md:"20px", xs:'14px'}, fontWeight:"400"}} >24/7 Support</Typography>
    </Box>
    <Box sx={{boxShadow:" 0px 3px 5px 2px rgba(104,154,247,0.78)",  width:{md:"220px", xs:"150px"}, height:{md:"220px", xs:"150px"}, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}} >
        <Image1 src="/images/service.png" />
        <Typography variant="h6" sx={{textAlign:"center",fontFamily:"Roboto", fontSize:{md:"20px", xs:'14px'},fontWeight:"400"}} >Best Services in this market</Typography>
    </Box>
    </Box>

    </ChooseContainer>
  )
}

export default Block2