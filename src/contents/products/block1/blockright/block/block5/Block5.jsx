import React, { useState } from 'react'
// import PropTypes from 'prop-types';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import CloseIcon from '@mui/icons-material/Close';
// import { ArrowForward } from '@mui/icons-material'
import { Box, Button, Card, Checkbox, FormControlLabel, IconButton, styled, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//     '& .MuiDialogContent-root': {
//       padding: theme.spacing(2),
//     },
//     '& .MuiDialogActions-root': {
//       padding: theme.spacing(1),
//     },
//   }));
  
//   function BootstrapDialogTitle(props) {
//     const { children, onClose, ...other } = props;
  
//     return (
//       <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//         {children}
//         {onClose ? (
//           <IconButton
//             aria-label="close"
//             onClick={onClose}
//             sx={{
//               position: 'absolute',
//               right: 8,
//               top: 8,
//               color: (theme) => theme.palette.grey[500],
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//         ) : null}
//       </DialogTitle>
//     );
//   }
  
//   BootstrapDialogTitle.propTypes = {
//     children: PropTypes.node,
//     onClose: PropTypes.func.isRequired,
//   };

function Block5({addOn,setAddOn}) {
    // const [open, setOpen] = useState(false);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const addon = useSelector((state)=>state.addon)

  const handleChange = (e,id) => {
     if(!addOn.includes(id)){
       setAddOn((prev) => [...prev,id])
     } else{
      setAddOn((prev) => prev.filter((item) => item!==id))
     }
     console.log(addOn)
  };
  return (
    <>
        <Card >
      {/* <Button variant="contained" sx={{fontSize:"18px", background:"teal !important", borderRadius:"0px !important", width:"120px !important", height:"50px !important", "&:hover":{background:"white !important", color:"teal", transition:"all 0.5s linear alternate", letterSpacing:"2px"}  }} size='large' endIcon={<ArrowForward/>} onClick={handleClickOpen} >Next</Button> */}
      {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" sx={{textAlign:"center", fontSize:"20px", padding:"10px 50px" , background:"#eee"}} onClose={handleClose}>
           Select Add-ons Integrations
        </BootstrapDialogTitle>
        <DialogContent dividers> */}
        <Box sx={{display:"flex", alignItems:"flex-end", justifyContent:"center"}} >
        <Typography sx={{fontSize:"24px",fontWeight:"500", color:"teal", letterSpacing:"1px"}} > ₹1000.00</Typography>
        <Typography sx={{fontSize:"14px",fontWeight:"500", color:"gray"}} > /Service</Typography>
        </Box>

        <Box  sx={{display:"flex",marginLeft:{sm:'40px',xs:'30px'}, flexDirection:"column"}} >
        {addon.addons && addon.addons.data && addon.addons.data.data && addon.addons.data.data.map((item,index)=>{
          const isSelected = addOn.includes(item.id);
           return  (<FormControlLabel
            value={`${item.name}`}
            control={
            <Checkbox 
              checked={isSelected}
              onChange={(e)=>handleChange(e,item.id)}
              value={isSelected}
              />}
            label={`${item.name}`}
            labelPlacement={`${item.name}`}
            />
           )  }  )}
        
          {/* <FormControlLabel
          value="en"
          control={<Checkbox onChange={(e)=>handleChange(e,12)}/>}
          label="Payment Integration"
          labelPlacement="end"
          />
          <FormControlLabel
          value="e"
          control={<Checkbox onChange={(e)=>handleChange(e,1)}/>}
          label="Payment Integration"
          labelPlacement="end"
          />
          <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Payment Integration"
          labelPlacement="end"
          />
          <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Payment Integration"
          labelPlacement="end"
          />
          <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Payment Integration"
          labelPlacement="end"
          />
          <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Payment Integration"
          labelPlacement="end"
          />
          <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Payment Integration"
          labelPlacement="end"
          /> */}
          </Box>

        {/* </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog> */}
     </Card>
    </>
  )
}

export default Block5