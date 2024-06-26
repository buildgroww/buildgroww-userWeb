import { Close } from '@mui/icons-material'
import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
 

const initialValues = {
  code:"",
  newPassword:""
}
const Block2 = ({setClose,setOpen}) => {
    const handleClose = ()=>{
        setClose(false);

     
    };

    const {values ,handleBlur,handleChange,handleSubmit} = useFormik({

      initialValues: initialValues,
      // validationSchema: signupSchema,
  
      onSubmit : async (values,action) =>{
        const {code,newPassword} = values;
        let data = {code,newPassword};

       console.log(data)
     

       const resetPassword = await axios.put(`${process.env.REACT_APP_HOST}/userapp/auth/reset-password`,data);
       if(resetPassword.data.status==='SUCCESS'){
           action.resetForm();
         setClose(false)
         setOpen(false)
       }
       else
        return false;


       

      }
 
    });

   
      
  return (
    <Box sx={{display:'flex',justifyContent:'center'}}>
      <Box sx={{width:{md:'500px',sm:'400px',xs:'350px'}}}>
        <Box sx={{display:'flex',justifyContent:'space-between',padding:'15px'}}>
            <Typography sx={{fontSize:'12px',color:'green'}}>Forgot Password</Typography>
            <Close onClick={handleClose} sx={{fontSize:'12px'}}/>
        </Box>
        <Divider/>
         <form onSubmit={handleSubmit}  style={{padding:'40px',display:'flex',flexDirection:'column',gap:'20px'}}>
       
        <TextField variant='outlined' label='Enter OTP' type='number' name='code' value={values.code}  sx={{width:'100%',"& fieldset": {height:'50px',borderRadius:'3px'},height:'50px'}} onChange={handleChange} onBlur={handleBlur}></TextField>

        <TextField variant='outlined' label='Reset Password' type='password' name='newPassword' value={values.newPassword}  sx={{width:'100%',"& fieldset": {height:'50px',borderRadius:'3px'},height:'50px'}} onChange={handleChange} onBlur={handleBlur}></TextField>
        
        <Button variant='contained' type='submit' sx={{width:'100%',borderRadius:'3px','&:hover':{background:'black'}}}>RESET PASSWORD</Button>  


      
        </form>
      </Box>
    </Box>
  )
}

export default Block2
