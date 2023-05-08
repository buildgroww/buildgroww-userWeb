import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { CgLogOut } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addProduct } from '../../../../redux/cartRedux'
import { clearOrders } from '../../../../redux/orderRedux'
import { logOut, selectUser } from '../../../../redux/userRedux'
import Cookies from 'js-cookie';

export default function Footer() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // logout();
    dispatch(logOut());
    Cookies.remove('authCookie');
    dispatch(addProduct({"products":[],"id":null}));
    dispatch(clearOrders());
    localStorage.clear();
    navigate("/")
    window.location.reload();
    
  }
  return (
    <Box >
      {user.currentUser === null || user.currentUser.data === null ? null : <List>
      <ListItem sx={{alignItems:'center',gap:'8px'}} button onClick={handleLogout}>
                <CgLogOut style={{fontSize:'25px'}}/>
              <ListItemText sx={{">span":{fontSize:'17px'}}} primary="Logout" />
            </ListItem> 
      </List>}
      <Box sx={{padding:'0 0 15px 15px'}}>
          <Box sx={{display:'flex',alignItems:'center',gap:'10px'}}>
              <Typography>privacy policy</Typography>
              <Typography>t&c</Typography>
          </Box>
          <Typography>v1.0.0</Typography>
      </Box>
    </Box>
  )
}
