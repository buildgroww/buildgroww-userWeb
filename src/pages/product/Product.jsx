import React, { useEffect, useState } from 'react'
import Block1 from '../../contents/product/block1/Block1'
import Block2 from '../../contents/product/block2/Block2'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Content from '../../components/content/Content'
import { Box, Divider } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../redux/slices/products'


function Product() {
  const id = window.location.pathname.split('/')[3];
  const dispatch = useDispatch()
  const [page,setPage] = useState(1);

  const fetchProduct = async()=>{
    const query = {
      "shop":id
    }
  const result =  await dispatch(getProducts(query,page))
    console.log(result);
  }


  useEffect(() => {
    fetchProduct();
  }, [page])
  // useEffect(() => {
  //   fetchProduct();
  // }, [])
  
  return (
    <>
    <Navbar menu={'block'} arrow={'none'} logo={'Build Groww'}/>
    <Box sx={{marginTop:"70px"}}>
    <Block1/>
    <Divider/>
    <Block2 page={page} setPage={setPage}/>
    </Box>
    <Content/>
    <Footer/>
    </>
  )
}

export default Product