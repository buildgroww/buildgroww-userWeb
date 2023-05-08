import { Box, styled, Typography } from '@mui/material'
import React from 'react'
const Container = styled(Box)(({theme})=>({
display:"flex",
padding:"100px",
justifyContent:"center",
alignItems:"center",
width:'100%',
flexDirection:"column",
gap:"60px",
[theme.breakpoints.down('md')]: {
    padding:'10px 60px',
    
  },
[theme.breakpoints.down('sm')]: {
    padding:'50px 30px',

    }

}))

const List = styled("ul")(({theme})=>({
    display:'flex',
    gap:"30px",
    flexDirection:"column",
    listStyle:"none"
}))

const ListItem = styled("li")(({theme})=>({
     fontSize:"16px",
     textAlign:"justify",
     fontWeight:"400",
      lineHeight:"16px",
      "&::before":{
          color: "#063992",
        "content": '"\\2022"',
        width:"2em",
        fontSize:"25px",
        display:"inline-block",
        [theme.breakpoints.down('md')]: {
            width:"1em"
        }
    },

}))


const Block5 = () => {
  return (
    <Container>
        <Box sx={{display:"flex", justifyContent:"center", flexDirection:'column', gap:'50px'}} >
            <Typography variant="h3" sx={{fontSize:"30px",color:"#0F73EE", fontStyle:"Roboto", fontWeight:"500",textAlign:{md:"left", xs:"center"} }}>Benefits of Website Maintenance</Typography>
            <List >
                <ListItem>Provide your website visitors with updated information on products & services, specials, hours of operations and other key information about your business.</ListItem>
                <ListItem>Sync up your offline marketing programs and offers with your online presence.</ListItem>
                <ListItem>Provide a reason for clients and site visitors to browse your site again.</ListItem>
                <ListItem>Website maintenance service helps you to enhance your online presence, user engagement and increase your profits.</ListItem>

            </List>
        </Box>

        <Box sx={{display:"flex", justifyContent:"center", flexDirection:'column', gap:'50px'}} >
            <Typography variant="h3" sx={{fontSize:"30px",color:"#0F73EE", fontStyle:"Roboto", fontWeight:"500", textAlign:{md:"left", xs:"center"}  }}>Benefits of Website Maintenance</Typography>
            <List >
                <ListItem>Provide your website visitors with updated information on products & services, specials, hours of operations and other key information about your business.</ListItem>
                <ListItem>Sync up your offline marketing programs and offers with your online presence.</ListItem>
                <ListItem>Provide a reason for clients and site visitors to browse your site again.</ListItem>
                <ListItem>Website maintenance service helps you to enhance your online presence, user engagement and increase your profits.</ListItem>

            </List>
        </Box>

        <Box sx={{display:"flex", justifyContent:"center", flexDirection:'column', gap:'50px'}} >
            <Typography variant="h3" sx={{fontSize:"30px",color:"#0F73EE", fontStyle:"Roboto", fontWeight:"500", textAlign:{md:"left", xs:"center"} }}>Benefits of Website Maintenance</Typography>
            <List >
                <ListItem>Provide your website visitors with updated information on products & services, specials, hours of operations and other key information about your business.</ListItem>
                <ListItem>Sync up your offline marketing programs and offers with your online presence.</ListItem>
                <ListItem>Provide a reason for clients and site visitors to browse your site again.</ListItem>
                <ListItem>Website maintenance service helps you to enhance your online presence, user engagement and increase your profits.</ListItem>

            </List>
        </Box>

        <Box sx={{display:"flex", justifyContent:"center", flexDirection:'column', gap:'50px'}} >
            <Typography variant="h3" sx={{fontSize:"30px",color:"#0F73EE", fontStyle:"Roboto", fontWeight:"500", textAlign:{md:"left", xs:"center"} }}>Benefits of Website Maintenance</Typography>
            <List >
                <ListItem>Provide your website visitors with updated information on products & services, specials, hours of operations and other key information about your business.</ListItem>
                <ListItem>Sync up your offline marketing programs and offers with your online presence.</ListItem>
                <ListItem>Provide a reason for clients and site visitors to browse your site again.</ListItem>
                <ListItem>Website maintenance service helps you to enhance your online presence, user engagement and increase your profits.</ListItem>

            </List>
        </Box>

        <Box sx={{display:"flex", justifyContent:"center", flexDirection:'column', gap:'50px'}} >
            <Typography variant="h3" sx={{fontSize:"30px",color:"#0F73EE", fontStyle:"Roboto", fontWeight:"500", textAlign:{md:"left", xs:"center"}  }}>Benefits of Website Maintenance</Typography>
            <List >
                <ListItem>Provide your website visitors with updated information on products & services, specials, hours of operations and other key information about your business.</ListItem>
                <ListItem>Sync up your offline marketing programs and offers with your online presence.</ListItem>
                <ListItem>Provide a reason for clients and site visitors to browse your site again.</ListItem>
                <ListItem>Website maintenance service helps you to enhance your online presence, user engagement and increase your profits.</ListItem>

            </List>
        </Box>
    </Container>
  )
}

export default Block5