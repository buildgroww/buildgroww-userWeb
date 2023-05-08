import { Button, TextField, Typography, useTheme, Drawer} from '@mui/material'
import { Box } from '@mui/system'
import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';

import LeftBar from '../blockLeft/LeftBar';

export default function SearchBar({setSearchOrder}) {
    const [open, setOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const handleOpen = ()=>{
        setOpen(true);
    };

    const handleClose = ()=>{
        setOpen(false);
    }

    const theme = useTheme();
  return (
    <Box sx={{width:{sm:'100%',xs:'100%'},display:'flex',padding:{sm:'0',xs:'10px'},margin:{sm:'0 30px',xs:'0'},position:{sm:'static',xs:'fixed'},top:{sm:'0',xs:'100px'},zIndex:100,background:`${theme.colors.alpha.white[100]}`,}}>
        <Box sx={{display:'flex',flex:'10',border:`1px solid ${theme.colors.alpha.black[50]}`,}}>
            <SearchIcon sx={{ marginTop:'6px',marginLeft:'10px', color: `${theme.colors.alpha.black[50]}`}}/>
            <TextField value={searchText} onChange={(e)=>{setSearchText(e.target.value);}} sx={{width:'100%',borderRadius:'5px',"& fieldset": { border: 'none' }, '& .MuiInputBase-input': {
            padding: "8px",width:'100%'}}} placeholder='Search your orders here'></TextField>
            {searchText!=="" ?<Button onClick={()=>{setSearchText(""); setSearchOrder("");}} sx={{color:`${theme.colors.alpha.black[100]}`}} variant='text'>Clear <ClearIcon/></Button>:null}
        </Box>
        <Button onClick={()=>{ 
            console.log(searchText)
            if(searchText!==""){
                setSearchOrder(searchText); 
            }
            }} sx={{display:{sm:'block',xs:'none'},flex:'2',borderRadius:'5px'}} variant='contained'>Search</Button>
        <Box onClick={handleOpen} sx={{position:'relative',display:{sm:'none',xs:'flex'},flex:'4',gap:'5px',alignItems:'center',justifyContent:'center'}}>
            <FilterListIcon sx={{fontSize:'28px'}}/>
            <Typography>Filters</Typography>
        </Box>
        <Drawer anchor='right' open={open} onClose={handleClose} transitionDuration={{enter:400 , exit:400}} ModalProps={{sx:{position:'absolute'}}}>
            <LeftBar/>
        </Drawer>
    </Box>
  )
}
