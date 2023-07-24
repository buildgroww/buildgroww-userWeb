import { Box, Typography } from "@mui/material";
import React from "react";

function Block6() {
  return (
    <Box sx={{ width: "100%", padding: "0 58px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Box
          sx={{
            width: "360px",
            height: "431px",
            textAlign: "center",
            borderRadius: "19px",
            border: "1px solid #000000",
          }}
        >
          {" "}
          <Typography
            sx={{ fontSize: "40px", fontWeight: 300, margin: "10px 0" }}
          >
            Plumbing Service 
          </Typography>{" "}
          <img
            alt="Our Engineer"
            style={{ width: "100%", height: "220px", objectFit: "cover" }}
            src="/images/category/carousel/engineer.jpg"
          />
        </Box>
        <Box
          sx={{
            width: "360px",
            height: "431px",
            textAlign: "center",
            borderRadius: "19px",
            border: "1px solid #000000",
          }}
        >
          {" "}
          <Typography
            sx={{ fontSize: "40px", fontWeight: 300, margin: "10px 0" }}
          >
            Electrical Service
          </Typography>{" "}
          <img
            alt="Our Engineer"
            style={{ width: "100%", height: "220px", objectFit: "cover" }}
            src="/images/category/carousel/engineer.jpg"
          />
        </Box>
        <Box
          sx={{
            width: "360px",
            height: "431px",
            textAlign: "center",
            borderRadius: "19px",
            border: "1px solid #000000",
          }}
        >
          {" "}
          <Typography
            sx={{ fontSize: "40px", fontWeight: 300, margin: "10px 0" }}
          >
            Colouring Service
          </Typography>{" "}
          <img
            alt="Our Engineer"
            style={{ width: "100%", height: "220px", objectFit: "cover" }}
            src="/images/category/carousel/engineer.jpg"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Block6;
