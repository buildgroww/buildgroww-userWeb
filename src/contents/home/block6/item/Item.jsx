import React from 'react'
import { styled } from '@mui/styles'
import { Box, Card, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateQuery } from '../../../../redux/SearchRedux';

const SliderContainer = styled("div")({
    width:"85%",
    // height:"auto",
    cursor:'pointer'
})
const ImageContainer = styled(Card)(({ theme }) => ({
    width:'26vw',
    height:'200px',
    display:"flex",
    // alignItems:"center",
    justifyContent:'center',
    flexDirection:"column",
    margin:"10px 10px",
    "@media (max-width: 1200px)": {
        width:"27vw",
        height:"190px",
    },
    [theme.breakpoints.down('md')]: {
        width:"37vw",
        height:"180px",
    },
    // "@media (max-width: 780px)": {
    //     width:"35vw",
    //     height:"250px",
    // },
    [theme.breakpoints.down('sm')]: {
        width:"72vw",
        height:"165px",
    },

}));
const Image = styled("img")(({ theme }) => ({
    width:"100%",
    height:"100%",
    // objectFit:"cover",
    [theme.breakpoints.down('md')]: {
        width:"100%",
        height:"100%",
    },
    [theme.breakpoints.down('sm')]: {
        width:"100%",
        height:"100%",
    },
    // [theme.breakpoints.down('xs')]: {
    //     width:"70px",
    //     height:"75px",
    // },
}));
const Head = styled("h3")({
    fontSize: "16px",
    fontWeight:"500",
    paddingLeft:'15px',
    paddingTop:'10px',
    // textAlign:"center",
    marginBottom:"5px",
    "@media (max-width: 600px)": {
       fontSize: "10px",
       },
    "@media (max-width: 980px)": {
       fontSize: "13px",
       },
})
const Para = styled("p")({
    fontSize:"14px",
    fontWeight:"600",
    paddingLeft:'15px',
    paddingBottom:'10px',
    "@media (max-width: 600px)": {
        fontSize: "10px",
        },
    "@media (max-width: 980px)": {
        fontSize: "13px",
        },
})

export default function Item({posterLinks}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = ()=>{
        dispatch(updateQuery(posterLinks.name));
        navigate('/products');
    }
  return (
    <SliderContainer onClick={handleClick}>
        <ImageContainer sx={{borderRadius:'8px'}}>
            <Image src={posterLinks.url} alt="app and dashboard" />
            <Head>{posterLinks.name}</Head>
            <Para>{posterLinks.Price}</Para>
            {/* <Head>{posterLinks.name}</Head>
            <Para>{posterLinks.Price}</Para> */}
        </ImageContainer>
    </SliderContainer>
  )
}
