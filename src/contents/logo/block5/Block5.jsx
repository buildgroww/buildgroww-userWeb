import { Box, styled, Typography } from '@mui/material'
import React from 'react'
const Image = styled("img")(({theme})=>({
width:"100%",
height:"500px",
objectFit:"cover",
justifyContent:"center",
alignItems:"center",
display:'flex',
[theme.breakpoints.down("sm")]:{
    width:"100%",
    height:"250px"
}

}))
const Block5 = () => {
  return (
    <Box sx={{padding:{md:"40px 120px",sm:"30px 40px", xs:"20px 10px"}}}>
    <Box sx={{ width:"100%", display:"flex", justifyContent:"center",alignItems:"center", marginBottom:"40px"}}>
    <Box sx={{display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column", width:{sm:"70%", xs:'100%'}, gap:{md:"20px", xs:"10px"}}} >
        <Typography variant='h2' sx={{fontFamily:"Roboto", fontSize:"40px", color:"#090B17", fontWeight:"700", textAlign:"center"}} >  See How fulfill your vision with <span style={{color:"teal", fontStyle:"italic"}} > TechPyro</span> </Typography>
        <Typography variant='body' sx={{fontFamily:"Roboto", fontSize:"20px", color:"#676E8B",textAlign:"center", fontWeight:"400", textAlign:'center'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>

    </Box>
    </Box>
    <Box sx={{justifyContent:"center",
alignItems:"center",
display:'flex',}} >
         <Image src="/images/category/logo/logoo.png"  />
    </Box>
    </Box>
  )
}

export default Block5