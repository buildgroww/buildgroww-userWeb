import { Box, styled, Typography } from '@mui/material'
// import Iframe from "react-iframe"
import React from 'react'
import "./block7.css"
const Container = styled(Box)(({ theme }) => ({
  height: "auto",
  margin: "10px 40px",
  background: "white",
  [theme.breakpoints.down('md')]: {
    margin: "0px 10px"
  },
  [theme.breakpoints.down('sm')]: {
    margin: "0px 0px"
  },
}))

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  padding: "0px 16px",
  [theme.breakpoints.down('md')]: {
    justifyContent: "space-between",
    gap: "10px"
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: "column",
    gap: "10px"
  },
}))
const Left = styled(Box)(({ theme }) => ({
  display: "flex",
  // marginRight:"50px"


}))
const VideoContainer = styled(Box)(({ theme }) => ({
  height: "500px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "10px 0px",
  [theme.breakpoints.down('md')]: {
    height: "500px",
    width: "100%"
  },
  [theme.breakpoints.down('sm')]: {
    height: "600px",
    width: "100%",
    padding: "10px 10px"
  },


}))

// const IFrame = styled("iframe")(({theme})=>({
// height:"100%",
// width:"100%"
// }))
const Right = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "30px",
  marginTop: "15px",
  paddingLeft: "40px",
  borderLeft: '1px solid #EEEEEE',
  [theme.breakpoints.down('lg')]: {
    border: "none",
    paddingLeft: "20px"
  },
  [theme.breakpoints.down('md')]: {
    border: "none",
    paddingLeft: "40px"
  },
  [theme.breakpoints.down('md')]: {
    alignItems: "center",
    marginBottom: "20px"
  },
}))
const TagContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  alignItems: "center",

}))
const Tag = styled(Box)(({ theme }) => ({
  // background: "rgba( 74, 144, 226, 0.2 )",
  // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  // backdropFilter: "blur( 3px )",
  borderRadius: "10px",
  border: "1px solid #878787",
  padding: "8px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  flexWrap: "wrap",
  "&:hover": {
    background: "#1A6ED8",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 1px )",
    color: "#fff",
    transition: "all 0.4s linear",
  },
  [theme.breakpoints.down('md')]: {
    padding: "5px 5px",
    fontSize: "14px",
    fontWeight: "500"

  },
}))

const Block7 = ({ product }) => {
  const handleClick = (e, url) => {
    // console.log(url)
    window.open(url)

  }
  console.log(product.data.productUrl)

  return (
    <Container>
      <Wrapper>
        <Left>
          <VideoContainer>
            <img src="https://atiuttam.netlify.app/images/other/Menu.png" style={{ width: "100%", height: { md: "50px", sx: "40px", } }} alt="header" />
            {product.data.productUrl &&
              <iframe src={product.data.productUrl}
                title="website url"
                width='100%'
                height='100%'
                loading="lazy"
                className='iframe-img'
              ></iframe>
            }
          </VideoContainer>
        </Left>
        <Right>

          <Typography variant="h3" sx={{ fontSize: { sm: "14px", md: "24px" }, fontWeight: "600" }}>Related Topics & Tags</Typography>
          <TagContainer>
            {product.data.tags.map((item, index) => (

              <Tag key={index} onClick={(e) => handleClick(e, item.tagUrls)} >{item.name}</Tag>
            ))}

          </TagContainer>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Block7