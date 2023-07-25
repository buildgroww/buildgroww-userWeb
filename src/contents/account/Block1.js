import { ShoppingCart } from '@mui/icons-material'
import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'


const initialValues = {
    name:'',
    phone:'',
    email:'',
  
  }
const Block1 = () => {

    const {values , errors , handleBlur,handleChange,handleSubmit,touched} = useFormik({
        initialValues:initialValues,
        
    
        onSubmit : async(values,action) => {
          const{name,email,phone}= values
          let data = {name,email,phone,}
          console.log(data)
          action.resetForm();
        
        }
    
    
      });
  return (
    <>
      <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
        <Box sx={{width:{md:'40%',sm:'70%',xs:'98%'},border:'1px solid rgba(0,0,0,0.3)',height:{md:'60vh',sm:'40vh',xs:'50vh'},boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}>


            <Box sx={{width:'100%',height:'50px',background:'#F0F0F0',display:'flex',alignItems:'center',padding:'0px 20px',justifyContent:'space-between'}}>
                 <Box sx={{display:'flex',gap:{md:'10px',sm:'10px',xs:'5px'},alignItems:'center'}}>
                    <Typography sx={{fontWeight:'700',fontSize:'18px'}}>BG</Typography>
                    <Typography>User's Profile</Typography>
                    <Typography>|</Typography>
                    <Typography>9876543219</Typography>
                 </Box>

                 <Box sx={{display:'flex',gap:{md:'10px',sm:'10px',xs:'0px'},alignItems:'center'}}>
                   
                    <Avatar sx={{background:'#F0F0F0',color:'black'}}/>
                    <Typography>UserName</Typography>
                 </Box>
            </Box>

            <Typography sx={{fontSize:'18px',fontWeight:'600',marginTop:{md:'50px',sm:'40px',xs:'20px'},marginLeft:{md:'50px',sm:'40px',xs:'30px'}}}>Edit Your Profile</Typography>

            
       <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'20px',gap:'15px'}}>
        
        <Box sx={{width:'80%'}}>
        <TextField variant='outlined' label='Name' type='text' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}  sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
        
        </Box>

        <Box sx={{width:'80%'}}>
        <TextField variant='outlined' label='Mobile No' type='number' name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
       
        </Box>

        <Box sx={{width:'80%'}}> 
        <TextField variant='outlined' label='Email-Id' type='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
       
        </Box> 

       
      
        <Button variant='contained' type='submit' sx={{borderRadius:'3px',width:'30%',background:'black','&:hover':{background:'black'}}}>SAVE</Button>
        
        

       </form>
        </Box>
      </Box>
    </>
  )
}

export default Block1
