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
  };
  return (
    <>
        <Card >
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
          </Box>
     </Card>
    </>
  )
}

export default Block5