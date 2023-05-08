import { Box, Skeleton } from '@mui/material'
import React,{useEffect, useState} from 'react'
import BlockLeft from '../../contents/account/blockLeft/BlockLeft'
import BlockRight from '../../contents/account/blockRight/BlockRight'
import Block from '../../contents/address/Block'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import PageHeader from '../../contents/account/pageHeader/PageHeader'
import { navData } from '../../constants/Constant'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userRedux'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

function Address() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true);

    useEffect(() => {
          if(user.currentUser===null){
            navigate('/login')
          }
          const timer = setTimeout(()=> setLoading(false) ,500)
          return () => {
            clearTimeout(timer)
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])   

  return (
    <>
    {loading ? 
      <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
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
      <Box sx={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center',margin:{md:'40px 0',sm:'30px 0',xs:'20px 0'}}}>
            <Box sx={{display:{md:'flex',xs:'none'},width:'85%',justifyContent:'center',gap:'40px'}}>
                <Skeleton variant="rectangular" sx={{width:{md:'20%',sm:'100%'}, height:{md:'460px',sm:'100px',xs:'200px'}}} />
                <Skeleton variant="rectangular" sx={{width:{md:'calc(60% - 80px)',sm:'100%'}, height:{md:'460px',sm:'100px',xs:'200px'}}} />
                <Skeleton variant="rectangular" sx={{width:{md:'20%',sm:'100%'},height:{md:'300px',sm:'170px',xs:'260px'}}} />
            </Box>
            <Box sx={{display:{md:'none',xs:'flex'},flexDirection:'column',width:{sm:'85%',xs:'95%'},justifyContent:'center',gap:'40px'}}>
                <Skeleton variant="rectangular" sx={{width:{md:'20%',xs:'100%'}, height:{md:'460px',sm:'100px',xs:'200px'}}} />
                <Skeleton variant="rectangular" sx={{width:{md:'calc(60% - 80px)',xs:'100%'}, height:200}} />
                <Skeleton variant="rectangular" sx={{width:{md:'20%',xs:'100%'},height:300}} />
            </Box>
        </Box>
    </Box>
      :<div>
        <Navbar menu={'block'} arrow={'none'} logo={'TechPyro'}/>
        <PageHeader navData={navData}/>
        <Box sx={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center',margin:{md:'40px 0',sm:'30px 0',xs:'20px 0'}}}>
            <Box sx={{display:{md:'flex',xs:'none'},width:'85%',justifyContent:'center',gap:'40px'}}>
                <BlockLeft/>
                <Block/>
                <BlockRight/>
            </Box>
            <Box sx={{display:{md:'none',xs:'block'},width:{sm:'85%',xs:'95%'},justifyContent:'center',gap:'40px'}}>
                <BlockLeft/>
                <BlockRight/>
                <Block/>
            </Box>
        </Box>
      </div>}
      <Footer/>
    </>
  )
}

export default Address