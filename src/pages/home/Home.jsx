import React, { useEffect, useState } from 'react'
import {  navData, sliderData } from '../../constants/Constant'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import Divider1 from '../../contents/home/divider1/Divider1'
import PageHeader from '../../contents/home/pageHeader/PageHeader' 
import Block1 from '../../contents/home/block1/Block1' 
import Block2 from '../../contents/home/block2/Block2' 
import Block3 from '../../contents/home/block3/Block3' 
import Block4 from '../../contents/home/block4/Block4' 
import Block5 from '../../contents/home/block5/Block5' 
import Block6 from '../../contents/home/block6/Block6' 
import Block7 from '../../contents/home/block7/Block7' 
import Block8 from '../../contents/home/block8/Block8' 
import Block9 from '../../contents/home/block9/Block9' 
import Block10 from '../../contents/home/block10/Block10' 
import Block11 from '../../contents/home/block11/Block11' 
import Block12 from '../../contents/home/block12/Block12' 
import Block13 from '../../contents/home/block13/Block13' 
import Block14 from '../../contents/home/block14/Block14' 
import Block15 from '../../contents/home/block15/Block15' 
import Block16 from '../../contents/home/block16/Block16' 
import TextBlock1 from '../../contents/home/textblock1/TextBlock1'
import TextBlock2 from '../../contents/home/textblock2/TextBlock2'
import TextBlock3 from '../../contents/home/textblock3/TextBlock3'
import TextBlock4 from '../../contents/home/textblock4/TextBlock4'
import TextBlock5 from '../../contents/home/textblock5/TextBlock5'
import Block17 from '../../contents/home/block17/Block17'
import Footer from '../../components/footer/Footer'
import LandingPage from '../../components/loading/LandingPage'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess, logOut, selectUser, updateLocation } from '../../redux/userRedux'
import { addAddOns, cartListProduct, getOrder, orderListProduct } from '../../redux/apiCalls'
// import { cartListProduct, getOrder, orderListProduct } from '../../redux/apiCalls'
import { addProduct, cartValue } from '../../redux/cartRedux'
import { clearOrders, orderValue } from '../../redux/orderRedux'
import Cookies from 'js-cookie';
import axios from 'axios'
import { updateQuery } from '../../redux/SearchRedux'
import { Box } from '@mui/material'

  
{/* import { Box, Skeleton, Stack } from '@mui/material' */}

const Home = ({loading, setLoading}) => {
  const user = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const cart = useSelector(cartValue);
  const order = useSelector(orderValue);
  const [click,setClick] = useState(0)


  useEffect(()=>{    
    const fetchData = async () =>{
      let token = Cookies.get('authCookie')
      if(token!==undefined && (user.currentUser===null||user.currentUser.data===null)){
         const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/userapp/user/me`,{headers :{Authorization: `Bearer ${token}`}})
           let result = res.data;
           result.data.token = token;
           dispatch(loginSuccess(result)) 
           setClick(1);
      }
    }
   fetchData();
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    

  useEffect(() => {
    if((user.currentUser!==null && user.currentUser?.data!==null ) || click){
        let query = {"userId":`${user.currentUser?.data?.id}`,"isDeleted":false}
        let sort = {"name":1}
        cartListProduct(query,sort,dispatch)
        orderListProduct(query,sort,dispatch)
    }
    getLocation();
    dispatch(updateQuery(null));
    addAddOns(dispatch);

    setClick(0)
    
    // dispatch(logOut())
    // dispatch(addProduct({"products":[],"id":null}));
    // dispatch(clearOrders());

      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click])

  // useEffect(() => {
  //   const timer = setTimeout(()=> setLoading(false) ,500)
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [])
  
  console.table(cart.products);
  console.log(cart.quantity)

  const getLocation = async () =>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        const {latitude,longitude} = position.coords;
        dispatch(updateLocation({latitude,longitude}))
        console.log(latitude,longitude)
        // getPosition(latitude,longitude)
      },(error)=>{
        dispatch(updateLocation({code:error.code,message:error.message}))
        console.log(error)
      })
    }
    else{
      alert('Your Browser is not supporting geoLocation, Please Update your browser');
    } 
  }

  return (
    <>
    {  loading ? <LandingPage/> : 
    //   <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
    //   {/* For variant="text", adjust the height via font-size */}
    //   <Skeleton variant="text" sx={{fontSize: {sm:'5rem',xs:'8rem'} ,marginTop:{sm:'-25px',xs:'-43px'},marginBottom:{sm:'-35px',xs:'-47px'}}} />
    //   {/* For other variants, adjust the size with `width` and `height` */}
    //   <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
    //     <Skeleton variant="circular" width={70} height={70} />
    //     <Skeleton variant="circular" width={70} height={70} />
    //     <Skeleton variant="circular" width={70} height={70} />
    //     <Skeleton variant="circular" width={70} height={70} />
    //     <Skeleton sx={{display:{sm:'block',xs:'none'}}} variant="circular" width={70} height={70} />
    //     <Skeleton sx={{display:{md:'block',xs:'none'}}} variant="circular" width={70} height={70} />
    //     <Skeleton sx={{display:{md:'block',xs:'none'}}} variant="circular" width={70} height={70} />
    //   </Box>
    //   {/* <Skeleton variant="rectangular" width={210} height={60} /> */}
    //   <Skeleton variant="rounded" sx={{margin:'40px 40px',height:{md:400,sm:300,xs:200}}} />
    //   <Box sx={{display:'flex'}}>
    //     <Skeleton variant="rounded" sx={{margin:'0 20px',width:300,height:{md:400,sm:300,xs:200}}} />
    //     <Skeleton variant="rounded" sx={{margin:'0 20px',width:300,height:{md:400,sm:300,xs:200}}} />
    //     <Skeleton variant="rounded" sx={{margin:'0 20px',display:{sm:'block',xs:'none'},width:300,height:{md:400,sm:300,xs:150}}}/>
    //     <Skeleton variant="rounded" sx={{margin:'0 20px',display:{md:'block',xs:'none'},width:300,height:{md:400,sm:300,xs:150}}}/>
    //     <Skeleton variant="rounded" sx={{margin:'0 20px',width:150,height:{md:400,sm:300,xs:200}}} />
    //   </Box>
    // </Box>

    // :<div>
    <div>
      <Navbar menu={'block'} arrow={'none'} logo={'Build Groww'}/>
       {/* <PageHeader navData={navData}/> */}
      <Block1/>
      <Box sx={{display:'flex',flexDirection:'column',gap:'22px'}}>
          <Block2/>
          <Block3/>
          <Block4/>
      </Box>
      {/* <TextBlock1/> */}
      {/* <Block2 key={sliderData} sliderData={sliderData[0].website}/>
      <Block3 key={sliderData} sliderData={sliderData[0].websiteshop}/>
      <Block4 /> 
      <Divider1/>
      <TextBlock2/>
      <Block5 key={sliderData} sliderData={sliderData[0].app}   /> 
      <Block6 key={sliderData} sliderData={sliderData[0].dashboard}  />
      <Block7/>
      <Divider1/>
      <TextBlock3/>
      <Block8 key={sliderData} sliderData={sliderData[0].graphics} /> 
      <Block10/>
      <Divider1/>
      <Block15 key={sliderData}  sliderData={sliderData[0].others} />
      <Block16/>
      <Divider1/> */}
      <Block17/>
      <Footer/>
    </div> 
  }
    </>
  );
}

export default Home;