import { Call, FavoriteBorder, FavoriteOutlined, Message, ThumbUp } from '@mui/icons-material'
import { Box, Button, Rating, Typography } from '@mui/material'
import React from 'react'

const Block1 = () => {
  return (
    <>
        <Box sx={{display:{md:'block',sm:'block',xs:'none'}}}>
      <Box sx={{width:'100%',height:'200px',backgroundImage:`url(${'https://img.freepik.com/free-photo/illustration-geometric-shapes-with-neon-laser-lights-great-backgrounds-wallpapers_181624-32746.jpg?size=626&ext=jpg&ga=GA1.2.669828460.1689154101&semt=ais'})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        
      </Box>

      <Box sx={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'70px'}}>

        <Box sx={{width:{md:'70%',sm:'90%'},border:'1px solid rgba(0,0,0,0.2)',height:'300px',padding:'20px',boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',display:'flex',gap:{md:'20px', sm:'30px'}}}>

            <Box sx={{width:{md:'25%',sm:'20%'},display:'flex',alignItems:'center',height:'100%'}}>
                <img src='https://images.pexels.com/photos/8159/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' style={{objectFit:'cover',width:'250px',height:'250px'}}/>
            </Box>

            <Box sx={{width:{md:'70%',sm:'75%'},display:'flex',flexDirection:'column',gap:'10px'}}>
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
              <Typography sx={{fontSize:'25px',fontWeight:'600',color:'black',display:'flex',alignItems:'center',gap:'10px'}}><ThumbUp/>Rupesh Mandal (Civil Engineer)</Typography>
              <FavoriteBorder/>
                </Box>

                <Box sx={{display:'flex',gap:'20px'}}>
                    <Box sx={{display:'flex',gap:'10px'}}>
                        <Typography sx={{fontSize:'18px',fontWeight:'600',background:'green',color:'black',padding:'0px 5px',borderRadius:'5px'}}>3.8</Typography>
                        <Rating value={3} sx={{color:'orange'}}/>
                    </Box>
                    <Typography sx={{fontWeight:'500'}}>200 Ratings</Typography>
                </Box>

            <Typography sx={{fontWeight:'500',fontSize:'18px'}}>User Address</Typography>

            <Typography sx={{fontWeight:'500',fontSize:'18px'}}>Fees:₹500 per day</Typography>

            <Typography><Message/>Comments</Typography>

            <Box sx={{display:'flex',gap:'20px'}}>
               <Button variant='contained' sx={{fontSize:'18px',background:'green',borderRadius:'3px','&:hover':{background:'green'}}}><Call/>9876543210</Button>
               <Button variant='outlined' sx={{borderRadius:'3px'}}>Book Appointment</Button>
            </Box >
            </Box>


        </Box>

      </Box>
      </Box>
    </>
  )
}

export default Block1
