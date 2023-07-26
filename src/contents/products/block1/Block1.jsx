import { Star } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const Block1 = () => {
  return (
    <>
        <Box sx={{display:'flex',gap:'30px'}}>
            <Box sx={{width:'200px'}}>
                <img style={{width:'100%',height:'100%',objectFit:'contain'}} src='https://media.istockphoto.com/id/174625708/photo/brick.jpg?s=612x612&w=0&k=20&c=_z155P12_xCiYGv4W5gg7QWdTtPndPPanBusep06yk4=' alt='Company Image'/>
            </Box>
            <Box>
                <Box>
                    <Typography>Lorem, ipsum dolor.</Typography>
                </Box>
                <Box>
                    <Typography sx={{ display: "flex", justifyContent: 'center', alignItems: "center", background: "green", color: "white", width: { lg: "40px", xs: "45px" }, height: "25px", borderRadius: "5px", fontSize: { md: "14px", sm: "12px" } }} > 4 <Star sx={{ fontSize: { md: "13px", xs: "1rem" }, color: "white", paddingLeft: "3px" }} /> </Typography>
                </Box>
                <Box sx={{display:'flex',alignItems:'center',gap:'10px'}}>
                    <Typography>Andheri East, Mumbai</Typography>
                    <Typography>13 Yrs in Business</Typography>
                </Box>
                <Box><QueryStatsIcon/>219 people recently enquired</Box>
            </Box>
        </Box>
    </>
  )
}

export default Block1