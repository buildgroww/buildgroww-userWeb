import { Button, Stack ,styled, Typography, useTheme} from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/userRedux";

const Img = styled("img")(({ theme }) => ({
    width:'45px',
    // clipPath: "circle(50%)"
}));

export default function Header() {
    const theme = useTheme();
    const user = useSelector(selectUser);
  return (
    
    <Stack sx={{flex:'1',width:'100%',color:`${theme.header.textColor}`,background:`${theme.header.background}`,minHeight:'56px',maxHeight:'60px', flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}} >
        <PersonIcon/>
       {user.currentUser === null ? <Link to={'/login'} style={{textDecoration:'none'}}>
        <Button sx={{cursor:'none', color:`${theme.header.textColor}`}}>
            Login & Signup
        </Button>
        </Link> : 
        <Typography>{user.currentUser.data.name
          ? user.currentUser.data.name
          : "TechPyro User"}</Typography>}
        <Img src="/images/mainLogo/logo1.png" alt="logo"/>
    </Stack>
  )
}
