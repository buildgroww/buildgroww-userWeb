import { Call, Star, ThumbUp } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Block2 = () => {
  return (
    <>
       <Box sx={{display:{md:'none',sm:'none',xs:'block'}}}>
        <Typography sx={{fontSize:'25px',fontWeight:'600',color:'black',marginLeft:'20px'}}>Best Workers</Typography>
       <Box sx={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'30px',height:'250px',}}>

        <Box sx={{boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',border:'1px solid rgba(0,0,0,0.2)',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 0px',margin:'5px'}}>
          <Box sx={{display:'flex',width:'100%',padding:'10px',gap:'20px'}}>

          <Box sx={{width:'35%',height:'100%'}}>
                <img src='https://images.pexels.com/photos/8159/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' style={{objectFit:'cover',width:'120px',height:'120px'}}/>
            </Box>

            <Box sx={{width:'70%',display:'flex',flexDirection:'column',gap:'5px'}}>
            <Typography   sx={{fontSize:'18px',fontWeight:'600',color:'black',display:'flex',alignItems:'center',gap:'10px', textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap'}}><ThumbUp sx={{fontSize:'14px'}}/>Rupesh Mandal (Civil Engineer)</Typography>

            <Box sx={{display:'flex',gap:'20px'}}>
                    
                        <Typography sx={{fontSize:'16px',fontWeight:'600',background:'green',color:'white',padding:'0px 5px',borderRadius:'2px',display:'flex',alignItems:'center',gap:'5px'}}>3.8<Star sx={{fontSize:'15px',color:'white'}}/></Typography>
                
                    <Typography sx={{fontWeight:'500'}}>200 Ratings</Typography>
                </Box>

            <Typography sx={{fontWeight:'500',fontSize:'16px'}}>User Address</Typography>
            <Typography sx={{fontWeight:'400',fontSize:'18px'}}>Fees:₹500 per day</Typography>
            <Typography sx={{color:'green'}}>Available</Typography>

            </Box>

          </Box>
          <Box sx={{display:'flex',gap:'20px'}}>
               <Button variant='contained' sx={{fontSize:'16px',background:'green',borderRadius:'3px','&:hover':{background:'green'},gap:'20px'}}><Call/>Call Now</Button>
               <Button variant='outlined' sx={{borderRadius:'3px'}}>Book Appointment</Button>
            </Box >
          </Box>

       </Box>
       </Box>
    </>
  )
}

export default Block2
