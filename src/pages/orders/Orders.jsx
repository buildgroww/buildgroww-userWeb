import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import {  navData } from '../../constants/Constant'
import Block1 from '../../contents/orders/order/block1/Block1'
import Block from '../../contents/orders/order/emptyOrder/Block'
import PageHeader from '../../contents/orders/order/pageHeader/PageHeader'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import { orderValue } from '../../redux/orderRedux'
import Footer from '../../components/footer/Footer'

const Orders = () => {
  const order = useSelector(orderValue);
  return (
    <>
        <Navbar menu={'none'} arrow={'block'} logo={'TechPyro'}/>
        <PageHeader navData={navData}/>
        {Object.keys(order.products).length !== 0 ? <Block1/> : <Box sx={{display:'flex',overflow:'hidden',flexDirection:{md:'row',xs:'column'},width:'100%', padding:{md:'0 10%',sm:'0 8%',xs:'0 5%'}}}>
       <Block/>
      </Box> }
      <Footer/>
    </>
  )
}

export default Orders