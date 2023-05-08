import { Box, Button, Card, Typography ,styled,useTheme} from '@mui/material'
import React, { useEffect } from 'react'
import { CurrencyRupee } from "@mui/icons-material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Link, useNavigate } from 'react-router-dom';
import StarRateIcon from '@mui/icons-material/StarRate';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useDispatch } from 'react-redux';
import { updateIndex } from '../../../../../redux/orderRedux';


const Image = styled("img")(({ theme }) => ({
    width: "50%",
    height: "100%",
    objectFit:"cover",
    "@media (max-width: 960px)": {
      width: "50%",
    },
    "@media (max-width: 600px)": {
      width: "30%",
    },
  }));

export default function Item({product,index,l}) {
  console.log(product)
    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let addonPrice = 0;
    product.addonId.map((item)=>{
      addonPrice += item.price
    })
  return (
    <>
    {/* // <Link   style={{textDecoration:'none'}}> */}
    <Box sx={{position:"relative"}} >
    <Card 
    onClick={()=>{
      
      dispatch(updateIndex({index,l}));
      navigate('/orderdetails');
    }}
    sx={{display:'flex',
    cursor:'pointer',
    border:'0.5px solid rgb(159 162 191 / 50%)',
    borderRadius:'5px',
    flex:'3',height:{sm:'200px',xs:'120px'},
    margin:{sm:'30px',xs:'0'},boxShadow:'none',
    "&:hover":{transition:'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    boxShadow:'0px 0px 16px 6px rgb(159 162 191 / 15%), 0px 0px 5px 5px rgb(159 162 191 / 25%)'}}}>
    <Image src={`${product?.productId !==undefined ? product.productId.productImages[0].path : '/images/package1.jpg'}`} alt="product" />
      <Box
        sx={{
          marginTop: { md: "10px", xs: "5px" },
          width: { md: "50%", xs: "100%" },
          height: { md: "100%", xs: "50%" },
          display: "flex",
          flexDirection: "column",
          gap:{sm:'10px',xs:'5px'},
          padding:{sm: "0 30px",xs:'0 5px'},
        }}
        >
            <Typography sx={{ fontSize: {sm:"18px",xs:'14px'} }}>
              {product?.productId !==undefined ? product?.productId?.title?.shortTitle : product?.packageId?.name}
            </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { lg: "20px", md: "18px", sm: "16px", xs: "15px" },
                  display: "flex",
                  alignItems: "center",
                }}
                >
                <CurrencyRupee sx={{ fontSize: "14px" }} /> {(product.packageId.price * product.qty) + addonPrice}
              </Typography>
              <Typography sx={{ fontWeight: 500 }}> <FiberManualRecordIcon sx={{width:'12px',height:'12px',color:`${theme.colors.success.dark}`}} fontSize='small'/> Delivered on 21st jan</Typography>
              
          </Box>
          <Box sx={{display:'flex',alignItems:'center',marginRight:'10px'}}>
            <KeyboardArrowRightIcon fontSize='medium'/>
          </Box>
      </Card>
              <Link to={`/rateproduct/${product.productId?.id }`}  style={{textDecoration:'none',display:'flex',gap:'5px',color:`${theme.colors.primary.dark}`,fontWeight:500, zIndex:"1000", position:"absolute", bottom:"20%", right:"30.5%"}} >  <StarRateIcon fontSize='small'/> Rate and Review Product</Link>
    {/* // </Link> */}
                  </Box>
                </>
  )
}
