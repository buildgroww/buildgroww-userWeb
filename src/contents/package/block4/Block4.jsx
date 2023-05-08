import { Box, Button, Card, CardActions, CardContent, Tooltip, Typography, styled, tooltipClasses } from '@mui/material'
import React from 'react'
import { TbCheck } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom';
const Container = styled(Box)(({theme})=>({
    padding:"50px 80px 50px 120px",
    background:"#fff",
    [theme.breakpoints.down('md')]: {
   padding:"50px 20px 50px 20px"
    
    
    },
    [theme.breakpoints.down('sm')]: {
        padding:"50px 20px 50px 20px"
         
         
         },
}))

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "teal",
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'teal',
    color: 'white',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(14),
    border: '1px solid #dadde9',
    },
  }));

const Block4 = () => {
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate(`/packagedetails/type=dashboard&plan=basic`)
    }
    const handleClick1 = () =>{
      navigate(`/packagedetails/type=dashboard&plan=advance`)
      }
      const handleClick2 = () =>{
        navigate(`/packagedetails/type=dashboard&plan=premium`)
        }
  return (
    <Container>
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}} >
        <Typography variant='h2' sx={{fontSize:{md:"40px", sm:"32px", xs:"25px"}, fontWeight:"500", fontFamily:"Roboto", textAlign:"center"}} >Choose Your Dashboard Or CRM Plans</Typography>

         <Box sx={{margin:"50px 0px", display:"flex", gap:"10px", justifyContent:{sm:"space-between", xs:"center"},alignItems:"center", width:"100%", flexDirection:{sm:"row", xs:"column"}}} >
         <Card onClick={handleClick} transitionDuration={{enter:400 , exit:400}}  sx={{width: {sm:"33%", xs:"90%"},cursor:"pointer", "&:hover":{transform:"scale(1.03)", transition:"all 0.4s linear"} }}>
      <CardContent>
        <Typography variant="h3">
       Basic Plan 
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{paddingBottom:"40px", borderBottom:"2px solid #eee"}} >
            Ideal Solutions for small websites
        </Typography>
        <Box sx={{margin:"10px 0px"}} >
        <BootstrapTooltip title="*Starting at" placement="top"  sx={{}} >
        <Typography variant="h3" sx={{textDecoration:"underline", fontSize:{md:"30px", sm:"20px"}, fontWeight:"500", fontFamily:"Roboto"}} > ₹1449/annum*</Typography>
        </BootstrapTooltip>
        </Box>
            
        <Box sx={{display:"flex",  alignItems:"center", margin:"10px 0px", }} > 
            <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />
            <Typography sx={{fontSize:"16px", fontWeight:"500"}} >Lorem ipsum dolor sit.</Typography>
        </Box>

        <Box sx={{display:"flex",  alignItems:"center", margin:"10px 0px"}} > 
            <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />
            <Typography sx={{fontSize:"16px", fontWeight:"500"}} >Lorem ipsum dolor sit.</Typography>
        </Box>

        <Box sx={{display:"flex",  alignItems:"center", margin:"10px 0px"}} > 
            <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />
            <Typography sx={{fontSize:"16px", fontWeight:"500"}} >Lorem ipsum dolor sit.</Typography>
        </Box>

        <Box sx={{display:"flex",  alignItems:"center", margin:"10px 0px"}} > 
            <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />
            <Typography sx={{fontSize:"16px", fontWeight:"500"}} >Lorem ipsum dolor sit.</Typography>
        </Box>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card onClick={handleClick1}  transitionDuration={{enter:400 , exit:400}}  sx={{ width: {sm:"33%", xs:"90%"},cursor:"pointer", "&:hover":{transform:"scale(1.03)", transition:"all 0.4s linear"} }}>
      <CardContent>
        <Typography  variant="h3">
       Advance Plan 
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{paddingBottom:"40px", borderBottom:"2px solid #eee"}} >
            Ideal Solutions for Business
        </Typography>

        <Box sx={{margin:"10px 0px"}} >
        <BootstrapTooltip title="*Starting at" placement="top"  sx={{}} >
        <Typography variant="h3" sx={{textDecoration:"underline", fontSize:{md:"30px", xs:"20px"}, fontWeight:"500", fontFamily:"Roboto"}} > ₹5449/annum* </Typography>
        </BootstrapTooltip>
        </Box>
        <Box sx={{display:"flex",  alignItems:"center", margin:"10px 0px"}} > 
            <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />
            <Typography sx={{fontSize:{md:"16px", xs:"14px"}, fontWeight:"500"}} >Lorem ipsum dolor sit.</Typography>
        </Box>

        <Box sx={{display:"flex",  alignItems:"center", margin:"10px 0px"}} > 
            <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />
            <Typography sx={{fontSize:{md:"16px", xs:"14px"}, fontWeight:"500"}} >Lorem ipsum dolor sit.</Typography>
        </Box>

        <Box sx={{display:"flex",  alignItems:"center", margin:"10px 0px"}} > 
            <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />
            <Typography sx={{fontSize:{md:"16px", xs:"14px"}, fontWeight:"500"}} >Lorem ipsum dolor sit.</Typography>
        </Box>

        <Box sx={{display:"flex",  alignItems:"center", margin:"10px 0px"}} > 
            <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />
            <Typography sx={{fontSize:{md:"16px", xs:"14px"}, fontWeight:"500"}} >Lorem ipsum dolor sit.</Typography>
        </Box>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


    <Card onClick={handleClick2} transitionDuration={{enter:400 , exit:400}}  sx={{ width: {sm:"33%", xs:"90%"},cursor:"pointer", "&:hover":{transform:"scale(1.03)", transition:"all 0.4s linear"} }}>
      <CardContent>
        <Typography  variant="h3">
       Premium Plan 
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{paddingBottom:"40px", borderBottom:"2px solid #eee"}} >
            Ideal Solutions for Enterprises
        </Typography>

        <Box sx={{margin:"10px 0px"}} >
        <BootstrapTooltip title="*Starting at" placement="top"  sx={{}} >
        <Typography variant="h3" sx={{textDecoration:"underline", fontSize:{md:"30px", xs:"20px"}, fontWeight:"500", fontFamily:"Roboto"}} > ₹8449/annum* </Typography>
        </BootstrapTooltip>
        {/* <Typography variant='body' sx={{fontSize:"14px", fontWeight:"400"}} >For Ist one Year</Typography> */}
        </Box>
        <Box sx={{display:"flex",  alignItems:"center", margin:"10px 0px"}} > 
            <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />
            <Typography sx={{fontSize:{md:"16px", xs:"14px"}, fontWeight:"500"}} >Lorem ipsum dolor sit.</Typography>
        </Box>

        <Box sx={{display:"flex",  alignItems:"center", margin:"10px 0px"}} > 
            <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />
            <Typography sx={{fontSize:{md:"16px", xs:"14px"}, fontWeight:"500"}} >Lorem ipsum dolor sit.</Typography>
        </Box>

        <Box sx={{display:"flex",  alignItems:"center", margin:"10px 0px"}} > 
            <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />
            <Typography sx={{fontSize:{md:"16px", xs:"14px"}, fontWeight:"500"}} >Lorem ipsum dolor sit.</Typography>
        </Box>

        <Box sx={{display:"flex",  alignItems:"center", margin:"10px 0px"}} > 
            <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />
            <Typography sx={{fontSize:{md:"16px", xs:"14px"}, fontWeight:"500"}} >Lorem ipsum dolor sit.</Typography>
        </Box>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


         </Box>
    </Box>
    </Container>
  )
}

export default Block4