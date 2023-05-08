import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography,useTheme, Zoom } from '@mui/material'
import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/userRedux';
import { updateUser } from '../../../redux/apiCalls';
import { useSnackbar } from 'notistack';

export default function Block1() {
    const theme = useTheme();
    const user = useSelector(selectUser)
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(null);
    const [name, setName] = useState((user.currentUser?.data?.name)?(user.currentUser?.data?.name):"TechPyro User");
    // const [value, setValue] = useState(dayjs('dd-mm-yyyy'));
    // const [lastName, setLastName] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSave = async() => {
    let data = {"name":`${name}`};
    console.log(user.currentUser.data.id)
    const res = await updateUser(user.currentUser.data.id,data,dispatch)
    if(res.data?.status==='SUCCESS'){
      enqueueSnackbar('Your name updated successfully!', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
        });
    }
    else{
      console.log(res)
      enqueueSnackbar('Some error occoured', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
        });
    }
    setOpen(false);
  };


  
  return (
        <Box >
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Typography sx={{fontWeight:500,fontSize:'18px'}}>Basic Details</Typography>
                <Button sx={{"&:hover":{background:'none'}}} variant='text' onClick={handleClickOpen}>Edit</Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle sx={{fontSize:'20px'}}>Update Basic Details</DialogTitle>
                    <DialogContent >
                            <TextField autoFocus onChange={handleChange} defaultValue={name} margin="dense" id="name" label="Name" type="name" fullWidth variant="standard"/>
                            {/* <TextField onChange={(e)=>{setLastName(e.target.value)}} defaultValue={lastName} margin="dense" id="name" label="Last Name" type="name" fullWidth variant="standard"/> */}
                     
                        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker label="Date Of Birth" inputFormat="DD/MM/YYYY" value={value} onChange={handleChange} renderInput={(params) => <TextField sx={{width:'100%'}} {...params} variant='standard'/>}/>                      
                        </LocalizationProvider> */}
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={handleSave}>Save</Button>
                    </DialogActions>
                </Dialog>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:'20px',padding:'20px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px',color:`${theme.colors.alpha.black[50]}`}}>
                <Box sx={{display:'flex',alignItems:{sm:'center',xs:'flex-start'},flexDirection:{sm:'row',xs:'column'},gap:{sm:'0',xs:'5px'}}} >
                    <Typography sx={{width:{md:'130px',sm:'100px',xs:'100%'},color:`${theme.colors.alpha.black[100]}`}} variant='span'>Name</Typography>
                    <Box sx={{width:{md:'calc(100% - 130px)',sm:'calc(100% - 100px)',xs:'100%'},height:{md:'40px',sm:'35px',xs:'32px'},padding:'5px 10px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px'}}>{name}</Box>
                </Box>
                {/* <Box sx={{display:'flex',alignItems:{sm:'center',xs:'flex-start'},flexDirection:{sm:'row',xs:'column'},gap:{sm:'0',xs:'5px'}}}>
                    <Typography sx={{width:{md:'130px',sm:'100px',xs:'100%'},}} variant='span'>Last Name</Typography>
                    <Box sx={{width:{md:'calc(100% - 130px)',sm:'calc(100% - 100px)',xs:'100%'},height:{md:'40px',sm:'35px',xs:'32px'},padding:'5px 10px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px'}}>{lastName}</Box>
                </Box> */}
                {/* <Box sx={{display:'flex',alignItems:{sm:'center',xs:'flex-start'},flexDirection:{sm:'row',xs:'column'},gap:{sm:'0',xs:'5px'}}}>
                    <Typography sx={{width:{md:'130px',sm:'100px',xs:'100%'},color:`${theme.colors.alpha.black[100]}`}} variant='span'>Date Of Birth</Typography>
                    <Box sx={{width:{md:'calc(100% - 130px)',sm:'calc(100% - 100px)',xs:'100%'},height:{md:'40px',sm:'35px',xs:'32px'},padding:'5px 10px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px'}}>dd-mm-yyyy</Box>
                </Box> */}
            </Box>
        </Box>
  )
}
