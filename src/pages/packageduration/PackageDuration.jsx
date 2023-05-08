import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import PageHeader from '../../contents/home/pageHeader/PageHeader'
import { navData } from '../../constants/Constant'
import { Box, Divider } from '@mui/material'
import Block1 from '../../contents/packageduration/block1/Block1'
import Block2 from '../../contents/packageduration/block2/Block2'
import Footer from '../../components/footer/Footer'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addPackages } from '../../redux/apiCalls'
import Block6 from '../../contents/package/block6/Block6'

const PackageDuration = () => {
  const packages = useSelector((state)=> state.package?.packages)
  console.log(packages)
  const location = useLocation()
  const types = location.pathname.split("=")[1].slice(0,-5)
  console.log(types)
  const plan = location.pathname.split("=")[2].slice(0,-8)
  console.log(plan)
  const packagess = location.pathname.split("=")[3]
  console.log(packagess)

  const [sort, setSort] = useState({"price": 1})
  const [query,setQuery] = useState({"$and":[{"category":types}, {"type":plan}, {"plan":packagess}]})
  const dispatch = useDispatch()
  useEffect(()=>{
    // setQuery({"$and":[{"category":"website"}, {"type":"basic"}]})
    addPackages(query, sort, dispatch)
  }, [])



  return (
     <Box sx={{background:"white"}} >
       <Navbar menu={'block'} arrow={'none'} logo={'TechPyro'}/>
    <PageHeader navData={navData}/>
    <Block1 />
    <Divider></Divider> 
    <Block2 packages={packages && packages} type={types} plans={plan} packagess={packagess}  />
    <Divider></Divider> 
    <Block6/>
    <Footer/>
     </Box>
  )
}

export default PackageDuration