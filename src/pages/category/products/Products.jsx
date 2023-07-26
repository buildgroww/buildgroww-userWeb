import React, { useState } from 'react'
import Navbar from "../../../layout/mainLayout/navbar/Navbar"
import Block1 from '../../../contents/products/block1/Block1'
import { Box, Skeleton } from '@mui/material'
const Product = () => {
  const [loading,setLoading] = useState(true);

  return (
    <>
    {/* {loading?
      <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
      <Skeleton variant="text" sx={{fontSize: {sm:'5rem',xs:'8rem'} ,marginTop:{sm:'-25px',xs:'-43px'},marginBottom:{sm:'-35px',xs:'-47px'}}} />
      <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton sx={{display:{sm:'block',xs:'none'}}} variant="circular" width={70} height={70} />
        <Skeleton sx={{display:{md:'block',xs:'none'}}} variant="circular" width={70} height={70} />
        <Skeleton sx={{display:{md:'block',xs:'none'}}} variant="circular" width={70} height={70} />
      </Box>
      <Skeleton variant="rounded" sx={{margin:'40px 40px',height:{md:400,sm:300,xs:200}}} />
      <Box sx={{display:'flex'}}>
        <Skeleton variant="rounded" sx={{margin:'0 20px',width:300,height:{md:400,sm:300,xs:200}}} />
        <Skeleton variant="rounded" sx={{margin:'0 20px',width:300,height:{md:400,sm:300,xs:200}}} />
        <Skeleton variant="rounded" sx={{margin:'0 20px',display:{sm:'block',xs:'none'},width:300,height:{md:400,sm:300,xs:150}}}/>
        <Skeleton variant="rounded" sx={{margin:'0 20px',display:{md:'block',xs:'none'},width:300,height:{md:400,sm:300,xs:150}}}/>
        <Skeleton variant="rounded" sx={{margin:'0 20px',width:150,height:{md:400,sm:300,xs:200}}} />
      </Box>
    </Box>
      : */}
      <div>
        <Navbar menu={'none'} arrow={'block'} logo={'Products'}/>
        {/* <MiniSlider navData={navData}/> */}
        {/* <Products setLoading={setLoading}/> */}
        {/* <Content/> */}
        <Box sx={{margin:'100px 15vw 0 15vw'}}>
            <Block1/>
        </Box>
      </div>
      {/* } */}
    </>
  )
}

export default Product