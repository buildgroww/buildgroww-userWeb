import { ShoppingCart } from '@mui/icons-material'
import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from '../../redux/store/store'
import { getUser, updateUser } from '../../redux/slices/auth'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const initialValues = {
    name:'',
    phone:'',
    email:'',
  
  }
const Block1 = () => {
const dispatch = useDispatch();
const navigate = useNavigate();

const {user} = useSelector((state)=>state.auth)

const fetchUser = async () => {
  let result = await dispatch(getUser())
  if(result){
    return true
  }
  else
  return false
}
    const {values , errors , handleBlur,handleChange,handleSubmit,touched} = useFormik({
        initialValues:initialValues,
        
    
        onSubmit : async(values,action) => {
          const{name}= values
          let data = {name}
          console.log(data)
          let result = await dispatch(updateUser(data,user.id))
          if(result){
            action.resetForm();
            navigate('/')
          }
          else
          return false
        
        }
    
    
      });


      useEffect(()=>{
          fetchUser();
      },[])
  return (
    <>
      <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
        <Box sx={{width:{md:'40%',sm:'80%',xs:'98%'},border:'1px solid rgba(0,0,0,0.3)',height:{md:'60vh',sm:'40vh',xs:'50vh'},boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}>


            <Box sx={{width:'100%',height:'50px',background:'#F0F0F0',display:'flex',alignItems:'center',padding:'0px 20px',justifyContent:'space-between'}}>
                 <Box sx={{display:'flex',gap:{md:'10px',sm:'10px',xs:'5px'},alignItems:'center'}}>
                    <Typography sx={{fontWeight:'700',fontSize:'18px'}}>BG</Typography>

                    <Box sx={{display:{md:'flex',sm:'flex',xs:'none'},gap:'10px'}}>
                    <Typography>{user && user.name}'s Profile</Typography>
                    <Typography>|</Typography>
                    <Typography>{user && user.phone}</Typography>
                    </Box>

                 </Box>

                 <Box sx={{display:'flex',gap:{md:'10px',sm:'10px',xs:'0px'},alignItems:'center'}}>
                   
                    <Avatar sx={{background:'#F0F0F0',color:'black'}}/>
                    <Typography>{user && user.name}</Typography>
                 </Box>
            </Box>

            <Typography sx={{fontSize:'18px',fontWeight:'600',marginTop:{md:'50px',sm:'40px',xs:'20px'},marginLeft:{md:'50px',sm:'40px',xs:'30px'}}}>Edit Your Profile</Typography>

            
       <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'20px',gap:'15px'}}>
        
        <Box sx={{width:'80%'}}>
        <TextField variant='outlined' label='Name' type='text' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}  sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
        
        </Box>

        <Box sx={{width:'80%'}}>
        <TextField variant='outlined'  type='number' name='phone' value={user.phone} onChange={handleChange} onBlur={handleBlur} sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
       
        </Box>

        <Box sx={{width:'80%'}}> 
        <TextField variant='outlined' type='email' name='email' value={user.email} onChange={handleChange} onBlur={handleBlur} sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
       
        </Box> 

       
      
        <Button variant='contained' type='submit' sx={{borderRadius:'3px',width:'30%',background:'black','&:hover':{background:'black'}}}>SAVE</Button>
        
        

       </form>
        </Box>
      </Box>
    </>
  )
}

export default Block1
