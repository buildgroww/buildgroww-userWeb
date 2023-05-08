import React from 'react'
import Sliders from './slider/Sliders'
// import { productRelated } from '../../../constants/productRelated'
import { Box, styled } from '@mui/material'
const Container = styled(Box)(({theme})=>({
    margin:" 0px 40px",
    background:"white",
    [theme.breakpoints.down('md')]: {
      margin:"0px 10px"
   },
   [theme.breakpoints.down('sm')]: {
    margin:"0px 0px"
 },
}))
const Block3 = ({products}) => {
  // console.log(products.data.data)
  return (
    <Container >
        <Sliders sliderData={products && products.data.data} />
    </Container>
  )
}

export default Block3