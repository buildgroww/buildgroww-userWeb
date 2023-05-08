import React from 'react'
import { styled } from '@mui/styles'
import { Box, Card, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateQuery } from '../../../../redux/SearchRedux';

const ImageContainer = styled(Card)(({ theme }) => ({
    width:'26vw',
    height:'200px!important',

    "@media (max-width: 1200px)": {
        width:"27vw",
        height:"190px!important",
    },
    [theme.breakpoints.down('md')]: {
        width:"37vw",
        height:"180px!important",
    },
    // "@media (max-width: 800px)": {
    //     width:"40vw",
    //     height:"180px",
    // },
    [theme.breakpoints.down('sm')]: {
        width:"72vw",
        height:"165px!important",
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
        <img style={{width:'100%', height:'100%',objectFit:'cover'}} src={posterLinks && posterLinks?.productImages[0]?.path} alt="card"/>
        <Box sx={{position:'absolute', top:{md:'70%',xs:'70%'} , paddingLeft:'26px',background:'#fff',opacity:'0.5', left: 0,right:0 ,width:'100%',height:{md:'30%',xs:'30%'}}}>
        </Box>   
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',position:'absolute', top:{md:'70%',xs:'70%'} ,padding:'0 15px', left: 0,right:0 ,width:'100%',height:{md:'30%',xs:'30%'}}}>
            {/* <Typography sx={{fontSize:{md:'16px',sm:'14px',xs:'13px'}, fontWeight: 500, }}>{posterLinks.category.type}</Typography> */}
            <Typography sx={{fontSize:'14px', fontWeight: 500,}}>Rs {posterLinks && posterLinks?.price?.cost}/-</Typography>
            <Buttons1 href={posterLinks && posterLinks.productUrl} target="_blank"  variant="outlined" >
                    Live Preview
            </Buttons1>
        </Box>   
    </ImageContainer>
  )
}
