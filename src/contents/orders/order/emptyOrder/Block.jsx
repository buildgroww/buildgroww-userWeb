import { Box, Button, styled, Typography, useTheme } from '@mui/material'
import React from 'react'
import {GiSlipknot} from 'react-icons/gi'
import {useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { orderValue } from '../../../../redux/orderRedux';

const Container = styled(Box)(({theme})=>({
    width:'100%',
    height:'70vh',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    gap:'20px',
    background: theme.colors.alpha.white[100],
    padding:'0 20px'
}))
function Block() {
    const theme = useTheme();
    const navigate = useNavigate();
    const handleButton = ()=>{
        navigate('/');
    }
  return (
    <Container>
        <Box>
            <GiSlipknot style={{fontSize:'100px',color:`${theme.colors.alpha.black[30]}`}}/>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <Typography sx={{fontSize:{md:'30px',sm:'26px',xs:'23px'}}}>You are not completed any order yet now.</Typography>
        </Box>
        <Button onClick={handleButton} sx={{background:`${theme.colors.warning.main}`,marginTop:'10px',borderRadius:'5px',":hover":{background:`${theme.colors.warning.main}`}}} variant='contained'>
            Continue Shopping
        </Button>

    </Container>
  )
}

export default Block