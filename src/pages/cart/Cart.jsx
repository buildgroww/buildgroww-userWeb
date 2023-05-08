import { Box,Skeleton,useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Block1 from '../../contents/cart/block1/Block1'
import Block2 from '../../contents/cart/block2/Block2'
import Block3 from '../../contents/cart/block3/Block3'
import PageHeader from '../../contents/cart/pageHeader/PageHeader'
import Navbar from '../../contents/cart/navbar/Navbar'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userRedux'
import Block from '../../contents/cart/userNull/Block'
import { cartValue } from '../../redux/cartRedux'

export default function Cart() {
    const theme = useTheme();
    const user = useSelector(selectUser)
    const cart = useSelector(cartValue);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
      
      const timer = setTimeout(()=> setLoading(false) ,500)
      return () => {
        clearTimeout(timer)
      }
    }, [])


  return (
    <>
      {loading?
      <Box sx={{marginBottom:'-160px'}}>
        <Skeleton variant="text" sx={{fontSize: {sm:'5rem',xs:'8rem'} ,marginTop:{sm:'-25px',xs:'-43px'},marginBottom:{sm:'-35px',xs:'-47px'}}} />
       <Skeleton variant="text" sx={{fontSize: {sm:'5rem',xs:'8rem'} ,marginTop:{sm:'-25px',xs:'-43px'},marginBottom:{sm:'-35px',xs:'-47px'}}} />  
      </Box>
        :<Box>
          <Navbar/>
          <PageHeader/>
        </Box>}
       { user.currentUser ===null || cart.quantity===0 || cart.quantity===null ?
       <Box sx={{display:'flex',overflow:'hidden',flexDirection:{md:'row',xs:'column'},width:'100%',marginBottom:{md:'0',xs:'80px'},marginTop:'160px', padding:{md:'0 10%',sm:'0 8%',xs:'0 5%'}}}>
        {loading?
        <Skeleton variant="rectangular" sx={{width:'100%',height:'70vh'}} />
       :<Block/>}
      </Box>:
        <Box sx={{display:'flex',overflow:'hidden',flexDirection:{md:'row',xs:'column'},width:'100%',marginBottom:{md:'0',xs:'80px'},marginTop:'160px', padding:{md:'0 10%',sm:'0 8%',xs:'0 5%'}}}>
          {loading?
            <Box sx={{display:'flex',flexDirection:'column',width:'100%'}}>
            <Skeleton variant="rectangular" sx={{width:{md:'70%',xs:'100%'},height: { md: "250px", xs: "350px" },
            marginBottom: "20px",}} />
            <Skeleton variant="rectangular" sx={{width:{md:'70%',xs:'100%'},height: { md: "250px", xs: "350px" },
            marginBottom: "20px",}} />
            </Box>
            :<Block1/>}
            {loading?
              <Skeleton variant="rectangular" sx={{width:{md:'30%',xs:'100%'},height: 400,}} />
            :<Block2/>}
            <Box  sx={{flexDirection:'column' ,padding:{sm:'0 8%',xs:'0 5%'},left:0,right:0,bottom:0,display:{md:'none',xs:'flex'},background:`${theme.header.background}`,position:'fixed',height:'70px'}}>
            {loading?
              <Skeleton variant="rectangular" sx={{width:'100%',height:'100%'}} />
              :<Block3/>}
            </Box>
        </Box>}
    </>
  )
}
