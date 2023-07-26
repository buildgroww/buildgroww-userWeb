import { Box, Typography} from '@mui/material'
import React from 'react'


 

export default function Block2() {
  
  // let TotalAddonPrice = 0;
  // let TotalPackagePrice = 0;
  // let TotalPackageQty = 0;
  // let TotalAddonQty = 0;
  // cartVal.products?.data?.data?.map((item)=>{
        
  //       item.products[0].addonId.map((i)=>{
  //          TotalAddonPrice += i.price;
  //          TotalAddonQty += 1;
  //       })
  //       TotalPackagePrice += ((item.products[0].packageId.price * item.products[0].qty)) ;
  //       TotalPackageQty += item.products[0].qty;

  //       return 0;
  //   })
 
  return (
   <>
    <Box sx={{display:"flex",flexDirection:"column",paddingX:"20px",gap:"2px"}}>
        <Box sx={{display:"flex",justifyContent:"space-between",marginTop:{md:"10px",xs:"2px"}}}>
        <Box sx={{fontsize:{md:"20px",xs:"14px"},textDecoration:"none",color:"white",backgroundColor:"#EE4B2B",padding:{md:"11px 33px",xs:"6px 15px"},transition:"1s",boxShadow:"6px 6px 0 black",transform:"skewX(-15deg)",border:"none","&:hover":{transition:"0.5s",boxShadow:"10px 10px 0 #FBC638"}}}>Continue Shoping</Box>
          <Box sx={{fontsize:"20px",textDecoration:"none",color:"white",fontSize:"15px",backgroundColor:"#6225E6",padding:{md:"11px 33px",xs:"6px 15px"},transition:"1s",boxShadow:"6px 6px 0 black",transform:"skewX(-15deg)",border:"none","&:hover":{transition:"0.5s",boxShadow:"10px 10px 0 #FBC638"}}}>Procedd Here</Box>
        </Box>
         
        <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"15px"}}>
            <Typography sx={{fontWeight:"600",fontSize:{md:"20px",xs:"15px"}}}>Total Price</Typography>
            <Typography sx={{fontWeight:"600",fontSize:{md:"25px",xs:"16px"}}}>₹ 1999</Typography>
        </Box>

    </Box>

   </>
  )
}
