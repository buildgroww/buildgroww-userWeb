import { AirportShuttle, Search } from '@mui/icons-material'
import { Autocomplete, Box, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from '../../redux/store/store'
import { getUser } from '../../redux/slices/auth'
import { useEffect } from 'react'
import { useState } from 'react'


const Block1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[filters,setFilters] = useState()
  const user = useSelector((state)=> state.auth)
  const fetchUser = async() => {
    let result = await dispatch(getUser())
    if(result){
      return true
    }
    else
    return false
  }

  useEffect(()=>{
    fetchUser()
   
  },[])
  return (
    <Box sx={{display:{md:'block',sm:'block',xs:'none'}}}>
      <Box sx={{width:'100%',height:'200px',backgroundImage:`url(${'https://img.freepik.com/free-photo/illustration-geometric-shapes-with-neon-laser-lights-great-backgrounds-wallpapers_181624-32746.jpg?size=626&ext=jpg&ga=GA1.2.669828460.1689154101&semt=ais'})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        
      </Box>


      <Box sx={{position:'relative',margin:'50px'}}>
      <Autocomplete  disablePortal
      freeSolo
              
                          renderInput={(params) => (
                            <TextField
                           
                              fullWidth
                            
                             
                              {...params}
                              label='Search all category ...'
                              sx={{width:'500px'}}
                              
                            />
                           
                          )}                         
               />

    <Box sx={{position:'absolute',left:'460px',top:'10px'}}>
        <Search sx={{fontSize:'33px'}}/>
    </Box>
    </Box>


    <Box sx={{padding:'0px 50px',width:'100%',display:'flex',justifyContent:'space-between'}}>

     
        <Box sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
            <Typography onClick={() => navigate('/subcategory')} sx={{fontWeight:'600',fontSize:'18px',display:'flex',gap:'20px',alignItems:'center',cursor:'pointer'}}><AirportShuttle sx={{fontSize:'50px'}}/>Van</Typography>
            <Typography sx={{fontWeight:'600',fontSize:'18px',display:'flex',gap:'20px',alignItems:'center'}}><AirportShuttle sx={{fontSize:'50px'}}/>Van</Typography>
            <Typography sx={{fontWeight:'600',fontSize:'18px',display:'flex',gap:'20px',alignItems:'center'}}><AirportShuttle sx={{fontSize:'50px'}}/>Van</Typography>
            <Typography sx={{fontWeight:'600',fontSize:'18px',display:'flex',gap:'20px',alignItems:'center'}}><AirportShuttle sx={{fontSize:'50px'}}/>Van</Typography>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
            <Typography sx={{fontWeight:'600',fontSize:'18px',display:'flex',gap:'20px',alignItems:'center'}}><AirportShuttle sx={{fontSize:'50px'}}/>Van</Typography>
            <Typography sx={{fontWeight:'600',fontSize:'18px',display:'flex',gap:'20px',alignItems:'center'}}><AirportShuttle sx={{fontSize:'50px'}}/>Van</Typography>
            <Typography sx={{fontWeight:'600',fontSize:'18px',display:'flex',gap:'20px',alignItems:'center'}}><AirportShuttle sx={{fontSize:'50px'}}/>Van</Typography>
            <Typography sx={{fontWeight:'600',fontSize:'18px',display:'flex',gap:'20px',alignItems:'center'}}><AirportShuttle sx={{fontSize:'50px'}}/>Van</Typography>
        </Box>
        <Box sx={{width:{md:'400px',sm:'250px'},display:'flex',flexDirection:'column',gap:'20px'}}>
            <Typography sx={{fontWeight:'600',fontSize:'18px',display:'flex',gap:'20px',alignItems:'center'}}><AirportShuttle sx={{fontSize:'50px'}}/>Van</Typography>
            <Typography sx={{fontWeight:'600',fontSize:'18px',display:'flex',gap:'20px',alignItems:'center'}}><AirportShuttle sx={{fontSize:'50px'}}/>Van</Typography>
            <Typography sx={{fontWeight:'600',fontSize:'18px',display:'flex',gap:'20px',alignItems:'center'}}><AirportShuttle sx={{fontSize:'50px'}}/>Van</Typography>
            <Typography sx={{fontWeight:'600',fontSize:'18px',display:'flex',gap:'20px',alignItems:'center'}}><AirportShuttle sx={{fontSize:'50px'}}/>Van</Typography>
        </Box>
    </Box>

    </Box>
  )
}

export default Block1
