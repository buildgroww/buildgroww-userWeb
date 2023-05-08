import React from 'react'
import Sliders from './slider/Sliders'
import { productRelated } from '../../../constants/productRelated'
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
const Block6 = ({product, products}) => {
  console.log(product)
  console.log(products)
  return (
    <Container >
        <Sliders sliderData={products && products.data.data} />
    </Container>
  )
}

export default Block6