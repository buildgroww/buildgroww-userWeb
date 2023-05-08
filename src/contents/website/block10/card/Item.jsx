import { Box, Card, Typography } from '@mui/material'
import React from 'react'

export default function Item({CardLinks}) {
  return (
    <Card sx={{height:{md:'400px',sm:'300px',xs:'200px',boxShadow:'none'}}}>
      <Box sx={{height:{md:'85',sm:'80%',xs:'70%'}}}>
        <img style={{height:'100%',width:'100%',}} src={'/images/3.png'} alt="card"/>
      </Box>
      <Box sx={{height:{md:'15%',sm:'20%',xs:'30%'}, padding:'5px 0px 5px 15px',borderRight:"1px solid rgba(214,217,220,1)",borderBottom:"1px solid rgba(214,217,220,1)", borderLeft:"1px solid rgba(214,217,220,1)" , borderBottomRightRadius:'10px', borderBottomLeftRadius:'10px' }}>
          <Typography sx={{fontSize:'20px', fontWeight: 500, }}>{CardLinks.links1[0].name}</Typography>
          <Typography sx={{fontSize:'15px', fontWeight: 300,}}>{CardLinks.links1[0].para}</Typography>
      </Box>
    </Card>
  )
}
