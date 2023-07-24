import { Box, Typography, styled } from "@mui/material";
import React from "react";

const Image = styled('img')(({theme})=>({
  width:'100%',
  height:'220px',
  objectFit:'cover',
  [theme.breakpoints.down('md')]:{
    height:'180px',
  },
  [theme.breakpoints.down('sm')]:{
    height:'150px',
  },
}))

function Block6() {
  return (
    <Box sx={{ width: "100%", padding: "0 58px" }}>
      <Box
        sx={{
          width:'100%',
          display: "flex",
          flexDirection:{sm:'row',xs:'column'},
          justifyContent: "space-between",
          gap:'10px',
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Box
          sx={{
            width: {sm:"360px",xs:'100%'},
            height: {md:"431px",sm:'370px',xs:'300px'},
            textAlign: "center",
            borderRadius: "19px",
            border: "1px solid #000000",
          }}
        >
          {" "}
          <Typography
            sx={{ fontSize: {md:"40px",sm:'35px',xs:'25px'}, fontWeight: 300, margin: "10px 0" }}
          >
            Plumbing Service 
          </Typography>{" "}
          <Image
            alt="Our Engineer"
            src="/images/category/carousel/engineer.jpg"
          />
        </Box>
        <Box
          sx={{
            width: {sm:"360px",xs:'100%'},
            height: {md:"431px",sm:'370px',xs:'300px'},
            textAlign: "center",
            borderRadius: "19px",
            border: "1px solid #000000",
          }}
        >
          {" "}
          <Typography
            sx={{ fontSize: {md:"40px",sm:'35px',xs:'25px'}, fontWeight: 300, margin: "10px 0" }}
          >
            Electrical Service
          </Typography>{" "}
          <Image
            alt="Our Engineer"
            src="/images/category/carousel/engineer.jpg"
          />
        </Box>
        <Box
          sx={{
            width: {sm:"360px",xs:'100%'},
            height: {md:"431px",sm:'370px',xs:'300px'},
            textAlign: "center",
            borderRadius: "19px",
            border: "1px solid #000000",
          }}
        >
          {" "}
          <Typography
            sx={{ fontSize: {md:"40px",sm:'35px',xs:'25px'}, fontWeight: 300, margin: "10px 0" }}
          >
            Colouring Service
          </Typography>{" "}
          <Image
            alt="Our Engineer"
            src="/images/category/carousel/engineer.jpg"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Block6;
