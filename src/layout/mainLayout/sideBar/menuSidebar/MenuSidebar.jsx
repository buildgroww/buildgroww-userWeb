import React from 'react'
import {
  Box,
      Divider,
      List,
      ListItem,
      ListItemText,
    } from "@mui/material";
    import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
    import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
    import CategoryIcon from '@mui/icons-material/Category';
    import MoreIcon from '@mui/icons-material/More';
    import LanguageIcon from '@mui/icons-material/Language';
    import FilterFramesIcon from '@mui/icons-material/FilterFrames';
    import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
    import FavoriteIcon from '@mui/icons-material/Favorite';
    import PersonIcon from '@mui/icons-material/Person';
    import NotificationsIcon from '@mui/icons-material/Notifications';
    import PhoneIcon from '@mui/icons-material/Phone';
    import ContactPageIcon from '@mui/icons-material/ContactPage';
    import GroupsIcon from '@mui/icons-material/Groups';
    import EditIcon from '@mui/icons-material/Edit';
import { Link, useNavigate } from 'react-router-dom';


export default function MenuSidebar() {

  const navigate = useNavigate();
  return (
    <Box sx={{fontFamily:'Roboto',display:'flex',flexDirection:'column',gap:'5px'}}>
      <Box sx={{fontSize:'17px',marginLeft:'5px',fontWeight:500,fontFamily:'Roboto'}}>Profile</Box>
    <List sx={{width:'100%',flex:'9',padding:'0',fontFamily:'Roboto'}} component="nav" aria-label="mailbox folders">
        {/* <ListItem button onClick={()=>{navigate('/services-maintenance')}}>
          <SubscriptionsIcon/>
          <ListItemText primary="Services" />
        </ListItem>
        <Divider />
        <ListItem button>
          <GridViewRoundedIcon/>
          <ListItemText primary="All Categories" />
        </ListItem>
        <ListItem button onClick={()=>{navigate('/websites')}}>
          <CategoryIcon/>
          <ListItemText primary="Trending Websites" />
        </ListItem>
        <ListItem button>
          <MoreIcon/>
          <ListItemText primary="More on TechPyro" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <LanguageIcon/>
          <ListItemText primary="Choose Language" />
        </ListItem>
        <Divider light /> */}
        <ListItem>
          <PersonIcon/>
          <ListItemText primary="My Account" />
        </ListItem>
        <Divider/>
        <ListItem button>
          <FilterFramesIcon/>
          <ListItemText primary="My Orders" />
        </ListItem>
        <Divider/>
        <ListItem button onClick={()=>{navigate('/cart')}}>
          <ShoppingCartIcon/>
          <ListItemText primary="My Cart" />
        </ListItem>
        {/* <Divider/>
        <ListItem button>
          <FavoriteIcon/>
          <ListItemText primary="My Wishlist" />
        </ListItem>
        <Divider/>
        <ListItem button>
          <NotificationsIcon/>
          <ListItemText primary="My Notifications" />
        </ListItem> */}
        {/* <Divider/> */}
      </List> 
      <Box sx={{fontSize:'17px',marginLeft:'5px',fontWeight:500,}}>Services</Box>
    <List sx={{width:'100%',flex:'9',padding:'0'}} component="nav" aria-label="mailbox folders">
        <ListItem button onClick={()=>{navigate('/services-maintenance')}}>
          <SubscriptionsIcon/>
          <ListItemText primary="Services and maintenance" />
        </ListItem>
        <Divider/>
        <ListItem button onClick={()=>{navigate('/packages')}}>
          <GridViewRoundedIcon/>
          <ListItemText primary="Packages" />
        </ListItem>
        
      </List>
      <Box sx={{fontSize:'17px',marginLeft:'5px',fontWeight:500,}}>Contact</Box>
    <List sx={{width:'100%',flex:'9',padding:'0'}} component="nav" aria-label="mailbox folders">
        <a href="tel:7300639790" style={{textDecoration:'none'}}>
        <ListItem button>
          <PhoneIcon/>
          <ListItemText primaryTypographyProps={{fontSize:'18px',fontWeight:600}} primary="+91-7300639790" />
        </ListItem>
        </a>
        <Divider/>
        <a href='https://contact.techpyro.com' style={{textDecoration:'none'}}>
        <ListItem button>
          <ContactPageIcon/>
          <ListItemText primary="Contact Us" />
        </ListItem>
        </a>
      </List>
      <Box sx={{fontSize:'17px',marginLeft:'5px',fontWeight:500,}}>Company</Box>
    <List sx={{width:'100%',flex:'9',padding:'0'}} component="nav" aria-label="mailbox folders">
      <a href='https://about.techpyro.com' style={{textDecoration:'none'}}>
        <ListItem button>
          <GroupsIcon/>
          <ListItemText primary="About Us" />
        </ListItem>
        </a>
        <Divider/>
        <a href='https://blog.techpyro.com' style={{textDecoration:'none'}}>
        <ListItem button>
          <EditIcon/>
          <ListItemText primary="Blogs" />
        </ListItem>
        </a>
      </List>
      <Box sx={{fontSize:'17px',marginLeft:'5px',fontWeight:500,}}>Help</Box>
    <List sx={{width:'100%',padding:'0'}} component="nav" aria-label="mailbox folders">
        <ListItem button>
          {/* <PhoneIcon/> */}
          <ListItemText primary="Help Center" />
        </ListItem>
        <Divider/>
        <ListItem button>
          {/* <ContactPageIcon/> */}
          <ListItemText primary="Legal" />
        </ListItem>
      </List>
    </Box>
  )
}
