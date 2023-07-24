import { Close, Google } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'

import { useNavigate } from 'react-router-dom';

const initialValues = {
  
  email:'',
  password:''
}

function Login({setLogin}) {
  const {values , errors , handleBlur,handleChange,handleSubmit,touched} = useFormik({
    initialValues:initialValues,

    onSubmit : async(values,action) => {
      const{email,password}= values
      let data = {email,password}
      console.log(data)
      action.resetForm();
    
    }


  });

  const navigate = useNavigate();
  const handleDrawerClose = ()=>{
    setLogin(false);



};
  return (

    <Box sx={{width:'100%'}}>
    <Box sx={{width:{md:'500px',sm:'500px',xs:'400px'},position:'relative',height:{sm:'60vh',xs:'60vh'},padding:{md:'25px',sm:'25px',xs:'15px'}}}>
       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Typography sx={{fontSize:'30px',fontWeight:'700'}}>BuildGroww</Typography>
        <Close onClick={handleDrawerClose} sx={{fontSize:'25px','&:hover':{background:'gray',borderRadius:'5px',cursor:'pointer'}}}/>
       </Box>

       <Box>
       <Typography sx={{fontSize:'18px',fontWeight:'600'}}>Welcome & Login Here</Typography>
       </Box>


       <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'50px',gap:'15px'}}>
        
        
      

       

        <TextField variant='outlined' label='Email-Id / Phone No' type='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} sx={{width:'90%',"& fieldset": {borderRadius:'3px'}}}/>

        <TextField variant='outlined' label='Password' type='password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} sx={{width:'90%',"& fieldset": {borderRadius:'3px'}}}/>

        <Button variant='contained' type='submit' sx={{borderRadius:'3px',width:'90%',background:'black','&:hover':{background:'black'}}}>LOGIN</Button>

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

export default Login