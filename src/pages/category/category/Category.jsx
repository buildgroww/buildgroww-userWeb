import React, { useEffect, useState } from 'react'
import {navData} from '../../../constants/websites/PageHeader'
import {EducationProducts} from '../../../constants/websites/Education'
import {HotelsProducts} from '../../../constants/websites/Hotel'
import {RestaurantsProducts} from '../../../constants/websites/Restaurant'
import {ShopsProducts} from '../../../constants/websites/Shop'
import {NewsProducts} from '../../../constants/websites/News'
import {RealEstateProducts} from '../../../constants/websites/RealEstate'

import Content from '../../../components/content/Content'
import Navbar from '../../../layout/mainLayout/navbar/Navbar'

import Divider1 from '../../../contents/website/divider1/Divider1'
import PageHeader from '../../../contents/website/pageHeader/PageHeader' 
import Block1 from '../../../contents/website/block1/Block1' 
import Block2 from '../../../contents/website/block2/Block2' 
import Block3 from '../../../contents/website/block3/Block3' 
import Block4 from '../../../contents/website/block4/Block4' 
import Block5 from '../../../contents/website/block5/Block5' 
import Block6 from '../../../contents/website/block6/Block6' 
import Block7 from '../../../contents/website/block7/Block7' 
import Block8 from '../../../contents/website/block8/Block8' 
import Block9 from '../../../contents/website/block9/Block9' 
// import Block10 from '../../../contents/website/block10/Block10' 
// import Block11 from '../../../contents/website/block11/Block11' 
// import Block12 from '../../../contents/website/block12/Block12' 
// import Block13 from '../../../contents/website/block13/Block13' 
// import Block14 from '../../../contents/website/block14/Block14' 
// import Block15 from '../../../contents/website/block15/Block15' 
import Block16 from '../../../contents/website/block16/Block16' 
import { Box, Skeleton } from '@mui/material'
import { object } from 'yup'
import { ProductsList } from '../../../redux/apiCalls'
import Footer from '../../../components/footer/Footer'

export default function Category() {
  const [loading,setLoading] = useState(false)
  const [product,setProduct] = useState({education:[],hotel:[],restaurant:[],shop:[],news:[],realState:[],blog:[]})

  // useEffect(() => {
    
    
  // }, [])

  useEffect(() => {
    console.log(window.location.search)
    setLoading(true)
    const fetch = async ()=>{
      Object.keys(product).map(async(item)=>{
        let query = {"$and":[{"category":{"$regex":`website`,"$options":"i"}},{"subCategory":{"$regex":`${item}`,"$options":"i"}}]}
        let sort = {"name":1}
        const res = await ProductsList(query,sort)
        console.log(res)
        if(res?.data?.status==='SUCCESS')
          setProduct({...product,[item]:[res?.data?.data]})  
      })
        const timer = setTimeout(()=> setLoading(false) ,500)
        return () => {
          clearTimeout(timer)
        }
    }
    fetch();
    console.log(product)
    
    
  }, [])
  console.log(product)
  

  return (
    <div style={{position:'relative'}}>
     {loading && <Box sx={{display:'flex',flexDirection:'column',gap:2,zIndex:'100',position:'absolute',background:'#fff'}}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{fontSize: {sm:'5rem',xs:'8rem'} ,marginTop:{sm:'-25px',xs:'-43px'},marginBottom:{sm:'-35px',xs:'-47px'}}} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton sx={{display:{sm:'block',xs:'none'}}} variant="circular" width={70} height={70} />
        <Skeleton sx={{display:{md:'block',xs:'none'}}} variant="circular" width={70} height={70} />
        <Skeleton sx={{display:{md:'block',xs:'none'}}} variant="circular" width={70} height={70} />
      </Box>
      {/* <Skeleton variant="rectangular" width={210} height={60} /> */}
      <Skeleton variant="rounded" sx={{margin:'40px 40px',height:{md:400,sm:300,xs:200}}} />
      <Box sx={{display:'flex'}}>
        <Skeleton variant="rounded" sx={{margin:'0 20px',width:300,height:{md:400,sm:300,xs:200}}} />
        <Skeleton variant="rounded" sx={{margin:'0 20px',width:300,height:{md:400,sm:300,xs:200}}} />
        <Skeleton variant="rounded" sx={{margin:'0 20px',display:{sm:'block',xs:'none'},width:300,height:{md:400,sm:300,xs:150}}}/>
        <Skeleton variant="rounded" sx={{margin:'0 20px',display:{md:'block',xs:'none'},width:300,height:{md:400,sm:300,xs:150}}}/>
        <Skeleton variant="rounded" sx={{margin:'0 20px',width:150,height:{md:400,sm:300,xs:200}}} />
      </Box>
    </Box>}
    <div>
      {!loading && <Navbar menu={'none'} arrow={'block'} logo={'Website'}/>}
      <PageHeader navData={navData}/>
      <Block1/>
      {product && product.education[0] && <Block2 key={EducationProducts} websitesData={product && product.education[0] && product.education[0].data}/>}
      {product && product.hotel[0] && <Block3 key={HotelsProducts} websitesData={product && product.hotel[0] && product.hotel[0].data}/>}
      {/* {product && product.education[0] && <Block4 key={EducationProducts} websitesData={product && product.education[0] && product.education[0].data}/> } */}
      {!loading &&<Divider1/>}
      {product && product.restaurant[0] &&<Block5 key={RestaurantsProducts} websitesData={product && product.restaurant[0] && product.restaurant[0].data} /> }
      {product && product.shop[0] &&<Block6 key={ShopsProducts} websitesData={product && product.shop[0] && product.shop[0].data}  />}
      {!loading &&<Block7/>}
      {!loading &&<Divider1/>}
      {product && product.news[0] && <Block8 key={NewsProducts} websitesData={product && product.news[0] && product.news[0].data} /> }
      {product && product.realState[0] && <Block9 key={RealEstateProducts} websitesData={product && product.realState[0] && product.realState[0].data} />}
      {/* <Block10/>
      <Divider1/>
      <Block11 key={sliderData} sliderData={sliderData[0].contentwriting} />
      <Block12 key={sliderData} sliderData={sliderData[0].presentation} />
      <Block13/>
      <Divider1/>
      <Block14 key={sliderData} sliderData={sliderData[0].videoediting} />
      <Block15 key={sliderData}  sliderData={sliderData[0].others} /> */}
      {!loading &&<Block16/>}
      {!loading &&<Divider1/>}
      {!loading &&<Content/>}
    </div>
    <Footer/>
    </div>
  )
}
