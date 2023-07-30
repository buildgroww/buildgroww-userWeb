import React from 'react'
import { Add,  } from '@mui/icons-material'
import { Box, Button, Card, CardMedia, Rating, Stack, Typography, styled } from '@mui/material'
import { useSelector } from 'react-redux'
const StyleToolbar = styled(Box)(({theme})=>({
    padding:"0px 120px",
  textAlign:"justify",
  backgroundColor:"#fff",
  [theme.breakpoints.down('md')]: {
    padding:"0px 10px",
    
  } 
  }))
function Block2() {
   //-->redux setup
   const product= useSelector((state)=>state.product)

   const productData = product&&product.products&&product.products.data&&product.products.data.length>0&&product.products.data[0].shop;
  return (
    <StyleToolbar>
      <Box sx={{paddingY:"10px",display:"flex",gap:"25px",alignItems:"center",flexWrap:"wrap"}}>
       <Typography sx={{fontSize:"24px",fontWeight:"600"}}>Our Categories:-</Typography>
        <Box  sx={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
          {productData&&productData.productCategory&& productData.productCategory.length>0&&productData.productCategory
.map((item)=>(
          <Button variant='contained' sx={{borderRadius:"2px",}} key={item.id}>{item&&item.name}</Button>
          ))}
        </Box>
      </Box>
      {product&&product.products&&product.products.data&&product.products.data.length>0&&product.products.data.map((data)=>(
    <Box sx={{paddingY:"10px"}} key={data.id}>
  
      <Card sx={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px",gap:"30px",flexDirection:{md:"row",sm:"row",xs:"column-reverse"},textAlign:{md:"initial",sm:"initial",xs:'center'}}}>
     
            <Box >
            <Typography sx={{fontSize:{md:"32px",sm:"24px",xs:"24px"},fontWeight:'600',}}>{data&&data.title&&data.title.shortTitle} ( {data&&data.subCategory} )</Typography>
              <Typography sx={{fontSize:{md:"20px",sm:"24px",xs:"18px"},fontWeight:"600",}}>
  <span style={{fontSize:'16px',fontWeight:"400"}}>Category : </span> {data&&data.category}
              </Typography>
              <Box sx={{display:"flex",gap:"20px",alignItems:"center",justifyContent:{md:'flex-start',sm:"flex-start",xs:"center"}}}>
              <Typography sx={{fontSize:"30px",paddingY:'5px',fontWeight:'600'}}>₹ {data&&data.price&&data.price.mrp} </Typography>
              <Typography sx={{fontSize:"16px",paddingY:'5px',fontWeight:'600',textDecoration:' line-through',color:'gray'}}>₹ {data&&data.price&&data.price.cost} </Typography>
              </Box>
               <Typography sx={{fontSize:"14px"}}>{data&&data.title&&data.title.longTitle}</Typography>
                  
            </Box>
            <Box sx={{position:"relative",width:{md:300,sm:300,xs:"100%"},height:250}}>
            <CardMedia
            component="img"
            sx={{ width:{md:300,sm:300,xs:"100%"},height:250,borderRadius:"5px" ,objectFit:"cover"}}
            image={data&&data.image}
            alt="Live from space album cover"
          />
          <Box sx={{position:'absolute',bottom:'0px',width:"100%",display:"flex",justifyContent:'center',alignItems:'center'}}>
            <Button startIcon={<Add/>} sx={{color:"#fff",backgroundColor:"green",width:"100%",borderRadius:"0px","&:hover":{
                 backgroundColor:"#339D3A"
                }}}>Add to Cart</Button>
          </Box>
          </Box>
      </Card>
     
    </Box>
     ))} 
        </StyleToolbar>
  )
}

export default Block2