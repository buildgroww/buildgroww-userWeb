import { Backdrop, Box,CircularProgress,Skeleton,styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from '../../../redux/apiCalls'
import LeftBar from './blockleft/LeftBar'
import RightBar from './blockright/RightBar'
const MainContainer = styled(Box)((theme)=>({
display:"flex",
gap:"5px",
marginLeft:"5px"

}))


const Products = () => {

  const dispatch = useDispatch();
  const search = useSelector((state)=>state.search)

  const [loading,setLoading] = useState(false);
  const [open,setOpen] = useState(false);
  const [sort, setSort] = useState({})
  const [query, setQuery] = useState({"$and":[{"title.longTitle":{"$regex":`${search.query!==null?search.query:""}`,"$options":"i"}}]}); 
  const [rating, setRating] = useState(null);
  const [minvalue, setMinValue] = React.useState(null);
  const [maxvalue, setMaxValue] = React.useState(null);
  const [value, setValue] = React.useState([1000, 5000]);
  const [filter, setFilter] = useState(false);

  

  useEffect(() => {
    async function fetchData(){
      if(search.query!==null){
        setQuery({"$and":[{"title.longTitle":{"$regex":`${search.query}`,"$options":"i"}}]})
      }
      setLoading(true)
      console.log(query)
      const res = await addProducts(query, sort, dispatch);
      console.log(res);
      setLoading(false)
    }
    fetchData();
    console.log(search.query);
  }, [search.query])

  useEffect(()=>{
    if(query==={"$and":[{"title.longTitle":{"$regex":`${search.query!==null?search.query:""}`,"$options":"i"}}]})
      return;
    async function fetchData(){
      setOpen(true)
      console.log(query)
      const res = await addProducts(query, sort, dispatch);
      console.log(res)
      setOpen(false)
    }
    fetchData();
  }, [query, sort])
  
  
  return (
    <>
    {loading?
      <Box sx={{display:'flex',gap:'20px',width:'100%'}}>
      <Skeleton variant="rectangular" sx={{display:{md:'block',xs:'none'},width:300,height:600}} />
      {/* <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton variant="circular" width={70} height={70} />
        <Skeleton sx={{display:{sm:'block',xs:'none'}}} variant="circular" width={70} height={70} />
        <Skeleton sx={{display:{md:'block',xs:'none'}}} variant="circular" width={70} height={70} />
        <Skeleton sx={{display:{md:'block',xs:'none'}}} variant="circular" width={70} height={70} />
      </Box> */}
      {/* <Skeleton variant="rounded" sx={{margin:'40px 40px',height:{md:400,sm:300,xs:200}}} /> */}
      <Box sx={{display:'flex',flexDirection:'column',width:'100%',gap:'10px'}}>
        <Skeleton variant="rounded" sx={{margin:'0 20px',width:'calc(100%-300px)',height:{md:300,sm:300,xs:200}}} />
        <Skeleton sx={{display:{sm:'none',xs:'block'},margin:'0 20px'}} />
        <Skeleton sx={{display:{sm:'none',xs:'block'},margin:'0 20px'}} width="60%" />
        <Skeleton variant="rounded" sx={{margin:'0 20px',width:'calc(100%-300px)',height:{md:300,sm:300,xs:200}}} />
        <Skeleton sx={{display:{sm:'none',xs:'block'},margin:'0 20px'}} />
        <Skeleton sx={{display:{sm:'none',xs:'block'},margin:'0 20px'}} width="60%" />
        {/* <Skeleton variant="rounded" sx={{margin:'0 20px',display:{sm:'block',xs:'none'},width:300,height:{md:400,sm:300,xs:150}}}/>
        <Skeleton variant="rounded" sx={{margin:'0 20px',display:{md:'block',xs:'none'},width:300,height:{md:400,sm:300,xs:150}}}/>
        <Skeleton variant="rounded" sx={{margin:'0 20px',width:150,height:{md:400,sm:300,xs:200}}} /> */}
      </Box>
    </Box>
      :
    <Box width="100%" height="auto" sx={{background:"#D9D9D9"}} >
        <MainContainer>
           <LeftBar query={query} setQuery = {setQuery} sort ={sort} setSort={setSort} minvalue={minvalue} setMinValue = {setMinValue} maxvalue={maxvalue} setMaxValue = {setMaxValue} value={value} setValue={setValue} rating={rating} setRating={setRating}  filter={filter} setFilter={setFilter} />
           <RightBar  query={query} setQuery = {setQuery} sort ={sort} setSort={setSort} filter={filter} setFilter={setFilter} minvalue={minvalue} setMinValue = {setMinValue} maxvalue={maxvalue} setMaxValue = {setMaxValue} value={value} setValue={setValue} rating={rating} setRating={setRating}  />
        </MainContainer>
    </Box>
    
    }
    <Backdrop
        sx={{ color: (theme) => theme.colors.success.dark , zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress sx={{width:'50px!important',height:'50px!important'}} color="inherit" />
      </Backdrop>
    </>
  )
}

export default Products