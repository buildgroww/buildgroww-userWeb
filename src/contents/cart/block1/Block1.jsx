import { Avatar, Box } from '@mui/material'
import React from 'react'
import {Typography} from '@mui/material';

export default function Block1(props) {
  console.log(props)
  return (
    <Box sx={{width:"100%",height:"max-content",display:"flex",flexDirection:"column"}}>
        <Typography variant="h1" sx={{width:"100%",height:"50px",paddingX:"10px",fontWeight:"600",}}>
        Carts
      </Typography>
      <Typography variant='h5' sx={{fontWeight:"500",fontSize:"13px",padding:"10px"}}>At Build Groww, we take pride in our commitment to customer satisfaction.</Typography>
      <Box sx={{border:"1px solid gray",display:"flex" ,height:"50px",alignItems:"center", background: "linear-gradient(to bottom, #ee0979, #ff6a00)",fontWeight:"500",color:"#fff" }}>
        <Typography sx={{fontSize:{md:"18px",xs:"12px"},width:"300px",alignItems:"center",display:"flex",justifyContent:"center"}}>Product</Typography>
        <Typography sx={{fontSize:{md:"18px",xs:"12px"},width:"250px",alignItems:"center",display:"flex",justifyContent:"center"}}>Company</Typography>
        <Typography sx={{fontSize:{md:"18px",xs:"12px"},width:"150px",alignItems:"center",display:"flex",justifyContent:"center"}}>Price/per</Typography>
        <Typography sx={{fontSize:{md:"18px",xs:"12px"},width:"250px",alignItems:"center",display:"flex",justifyContent:"center"}}>Quantity</Typography>
        <Typography sx={{fontSize:{md:"18px",xs:"12px"},width:"200px",alignItems:"center",display:"flex",justifyContent:"center"}}>Total</Typography>
      </Box>
      <Box sx={{width:"100%",height:{md:"max-content",xs:"100%"},display:"flex",flexDirection:"column"}}>
        <Box sx={{width:"100%",height:"200px",border:"1px solid black" ,display:"flex",alignItems:"center",marginBottom:"50px"}}>
            <Box sx={{width:"300px",height:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
              <Avatar src="https://cementshop.in/wp-content/uploads/2021/06/karimnagar-bricks.jpg" alt="product_image"  sx={{width:{md:"200px",xs:"100px"},height:{md:"160px",xs:"80px"},mixBlendMode:"multiply"}}/>
              <Typography sx={{fontWeight:"600",marginLeft:"10px",fontSize:{md:"20px",xs:"16px"}}}>Product Name</Typography>
            </Box>
            <Box  sx={{width:"250px" ,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Typography sx={{fontWeight:"600",fontSize:{md:"20px",xs:"12px"}}}>Company pvt Ltd</Typography>
            </Box>
            <Box sx={{width:"150px" ,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Typography sx={{fontWeight:"600",fontSize:{md:"20px",xs:"12px"}}}>₹ 999</Typography>
            </Box>
            <Box sx={{width:"250px" ,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
              <Typography sx={{fontWeight:"600",fontSize:{md:"20px",xs:"12px"}}}>Quantity</Typography>
             
              <Box sx={{display:"flex",border:"1px solid black",borderRadius:"20px",width:{md:"80px",xs:"50px"},justifyContent:"center",gap:"10px"}}>
              <Typography sx={{fontSize:{md:"20px",xs:"16px"}}}>+</Typography><Box sx={{fontSize:{md:"20px",xs:"16px"}}}>1</Box><Typography sx={{fontSize:{md:"20px",xs:"16px"}}}>-</Typography>
              </Box>
            </Box>
            <Box sx={{width:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Typography sx={{fontWeight:"600",fontSize:{md:"18px",xs:"14px"}}}> Total price</Typography>
            </Box>
        </Box>
        <Box sx={{width:"100%",height:"200px",border:"1px solid black" ,display:"flex",alignItems:"center",marginBottom:"50px"}}>
            <Box sx={{width:"300px",height:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
              <Avatar src="https://cementshop.in/wp-content/uploads/2021/06/karimnagar-bricks.jpg" alt="product_image"  sx={{width:{md:"200px",xs:"100px"},height:{md:"160px",xs:"80px"},mixBlendMode:"multiply"}}/>
              <Typography sx={{fontWeight:"600",marginLeft:"10px",fontSize:{md:"20px",xs:"16px"}}}>Product Name</Typography>
            </Box>
            <Box  sx={{width:"250px" ,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Typography sx={{fontWeight:"600",fontSize:{md:"20px",xs:"12px"}}}>Company pvt Ltd</Typography>
            </Box>
            <Box sx={{width:"150px" ,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Typography sx={{fontWeight:"600",fontSize:{md:"20px",xs:"12px"}}}>₹ 999</Typography>
            </Box>
            <Box sx={{width:"250px" ,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
              <Typography sx={{fontWeight:"600",fontSize:{md:"20px",xs:"12px"}}}>Quantity</Typography>
             
              <Box sx={{display:"flex",border:"1px solid black",borderRadius:"20px",width:{md:"80px",xs:"50px"},justifyContent:"center",gap:"10px"}}>
              <Typography sx={{fontSize:{md:"20px",xs:"16px"}}}>+</Typography><Box sx={{fontSize:{md:"20px",xs:"16px"}}}>1</Box><Typography sx={{fontSize:{md:"20px",xs:"16px"}}}>-</Typography>
              </Box>
            </Box>
            <Box sx={{width:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Typography sx={{fontWeight:"600",fontSize:{md:"18px",xs:"14px"}}}> Total price</Typography>
            </Box>
        </Box>
      </Box>
    </Box> 
  )
}
