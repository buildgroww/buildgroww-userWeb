import { Call, Star, ThumbUp } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { authApi } from '../../mocks/auth';
import { useState } from 'react';
import { useDispatch } from '../../redux/store/store';
import { useLocation, useNavigate } from 'react-router-dom';

const Block2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation()
  const category = location.pathname.split("/")[2]
  const [ users,setUsers] = useState()
  const[filters,setFilters] = useState({'workCategory':category})
 


  const fetchUserList = async() => {
    let result = await authApi.getUserList(1,10,filters);
    console.log(result)
    if(result){
      setUsers(result)
    }
    else
    return false
  }

  
  useEffect(()=>{
    fetchUserList()
  },[])
  console.log(users)
  return (
    <>
       <Box sx={{display:{md:'none',sm:'none',xs:'block'},margin:'0px',padding:'0px'}}>
        <Typography sx={{fontSize:'25px',fontWeight:'600',color:'black'}}>Best {category}</Typography>



        {users && users.data && users.data.data && users.data.data.length>0 && users.data.data.map((item,index)=>(

       <Box key={index} sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'30px',height:'230px',}}>
        <Box sx={{boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',border:'1px solid rgba(0,0,0,0.2)',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'20px 0px',margin:'5px'}}>
          <Box sx={{display:'flex',gap:'10px'}}>

          <Box sx={{width:'35%',padding:'10px'}}>
                <img src={users.avatar} style={{objectFit:'cover',width:'160px',height:'120px'}}/>
            </Box>

            <Box sx={{width:'65%',display:'flex',flexDirection:'column',gap:'5px'}}>
            <Typography   sx={{fontSize:'18px',fontWeight:'600',color:'black',display:'flex',alignItems:'center',gap:'10px'}}><ThumbUp sx={{fontSize:'14px'}}/>{item.name}</Typography>

            <Box sx={{display:'flex',gap:'20px'}}>
                    
                        <Typography sx={{fontSize:'16px',fontWeight:'600',background:'green',color:'white',padding:'0px 5px',borderRadius:'2px',display:'flex',alignItems:'center',gap:'5px'}}>3.8<Star sx={{fontSize:'15px',color:'white'}}/></Typography>
                
                    <Typography sx={{fontWeight:'500'}}>200 Ratings</Typography>
                </Box>

            <Typography sx={{fontWeight:'500',fontSize:'16px'}}>User Address</Typography>
            <Typography sx={{fontWeight:'400',fontSize:'18px'}}>Fees:₹500 per day</Typography>
            <Typography sx={{color:'green'}}>Available</Typography>

            </Box>

          </Box>
          <Box sx={{display:'flex',gap:'20px',padding:'0px 10px'}}>
               <Button variant='contained' sx={{fontSize:'16px',background:'green',borderRadius:'3px','&:hover':{background:'green'},gap:'20px'}}><Call/>Call Now</Button>
               <Button variant='outlined' sx={{borderRadius:'3px'}}>Book Appointment</Button>
            </Box >
          </Box>

       </Box>
        ))}
       </Box>
    </>
  )
}

export default Block2
