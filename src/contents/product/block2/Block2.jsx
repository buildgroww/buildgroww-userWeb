import React from 'react'
import { Add,  } from '@mui/icons-material'
import { Box, Button, Card, CardMedia, Rating, Stack, Typography, styled } from '@mui/material'
const StyleToolbar = styled(Box)(({theme})=>({
    margin:"0px 120px",
  textAlign:"justify",
  [theme.breakpoints.down('sm')]: {
    margin:"0px 20px"
  } 
  }))
function Block2() {
  return (
    <StyleToolbar>
    <Box sx={{paddingY:"30px"}}>
      <Card sx={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px",gap:"30px",flexDirection:{md:"row",sm:"row",xs:'column'}}}>
     
            <Box >
              <Typography sx={{fontSize:"24px",fontWeight:"600",}}>
    Lorem ipsum dolor sit amet 
              </Typography>
             
              <Typography sx={{fontSize:"18px",paddingY:'5px'}}>Lorem ipsum dolor sit amet.  <span style={{fontSize:"14px"}}>
                   4.4km
                </span></Typography>
               <Typography sx={{fontSize:"12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic culpa, obcaecati numquam ullam voluptatum laudantium nihil quia totam mollitia deleniti, earum quaerat voluptates sit, aspernatur necessitatibus eaque reiciendis fugiat.</Typography>
                  
            </Box>
            <Box sx={{position:"relative",width:{md:250,sm:250,xs:"100%"},height:150}}>
            <CardMedia
            component="img"
            sx={{ width:{md:250,sm:250,xs:"100%"},height:150,borderRadius:"5px" }}
            image="https://images.pexels.com/photos/678289/pexels-photo-678289.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Live from space album cover"
          />
          <Box sx={{position:'absolute',bottom:'0px',width:"100%",display:"flex",justifyContent:'center',alignItems:'center'}}>
            <Button startIcon={<Add/>} sx={{color:"#fff",backgroundColor:"green",width:"100%",borderRadius:"0px","&:hover":{
                 backgroundColor:"#339D3A"
                }}}>Add to Cart</Button>
          </Box>
          </Box>
      </Card>
    </Box>
        </StyleToolbar>
  )
}

export default Block2