import { Box, Button, styled, Typography,useTheme } from '@mui/material'
import React from 'react'
import {TbFileInvoice} from 'react-icons/tb'
import { useSelector } from 'react-redux';
import { orderValue } from '../../../../redux/orderRedux';
import { selectUser } from '../../../../redux/userRedux';

const Container = styled(Box)(({ theme }) => ({
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    margin:'20px 100px',
    "@media (max-width: 960px)": {
        margin:'20px 70px'
    },
    "@media (max-width: 800px)": {
        margin:'20px 20px'
    },
    "@media (max-width: 600px)": {
        flexDirection:'column',
    },
  }));

export default function Block1() {
    const theme = useTheme();
    const order = useSelector(orderValue);
    const user = useSelector(selectUser);
  return (
    <Container sx={{padding:{sm:'20px 30px',xs:'20px'},background:`${theme.colors.alpha.white[100]}`,boxShadow:`${theme.colors.shadows.card}`}}>
            <Box sx={{paddingBottom:'20px',display:'flex',flexDirection:'column',gap:'10px',width:{sm:'50%',xs:'100%'},borderRight:{sm:'1px solid black',xs:'none'},borderBottom:{sm:'none',xs:'1px solid black'}}}>
                <Typography sx={{fontSize:{md:'20px',sm:'16px',xs:'14px'},fontWeight:400}}>Order ID : techpyro{order.products?.data?.data[order.clickIndex.index]?.id}{order.clickIndex.index}</Typography>
                <Typography sx={{fontSize:'18px',fontWeight:400}}>Delivery Address</Typography>
                <Typography><span style={{fontSize:'16px',fontWeight:500}}>Name : </span> {user.currentUser?.data?.name?user.currentUser.data.name:"TechPyro User"}</Typography>
                <Typography><span style={{fontSize:'16px',fontWeight:500}}>Address : </span> {order.products?.data?.data[order.clickIndex.index]?.address.locality}, {order.products?.data?.data[order.clickIndex.index]?.address.city}, {order.products?.data?.data[order.clickIndex.index]?.address.state}, {order.products?.data?.data[order.clickIndex.index]?.address.country}, {order.products?.data?.data[order.clickIndex.index]?.address.zipcode}</Typography>
                <Typography><span style={{fontSize:'16px',fontWeight:500}}>Contact : </span> {user.currentUser?.data?.phone?user.currentUser.data.phone:user.currentUser.data.email}</Typography>
            </Box>
            
            <Box sx={{display:'flex',alignItems:'center',padding:{md:'0 30px',sm:'0 20px',xs:'20px 0 0 0'},justifyContent:'space-between',gap:{sm:'10px',xs:'0'},width:{sm:'50%',xs:'100%'}}}>
                <Box sx={{display:'flex',gap:'20px',alignItems:'center'}}>
                    <TbFileInvoice style={{fontSize:'30px',fontWeight:'lighter',}}/>
                    <Typography>Download Invoice</Typography>
                </Box>
                <Button variant='outlined' sx={{width:'100px',height:'40px'}}>Download</Button>
            </Box>
    </Container>
  )
}
