import React from 'react'
import Block1 from '../../contents/product/block1/Block1'
import Block2 from '../../contents/product/block2/Block2'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import { Box } from '@mui/material'


function Product() {
  return (
    <>
    <Navbar menu={'block'} arrow={'none'} logo={'Build Groww'}/>
    <Box sx={{marginTop:"100px"}}>
    <Block1/>
    <Block2/>
    </Box>
    </>
  )
}

export default Product