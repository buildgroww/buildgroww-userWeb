import { Box, useTheme } from '@mui/material'
import React from 'react'
import Block1 from './block1/Block1'

function Block() {
    const theme = useTheme();
  return (
    <Box sx={{fontSize:{md:'18px',sm:'16px',xs:'14px'},background:`${theme.colors.alpha.white[100]}`,width:{md:'calc(60% - 80px)',sm:'100%'},display:'flex',flexDirection:'column',gap:'10px',boxShadow:`${theme.colors.shadows.card}`,padding:'20px 30px'}}>
        <Box sx={{fontSize:{md:'20px',sm:'18px',xs:'16px'},fontWeight:500,height:'50px',padding:'10px 0 0 10px',background:`${theme.colors.alpha.black[10]}`}}>Manage Address</Box>
        <Block1/>
    </Box>
  )
}

export default Block