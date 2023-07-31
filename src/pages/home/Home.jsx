import React from 'react'

import Navbar from '../../layout/mainLayout/navbar/Navbar'

import Block1 from '../../contents/home/block1/Block1' 
import Block2 from '../../contents/home/block2/Block2' 
import Block3 from '../../contents/home/block3/Block3' 
import Block4 from '../../contents/home/block4/Block4' 
import Block5 from '../../contents/home/block5/Block5'
import Block6 from '../../contents/home/block6/Block6'
import Block17 from '../../contents/home/block17/Block17'
import Footer from '../../components/footer/Footer'
import LandingPage from '../../components/loading/LandingPage'




import { Box } from '@mui/material'
import Content from '../../components/content/Content'

  


const Home = ({loading, setLoading}) => {
  // const user = useSelector((state)=>state.user);
  // const dispatch = useDispatch();
  // const cart = useSelector(cartValue);
  // const order = useSelector(orderValue);
  // const [click,setClick] = useState(0)


  // useEffect(()=>{    
  //   const fetchData = async () =>{
  //     let token = Cookies.get('authCookie')
  //     if(token!==undefined && (user.currentUser===null||user.currentUser.data===null)){
  //        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/userapp/user/me`,{headers :{Authorization: `Bearer ${token}`}})
  //          let result = res.data;
  //          result.data.token = token;
  //          dispatch(loginSuccess(result)) 
  //          setClick(1);
  //     }
  //   }
  //  fetchData();
  //   setTimeout(()=>{
  //     setLoading(false)
  //   }, 1000)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
    

  // useEffect(() => {
  //   if((user.currentUser!==null && user.currentUser?.data!==null ) || click){
  //       let query = {"userId":`${user.currentUser?.data?.id}`,"isDeleted":false}
  //       let sort = {"name":1}
  //       cartListProduct(query,sort,dispatch)
  //       orderListProduct(query,sort,dispatch)
  //   }
  //   getLocation();
  //   dispatch(updateQuery(null));
  //   addAddOns(dispatch);

  //   setClick(0)
    
  //   // dispatch(logOut())
  //   // dispatch(addProduct({"products":[],"id":null}));
  //   // dispatch(clearOrders());

  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [click])

  // useEffect(() => {
  //   const timer = setTimeout(()=> setLoading(false) ,500)
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [])
  
  // console.table(cart.products);
  // console.log(cart.quantity)

  // const getLocation = async () =>{
  //   if(navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition((position)=>{
  //       const {latitude,longitude} = position.coords;
  //       dispatch(updateLocation({latitude,longitude}))
  //       console.log(latitude,longitude)
  //       // getPosition(latitude,longitude)
  //     },(error)=>{
  //       dispatch(updateLocation({code:error.code,message:error.message}))
  //       console.log(error)
  //     })
  //   }
  //   else{
  //     alert('Your Browser is not supporting geoLocation, Please Update your browser');
  //   } 
  // }

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
      
       <Block1/>
      <Box sx={{display:'flex',flexDirection:'column',gap:'22px',marginBottom:'20px'}}>
          <Block2/>
          <Block3/>
          <Block4/>
          <Block5/>
          <Block6/>
      </Box>
     <Content/>
      {/* <Block17/> */}
      <Footer/>
    </div> 
  }
    </>
  );
}

export default Home;