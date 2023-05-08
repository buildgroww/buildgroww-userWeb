
import { Backdrop, Box, Checkbox, CircularProgress, FormControlLabel, FormGroup,  styled,Typography, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./leftbar.css"
const LeftContainer = styled(Box)(({theme})=>({
    flex:"1",
    width:"100%",
    display:"flex",
    flexDirection:"column",
    background:"#fff",
    justifyContent:"space-between",
    alignItems:"flex-start",
    height:'500px',
    position:'sticky',
    top:'70px',
    paddingLeft:"30px",
     paddingTop:"10px",
     [theme.breakpoints.down('md')]:{
        position:'static',
        justifyContent:'flex-start',
        margin:'20px 50px 0 0'
     }
    }))
    const LeftItems = styled(Box)((theme)=>({
       width:"100%",
       marginBottom:"5px"
        }))

        // function valuetext(value) {
        //     return `Rs${value}`;
        //   }
          
const LeftBar = ({setFilterList}) => {
  // const theme = useTheme();
  
    const [value, setValue] = useState({"orderConfirmed":false,"delivered":false,"cancel":false,"refunded":false});

    useEffect(() => {
      if(value)
        setFilterList(value);
    }, [value]) // eslint-disable-line react-hooks/exhaustive-deps
    

    // const handleChange = (event, newValue) => {
    //   setValue(newValue);
    // };
    // const [age, setAge] = React.useState('');
    // const [open, setOpen] = React.useState(false);
  
    const handleConfirmed = (e) => {
      setValue({...value,"orderConfirmed":e.target.checked});
    };
    const handleDelivered= (e) => {
      setValue({...value,"delivered":e.target.checked});
    };
    const handleCancel = (e) => {
      setValue({...value,"cancel":e.target.checked});
    };
    const handleReturn = (e) => {
      setValue({...value,"refunded":e.target.checked});
    };
  
      
  return (
    <LeftContainer>

    <LeftItems>
    <Typography sx={{display:{md:'block',xs:'none'},fontSize:"20px", marginBottom:"5px"}} variant="h6">Filters</Typography>
    <Typography variant="body2" sx={{fontSize:"16px",letterSpacing:"0.8px", marginBottom:"5px", fontWeight:"500"}}>ORDER STATUS</Typography>
    <Box sx={{display:"flex", alignItems:"center"}} >
    <FormGroup>
      <FormControlLabel control={<Checkbox onChange={(e)=>handleConfirmed(e)} />} label= {`On the way`} />
      <FormControlLabel control={<Checkbox onChange={(e)=>handleDelivered(e)} />} label={`Delivered`} />
      <FormControlLabel control={<Checkbox onChange={(e)=>handleCancel(e)} />} label= {`Cancelled`} />
      <FormControlLabel control={<Checkbox onChange={(e)=>handleReturn(e)} />} label={`Returned`} />
    </FormGroup>
    </Box>
    </LeftItems>

    <LeftItems>
    <Box width="100%" height="1px" sx={{background:"#EEEEEE", marginBottom:"5px"}}></Box>
    <Typography variant="body2" sx={{fontSize:"16px",letterSpacing:"0.8px", marginBottom:"5px", fontWeight:"500"}}>ORDER TIME</Typography>
    <Box sx={{display:"flex", alignItems:"center"}} >
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label= {`Last 30 days`} />
      <FormControlLabel control={<Checkbox />} label={`2022`} />
      <FormControlLabel control={<Checkbox />} label= {`2021`} />
      <FormControlLabel control={<Checkbox />} label={`2020`} />
      <FormControlLabel control={<Checkbox />} label={`older`} />
    </FormGroup>
    </Box>
    </LeftItems>
</LeftContainer>
  )
}

export default LeftBar