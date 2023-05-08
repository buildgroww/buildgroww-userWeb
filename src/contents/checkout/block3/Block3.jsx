import { Button, styled, Typography,useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React,{useEffect, useState} from 'react'
import DoneIcon from '@mui/icons-material/Done';
import Item from './item/Item';
import {CurrencyRupee} from '@mui/icons-material'
import { useSelector } from 'react-redux';
import { cartValue } from '../../../redux/cartRedux';
import PackageItem from './packageItem/PackageItem';


const Button1 = styled(Box)(({theme})=>({
  position:'static',
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  background:`${theme.colors.alpha.white[100]}`,
  boxShadow:`${theme.colors.shadows.card}`,
  padding:'0 20px',
  zIndex:1,
  [theme.breakpoints.down('sm')]:{
    position:'fixed',
    bottom:0,
    left:0,
    right:0,
    background:`${theme.header.background}`
  }
}))

export default function Block3(props) {
    const cart = useSelector(cartValue);
    const theme = useTheme();
    const [hide, setHide] = useState('none')

    // useEffect(() => {
    //   handleContinue();
    // }, [ref.current])
    

    const handleContinue = ()=>{
        props.setActiveStep(2);
        setHide('block');
        props.setClick(true);
        
    }

  return (
    <Box>
        <Box sx={{height:'50px',display:'flex',gap:'20px',alignItems:'center',padding:'0 20px',
        background:`${theme.colors.alpha.white[100]}`,border:`1px solid ${theme.colors.alpha.black[10]}`,
        boxShadow:`${theme.colors.shadows.cardSm}`}}>
                <Box sx={{width:'20px',height:'20px', textAlign:'center',background:`${theme.colors.alpha.black[10]}`}}>3</Box>
                <Typography sx={{fontSize:'20px',fontWeight:500}}>Order Summary</Typography>
                <DoneIcon sx={{color:`${theme.colors.success.dark}`,display:`${hide}`}} fontSize='small'/>
        </Box>
        <Box sx={{width:'100%',display:(`${props.activeStep}`==='1'||`${props.activeStep}`==='2')?'block':'none'}}>
        {cart.products && cart.products.data && cart.products.data.data && cart.products.data.data.map((item,index)=>(
          item.products[0].productId !==undefined ?
          <Item key={index} index={index} product={item}/>
          : <PackageItem key={index} index={index} pack={item} />
        ))}
          <Button1>
            <Box >
              <Typography sx={{fontSize:'25px',color:{md:`${theme.colors.alpha.black[100]}`,xs:`${theme.header.textColor}`}}}><CurrencyRupee sx={{fontSize:"20px",marginLeft:'10px'}}/>{cart.total}</Typography>
              {/* <Typography sx={{fontSize:'18px',color:{md:`${theme.colors.alpha.black[100]}`,xs:`${theme.header.textColor}`},textDecoration:'line-through'}}><CurrencyRupee sx={{fontSize:"14px",marginLeft:'10px'}}/>{cart.totalCart}</Typography> */}
            </Box>
            <Button disabled={`${props.activeStep}`==='2'?true:false} onClick={handleContinue} sx={{margin:'13px 0',width:'150px',background:`${theme.colors.gradients.blue1}`,color:`${theme.colors.alpha.white[100]}`}}>Continue</Button>
          </Button1>
      </Box>
    </Box>
  )
}
