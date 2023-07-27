import { Phone, Reply, WhatsApp } from '@mui/icons-material'
import { Box, Button, Card, CardMedia, Rating, Stack, Typography, styled } from '@mui/material'
import React from 'react'
const StyleToolbar = styled(Box)(({theme})=>({
    padding:"30px",
  textAlign:"justify",
  backgroundColor:'#fff',
  [theme.breakpoints.down("md")]:{
    padding:'10px'
  }
  }))
function Block1() {
  return (
    <StyleToolbar>
<Box sx={{paddingY:"30px"}}>
  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px",gap:"30px",flexDirection:{md:"row",sm:"row",xs:'column'}}}>
 
        <Box >
          <Typography sx={{fontSize:{md:"24px",sm:"24px",xs:"20px"},fontWeight:"600",}}>
Lorem ipsum dolor sit amet 
          </Typography>
          <Box sx={{display:"flex",gap:"10px",paddingY:"10px",alignItems:"center",flexWrap:"wrap"}}>
            <Box>
              <Button sx={{backgroundColor:"#339D3A",color:"#fff",padding:"1px 3px",minWidth:"30px",borderRadius:"5px"}}>3.5</Button>
            </Box>
            <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
            </Stack>
            <Typography>15 Rating</Typography>
          </Box>
          <Typography sx={{fontSize:"18px",paddingY:'5px'}}>Lorem ipsum dolor sit amet.  <span style={{fontSize:"14px"}}>
               4.4km
            </span></Typography>
            <Typography sx={{fontSize:"16px"}}><span style={{color:"#339D3A"}}>Open</span> Until 9:30 pm</Typography>
            <Box sx={{paddingY:"10px",display:"flex",gap:"20px",alignItems:"center",flexWrap:"wrap"}}>
              <Box >
                <Button startIcon={<Phone />} sx={{color:"#fff",backgroundColor:"green","&:hover":{
                 backgroundColor:"#339D3A"
                }}}>Show Number</Button>
              </Box>
              <Box >
                <Button startIcon={<WhatsApp sx={{backgroundColor:"#25D366",color:"#fff",}}  />} sx={{color:"#000",border:"1px solid #25D366",backgroundColor:"#fff","&:hover":{
                 backgroundColor:"#F7F7F7"
                }}}>Chat</Button>
              </Box>
              <Box >
                <Button startIcon={<Reply sx={{rotate:"360deg"}}/>} sx={{color:"#000",border:"1px solid #25D366",backgroundColor:"#fff","&:hover":{
                 backgroundColor:"#F7F7F7"
                }}}>Share</Button>
              </Box>
            </Box>
        </Box>
        <CardMedia
            component="img"
            sx={{ width:{md:400,sm:400,xs:"100%"},height:200,borderRadius:"5px" }}
            image="https://images.pexels.com/photos/678289/pexels-photo-678289.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Live from space album cover"
          />
  </Box>
  
</Box>
    </StyleToolbar>
  )
}

export default Block1