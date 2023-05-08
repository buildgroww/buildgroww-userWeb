import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import PageHeader from '../../contents/home/pageHeader/PageHeader'
import { navData } from '../../constants/Constant'
import Block1 from '../../contents/packagedetails/block1/Block1'
import { Box, Divider } from '@mui/material'
import Block2 from '../../contents/packagedetails/block2/Block2'
import { useDispatch, useSelector } from 'react-redux'
import { addPackages } from '../../redux/apiCalls'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Block6 from '../../contents/package/block6/Block6'

const PackageDetails = () => {
  const packages = useSelector((state)=> state.package.packages)
  console.log(packages)
  const location = useLocation()
  const plan = location.pathname.split("=")[2]
  console.log(plan)
const types = location.pathname.split("=")[1].slice(0,-5)

console.log(types)
  const [sort, setSort] = useState({})
  const [query,setQuery] = useState({"$and":[{"category":types}, {"type":plan}, {"durationMonths":12}]})
  const dispatch = useDispatch()
  useEffect(()=>{
    setSort({ "price": 1 })
    // setQuery({"$and":[{"category":"website"}, {"type":"basic"}]})
    addPackages(query, sort, dispatch)
  }, [])
  return (
    <Box sx={{background:"white"}} >
    <Navbar menu={'block'} arrow={'none'} logo={'TechPyro'}/>
    <PageHeader navData={navData}/>
    <Block1 />
    <Divider></Divider>
    <Block2 packages = {packages.data!==null && packages} type={types} plans={plan} />
    <Divider></Divider>
    <Block6/>
    <Footer/>
    </Box>
  )
}

export default PackageDetails