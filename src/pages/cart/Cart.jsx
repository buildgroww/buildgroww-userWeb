import { Box } from '@mui/material'
import React from 'react'
import Block1 from '../../contents/cart/block1/Block1'
import Block2 from '../../contents/cart/block2/Block2'

import PageHeader from '../../contents/cart/pageHeader/PageHeader'
import Navbar from '../../contents/cart/navbar/Navbar'


export default function Cart() {
     

  return (
    <>
     
      <Box sx={{height:{md:"120%",xs:"100%"},display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <Box sx={{width:"91.66%",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
          <Block1/>
        </Box>
        <Box sx={{width:{md:"100%",xs:"350px"},bottom:"0",border:"1px solid black",position:"fixed",height:{md:"120px",xs:"80px"},display:"flex",justifyContent:"center",alignItems:"center",boxShadow: "0px -5px 5px gray !important",backgroundColor:"#fff"}}>
          <Box sx={{width:{md:"91.66%",xs:"100%"} ,height:"100%"}}>
              <Block2/>
          </Box>
        </Box>
      </Box>
    </>
  )
}
