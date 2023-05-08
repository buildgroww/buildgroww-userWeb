import React from 'react'
import { styled } from '@mui/styles'
import { Box, Card, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateQuery } from '../../../../redux/SearchRedux';

const ImageContainer = styled(Card)(({ theme }) => ({
    width:'37vw',
    height:'330px!important',

    "@media (max-width: 1200px)": {
        width:"36vw",
        height:"300px!important",
    },
    [theme.breakpoints.down('md')]: {
        width:"25vw",
        height:"270px!important",
    },
    "@media (max-width: 800px)": {
        width:"26vw",
        height:"250px!important",
    },
    [theme.breakpoints.down('sm')]: {
        width:"40vw",
        height:"220px!important",
    },

}));

const Buttons1 = styled("a")(({theme})=>({
    // marginTop:"20px",
    width: "170px",
    height:"40px",
    color:"teal",
    fontSize:"15px",
    border:"1px solid #087096",
    background:"white",
    borderRadius:"2px",
    textDecoration:"none",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  
    "&:hover":{
      transition:"all 0.2s linear",
      color:"white",
      background:"#087096"
    },
    [theme.breakpoints.down('lg')]: {
      width:"150px",
      height:"40px",
      fontSize:"14px"
    },
    [theme.breakpoints.down('md')]: {
      width:"100px",
      height:"35px",
      fontSize:"13px"
    },
    [theme.breakpoints.down('sm')]: {
      width:"120px",
      height:"35px",
      fontSize:"14px"
    },
  }))

export default function Item({posterLinks}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (posterLinks)=>{
      dispatch(updateQuery(`${posterLinks?.subCategory} ${posterLinks?.category}`))
      navigate('/products')
  }
  return (
    <ImageContainer onClick={()=>handleClick(posterLinks)} sx={{position:'relative', margin:'5px 10px', borderRadius:'5px'}}>
        <img style={{width:'100%',  objectFit:'cover'}} src={posterLinks && posterLinks?.productImages[0]?.path} alt="card"/>
        <Box sx={{position:'absolute', top:{md:'83%',sm:'76%',xs:'73%'} , paddingLeft:'26px',background:'#fff',opacity:'0.7', left: 0,right:0 ,width:'100%',}}>
        </Box>   
        <Box sx={{display:'flex',flexDirection:{md:'row',xs:'column'},justifyContent:'space-between',alignItems:'center',position:'absolute', top:{md:'83%',sm:'76%',xs:'73%'} , padding:{md:'0 26px',xs:'0 5px'}, left: 0,right:0 ,width:'100%',}}>
            {/* <Typography sx={{fontSize:{md:'16px',sm:'14px',xs:'13px'}, fontWeight: 500, }}>{posterLinks.category.type}</Typography> */}
            <Typography sx={{fontSize:{md:'16px',sm:'14px',xs:'13px'}, fontWeight: 500,}}>Rs {posterLinks && posterLinks?.price?.cost}/-</Typography>
            <Buttons1 href={posterLinks && posterLinks.productUrl} target="_blank"  variant="outlined" >
                    Live Preview
            </Buttons1>
        </Box>   
    </ImageContainer>
  )
}
