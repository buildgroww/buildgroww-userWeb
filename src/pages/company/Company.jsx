import React from 'react'
import Block1 from '../../contents/company/block1/Block1'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import { Box } from '@mui/material'
function Company() {
  return (
    <>
    <Navbar menu={'block'} arrow={'none'} logo={'Build Groww'}/>
    <Box sx={{marginTop:"100px"}}>
    <Block1/>
    </Box>
    </>
  )
}

export default Company