import React, { useEffect, useState } from 'react'
import Block1 from '../../contents/company/block1/Block1'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import { Box } from '@mui/material'
import { useDispatch, useSelector } from '../../redux/store/store'
import { getCompanyData } from '../../redux/slices/company'
import { useLocation } from 'react-router-dom'
function Company() {
  const dispatch = useDispatch();
  const [page,setPage] = useState(1);
  const loc = useLocation();

  const location = window.location.pathname.split('/')[1]
  const search = window.location.pathname.split('/')[2].replace("%20"," ");


  const companyData = useSelector((state)=>state.company)


  useEffect(() => {
    
    let fetchData = async()=>{
      let query = {"$and":[{"address.city":{"$regex":`${location}`,"$options":"i"}},{"$or":[{"name":{"$regex":`${search?search:''}`,"$options":"i"}},{"title":{"$regex":`${search?search:''}`,"$options":"i"}}]}]}
      let sort = {"name":1}
      dispatch(getCompanyData(query,sort,page))
    }
    fetchData();
    console.log("object");
  }, [loc.pathname])
  

  return (
    <>
    <Navbar menu={'block'} arrow={'none'} logo={'Build Groww'}/>
    <Box sx={{marginTop:"100px"}}>
    <Block1 companyData={companyData}/>
    </Box>
    </>
  )
}

export default Company