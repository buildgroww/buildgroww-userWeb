import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { cartValue } from '../../../redux/cartRedux';
import Item from './item/Item'
import PackageItem from './packageItem/PackageItem';

export default function Block1(props) {
  const cart = useSelector(cartValue);
  return (
    <Box sx={{width:{md:'65%',xs:'100%'},}}>
        {cart.products && cart.products.data && cart.products.data.data && cart.products.data.data.map((item,index)=>(
            item.products[0].productId !==undefined ?
            <Item key={index} index={index} product={item}/>
            : <PackageItem key={index} index={index} pack={item} />
          ))}
    </Box>
  )
}
