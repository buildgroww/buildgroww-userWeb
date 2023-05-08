
import { Box, Button, Card, CardActionArea, CardContent, Checkbox, FormControlLabel, IconButton, Typography, styled, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./block4.css"
import Glider from 'glider-js';
import "glider-js/glider.min.css"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const Paragraph = styled(Typography)(({theme})=>({
    fontFamily:"Roboto"
}))
const Label = styled("label")(({theme})=>({
width:"100%",
height:"100%",
display:"block !important",
position:"relative"

}))

  const Input = styled("input")(({theme})=>({
width:"20px",
height:"20px",
padding:"30px",
position:"absolute",
top:"30px",
left:"30px",
}))

const Block4 = ({packages,pack,setPack}) => {
  const theme =  useTheme();
  const [open, setOpen] = React.useState(false);

  const result = packages && packages.data?.data?.filter(check)

    function check(item){
      return item.type.toLowerCase()===`${pack.type.toLowerCase()}` && item.plan.toLowerCase()===`${pack.plan.toLowerCase()}`
    }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let glider = document.getElementById('productsGlider4')

    if(glider){
      new Glider(document.getElementById('productsGlider4'), {
        // Optional parameters
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        rewind: true,
        duration: 0.5,
        dots: ".pagination",
        arrows: {
          prev: ".productsGlider-prev4",
          next: ".productsGlider-next4"
        },
      
        // responsive: [
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       draggable: true,
        //       rewind: true,
        //       duration: 0.5,
        //     }
        //   },
        //   {
        //     breakpoint: 960,
        //     settings: {
        //       slidesToShow: 2,
        //       scrollLock: false,
        //       rewind: true
        //     }
        //   }
        // ]
      });
    }
    
  }, [])

  return (
    <div style={{position:'relative',width:'100%'}}>
      <Box sx={{margin:"20px 0"}}>
    <Paragraph variant='h2' sx={{fontSize:{md:"2rem", xs:"1.5rem"}, fontWeight:"500", textAlign:"center", color:"teal"}} >Choose Your Duration</Paragraph>
    </Box>
    {/* <Box sx={{display:'flex',justifyContent:'flex-end'}}>scroll-></Box> */}
   <Box className='productsGlider-inner4' id='productsGlider4' sx={{margin:{sm:'0 100px',xs:'0 10px'}}}
    // sx={{padding:{md:"0px 80px", xs:"0px 10px"}, display:"flex",gap:{lg:"10px", md:"25px", xs:"25px" }, justifyContent:{lg:"space-between", xs:"center"}, alignItems:"center", flexDirection:{sm:"row", xs:"column"}, flexWrap:"wrap"}} 
    >
      {result && result.map((item,index)=>(
          <Card onClick={()=>{setPack({...pack,duration:item.durationMonths})}} >
          <CardActionArea sx={{display:"flex",height:'100%',justifyContent:"center", flexDirection:"column"}} >
          <Label>
          <Input checked={pack.duration===item.durationMonths} type='radio' name="package"/>
          <CardContent sx={{display:"flex",justifyContent:"center", cursor:'pointer',":hover":{bgcolor:'#fff'},flexDirection:"column", textAlign:"center"}} >
              <Paragraph variant="h5" sx={{fontSize:{md:"24px",sm:'20px',xs:'16px'}, fontWeight:"500",marginTop:"20px"}}>
                {item.durationMonths} Month
              </Paragraph>
              <Paragraph variant="h2" sx={{fontSize:{md:"40px",sm:'30px',xs:'25px'}, fontWeight:"600", marginTop:"30px"}}>
              ₹{item.price}
              </Paragraph>
              <Paragraph variant="h2" color="text.secondary"  sx={{fontSize:{sm:"18px",xs:'16px'}, fontWeight:"400"}}>
              INR per {item.durationMonths} month
              </Paragraph>
              <Paragraph variant="h2" color="text.secondary"  sx={{fontSize:{sm:"18px",xs:'16px'}, fontWeight:"400", marginTop:"40px"}}>
              Plan renews at ₹{item.renewPrice}.00/year
              </Paragraph>
            </CardContent>
          </Label>
          </CardActionArea>
    
        </Card>
      ))}
  
    {/* <Card sx={{overflow:'visible!important'}}>
      <CardActionArea sx={{display:"flex", justifyContent:"center", flexDirection:"column"}} >
      <Label>
     <Box sx={{width:"150px", height:"30px", background:"#DA4453", borderRadius:"8px", position:"absolute",top:"-10px", left:"28%", display:"flex", justifyContent:"center", alignItems:"center", zIndex:"200"}} >
      <Typography sx={{fontSize:"16px", fontWeight:"500", color:"white"}} >
       Save ₹999.00
      </Typography>
     </Box>


      <Input type='radio' name="package"/>
      <CardContent sx={{display:"flex",height:'100%',justifyContent:"center", flexDirection:"column", textAlign:"center"}} >
          <Paragraph variant="h5" sx={{fontSize:{md:"24px",sm:'20px',xs:'16px'}, fontWeight:"500",marginTop:"20px"}}>
            6 Month
          </Paragraph>
          <Paragraph variant="h2" sx={{fontSize:{md:"40px",sm:'30px',xs:'25px'}, fontWeight:"600", marginTop:"30px"}}>
          ₹7449.00
          </Paragraph>
          <Paragraph variant="h2" color="text.secondary"  sx={{fontSize:{sm:"18px",xs:'16px'}, fontWeight:"400"}}>
          INR per 6 month
          </Paragraph>
          <Paragraph variant="h2" color="text.secondary"  sx={{fontSize:{sm:"18px",xs:'16px'}, fontWeight:"400", marginTop:"40px"}}>
          Plan renews at ₹7449.00/year
          </Paragraph>
        </CardContent>
      </Label>
      </CardActionArea>

    </Card>

    <Card >
      <CardActionArea sx={{display:"flex", justifyContent:"center", flexDirection:"column"}} >
      <Label>
      <Box sx={{width:"150px", height:"30px", background:"#DA4453", borderRadius:"8px", position:"absolute",top:"-10px", left:"28%", display:"flex", justifyContent:"center", alignItems:"center", zIndex:"200"}} >
      <Typography sx={{fontSize:"16px", fontWeight:"500", color:"white"}} >
       Save ₹999.00
      </Typography>
     </Box>
      <Input type='radio' name="package"/>
      <CardContent sx={{display:"flex",height:'100%',justifyContent:"center", flexDirection:"column", textAlign:"center"}} >
      <Paragraph variant="h5" sx={{fontSize:{md:"24px",sm:'20px',xs:'16px'}, fontWeight:"500",marginTop:"20px"}}>
            6 Month
          </Paragraph>
          <Paragraph variant="h2" sx={{fontSize:{md:"40px",sm:'30px',xs:'25px'}, fontWeight:"600", marginTop:"30px"}}>
          ₹7449.00
          </Paragraph>
          <Paragraph variant="h2" color="text.secondary"  sx={{fontSize:{sm:"18px",xs:'16px'}, fontWeight:"400"}}>
          INR per 6 month
          </Paragraph>
          <Paragraph variant="h2" color="text.secondary"  sx={{fontSize:{sm:"18px",xs:'16px'}, fontWeight:"400", marginTop:"40px"}}>
          Plan renews at ₹7449.00/year
          </Paragraph>
        </CardContent>
      </Label>
      </CardActionArea>

    </Card>


    <Card >
      <CardActionArea sx={{display:"flex", justifyContent:"center", flexDirection:"column"}} >
      <Label>
      <Box sx={{width:"150px", height:"30px", background:"#DA4453", borderRadius:"8px", position:"absolute",top:"-10px", left:"28%", display:"flex", justifyContent:"center", alignItems:"center", zIndex:"200"}} >
      <Typography sx={{fontSize:"16px", fontWeight:"500", color:"white"}} >
       Save ₹999.00
      </Typography>
     </Box>
      <Input type='radio' name="package"/>
        <CardContent sx={{display:"flex",height:'100%',justifyContent:"center", flexDirection:"column", textAlign:"center"}} >
        <Paragraph variant="h5" sx={{fontSize:{md:"24px",sm:'20px',xs:'16px'}, fontWeight:"500",marginTop:"20px"}}>
            6 Month
          </Paragraph>
          <Paragraph variant="h2" sx={{fontSize:{md:"40px",sm:'30px',xs:'25px'}, fontWeight:"600", marginTop:"30px"}}>
          ₹7449.00
          </Paragraph>
          <Paragraph variant="h2" color="text.secondary"  sx={{fontSize:{sm:"18px",xs:'16px'}, fontWeight:"400"}}>
          INR per 6 month
          </Paragraph>
          <Paragraph variant="h2" color="text.secondary"  sx={{fontSize:{sm:"18px",xs:'16px'}, fontWeight:"400", marginTop:"40px"}}>
          Plan renews at ₹7449.00/year
          </Paragraph>
        </CardContent>
      </Label>
      </CardActionArea>

    </Card> */}


   </Box>
   <span role="tablist" className="pagination"></span>
        <span className="productsGlider-prev4"><ChevronLeftIcon/></span>
        <span className="productsGlider-next4"><ChevronRightIcon/></span>
    </div>
  )
}

export default Block4