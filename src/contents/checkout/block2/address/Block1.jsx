import { Box, Button, FormControlLabel, Radio, useTheme } from '@mui/material'
import React,{useState} from 'react'

function Block1({item,index,setShow,setHide,setActiveStep,defaultValue,setDefaultValue}) {
    

    const handleDeliver = ()=>{
        setActiveStep(1);
        setShow('none');
        setHide('block');
    }

    const handleAddressChange = (e) =>{
        e.preventDefault();
        setDefaultValue(e.target.value)
        console.log(defaultValue);
    }

    const theme = useTheme();
  return (
    <Box sx={{display:'flex',padding:'0 20px',
            background:`${theme.colors.alpha.white[100]}`,border:`1px solid ${theme.colors.alpha.black[10]}`,}}>
              <FormControlLabel sx={{display:'block',width:'5%'}} value={index} control={<Radio  onChange={handleAddressChange}/>} />
              <Box sx={{display:'flex',width:'95%',flexDirection:'column',}}>
                  <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                      {/* <Box sx={{display:'flex',gap:'5px'}}>
                          <Typography variant='span' sx={{fontSize:'15px',fontWeight:500,marginLeft:{sm:'0',xs:'5px'}}}>Nitish Kumar</Typography>
                          <Box sx={{width:'50px',height:'25px',background:`${theme.colors.alpha.black[10]}`,textAlign:'center'}}>Home</Box>
                          <Typography variant='span' sx={{fontSize:'15px',fontWeight:500,display:{sm:'block',xs:'none'}}}>+919999999999</Typography>
                      </Box> */}
                      <Box sx={{fontSize:'16px',fontWeight:500}}>{item?.locality}, {item?.city}, {item?.state} - {item?.zipcode}</Box>
                      <Box>
                          <Button variant='text'>Edit</Button>
                      </Box>
                  </Box>
                 {defaultValue===index ? <Box sx={{marginBottom:'20px'}}>
                      <Button sx={{borderRadius:'5px'}} variant='contained' onClick={handleDeliver}>Deliver Here</Button>
                  </Box> : null}
              </Box>
          </Box>
  )
}

export default Block1