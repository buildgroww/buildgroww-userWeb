import { Box, ImageList, ImageListItem, styled, Typography } from '@mui/material'
import React from 'react'
import { bannerData } from '../../../constants/Constant'
const Image = styled("img")(({theme})=>({
    width:'100%',
    height:"100%",
    objectFit:"cover"
}))
const Block3 = () => {
  return (
    <Box sx={{padding:{md:"40px 120px",sm:"30px 40px", xs:"20px 10px"}}} >
        <Box sx={{marginBottom:"30px"}} >
            <Typography variant='h2' sx={{fontFamily:"Roboto", fontSize:{md:"36px",sm:"32px", xs:"28px" }, color:"#090B17", fontWeight:"700", textAlign:"center"}} >See Our Demo <span style={{color:"teal", fontStyle:"italic"}}>Logos</span> Here</Typography>
        </Box>
        <Box sx={{display:"flex", justifyContent:{md:"center", xs:"center"}, alignItems:"center",flexWrap:"wrap", gap:{md:"20px", xs:"10px"},}} >
            {bannerData.map((item)=>(
                <Box key={item} sx={{boxShadow:"1px 3px 4px rgba(0,0,0,0.8)", width:{md:"220px", sm:"200px", xs:"150px"}, height:{md:"220px", sm:"200px", xs:"150px"},}} >
                <Image src={item} alt="logo demos" />
            </Box>
                ))}
        </Box>
    </Box>
  )
}

export default Block3