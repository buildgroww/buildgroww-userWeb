import { Close, Google } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'

import { useNavigate } from 'react-router-dom';
import { signupSchema } from '../../schemas';

const initialValues = {
  name:'',
  phone:'',
  email:'',
  password:''
}

function Signup({setDrawer}) {
  const {values , errors , handleBlur,handleChange,handleSubmit,touched} = useFormik({
    initialValues:initialValues,
    validationSchema:signupSchema,

    onSubmit : async(values,action) => {
      const{name,email,password,phone}= values
      let data = {name,email,phone,password}
      console.log(data)
      action.resetForm();
    
    }


  });

  const navigate = useNavigate();
  const handleDrawerClose = ()=>{
    setDrawer(false);



};
  return (

    <Box sx={{width:'100%'}}>
    <Box sx={{width:{md:'500px',sm:'500px',xs:'400px'},position:'relative',height:{sm:'85vh',xs:'80vh'},padding:{md:'25px',sm:'25px',xs:'15px'}}}>
       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Typography sx={{fontSize:'30px',fontWeight:'700'}}>BuildGroww</Typography>
        <Close onClick={handleDrawerClose} sx={{fontSize:'25px','&:hover':{background:'gray',borderRadius:'5px',cursor:'pointer'}}}/>
       </Box>

       <Box>
       <Typography sx={{fontSize:'18px',fontWeight:'600'}}>Welcome & Signup Here</Typography>
       </Box>


       <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'50px',gap:'15px'}}>
        
        <Box sx={{width:'90%'}}>
        <TextField variant='outlined' label='Name' type='text' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}  sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
        {errors.name && touched.name ?(
                <Typography sx={{fontSize:'12px',color:'red'}}>{errors.name}</Typography>):null}
        </Box>

        <Box sx={{width:'90%'}}>
        <TextField variant='outlined' label='Mobile No' type='number' name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
        {errors.phone && touched.phone ?(
       <Typography sx={{fontSize:'12px',color:'red'}}>{errors.phone}</Typography>):null}
        </Box>

        <Box sx={{width:'90%'}}> 
        <TextField variant='outlined' label='Email-Id' type='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
        {errors.email && touched.email ?(
         <Typography sx={{fontSize:'12px',color:'red'}}>{errors.email}</Typography>):null}
        </Box> 

        <Box sx={{width:'90%'}}> 
        <TextField variant='outlined' label='Password' type='password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} sx={{width:'100%',"& fieldset": {borderRadius:'3px'}}}/>
        {errors.password && touched.password ?(
         <Typography sx={{fontSize:'12px',color:'red'}}>{errors.password}</Typography>):null}
       </Box>

        <Button variant='contained' type='submit' sx={{borderRadius:'3px',width:'90%',background:'black','&:hover':{background:'black'}}}>SIGNUP</Button>

       </form>

       <Box sx={{display:'flex',justifyContent:'center',margin:'15px'}}>
        <Typography sx={{fontSize:'18px',fontWeight:'600'}}>OR</Typography>
       </Box>

       <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Button variant='outlined' sx={{borderRadius:'3px',color:'black',border:'1px solid green',display:'flex',gap:'5px'}}><Google sx={{color:'green'}}/>Google</Button>
       </Box>
</Box>
</Box>
  )
}

export default Signup