import { Backdrop, Box, CircularProgress, styled } from '@mui/material'
import React, { useState } from 'react'
import LeftBar from './blockleft/LeftBar'
import RightBar from './blockright/RightBar'
import { useSelector } from 'react-redux'

const MainContainer = styled(Box)(({theme})=>({


}))
const Wrapper = styled(Box)(({theme})=>({
  display:"flex",
  margin :"0px 40px",
  height:"auto",
  [theme.breakpoints.down('md')]: {
    margin:"0px 10px"
   },
   [theme.breakpoints.down('sm')]: {
    margin:"0px 0px",
    flexDirection:"column"
   },
   
}))


const ProductIndex = ({product, rating, setRating}) => {
  const products = useSelector((state)=>state.product.products)
  // console.log(products)
  const [loading,setLoading] = useState(false);

  return (
    <MainContainer>
        <Wrapper>
            <LeftBar product ={product} setLoading={setLoading}/>
            <RightBar product = {product} setRating={setRating} rating={rating}  />
        </Wrapper>

        <Backdrop
        sx={{ color: (theme) => theme.colors.success.dark , zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress sx={{width:'50px!important',height:'50px!important'}} color="inherit" />
      </Backdrop>

    </MainContainer>
  )
}

export default ProductIndex