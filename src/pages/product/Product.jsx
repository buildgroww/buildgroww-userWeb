import React, { useEffect } from 'react'
import Block1 from '../../contents/product/block1/Block1'
import Block2 from '../../contents/product/block2/Block2'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import { Box, Divider } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../redux/slices/products'


function Product() {
  const id ="64c3873cfbe11e10988ff1ab";
  const dispatch = useDispatch()
  const fetchProduct = async()=>{
    const query = {
      "shop":id
    }
  const result =  await dispatch(getProducts(query))
  console.log(result);
  }


  useEffect(() => {
    fetchProduct();
  }, [])
  
  return (
    <>
    <Navbar menu={'block'} arrow={'none'} logo={'Build Groww'}/>
    <Box sx={{marginTop:"70px"}}>
    <Block1/>
    <Divider/>
    <Block2/>
    </Box>
    </>
  )
}

export default Product