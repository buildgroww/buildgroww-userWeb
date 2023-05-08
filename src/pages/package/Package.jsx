import { Box, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Block1 from '../../contents/package/block1/Block1'
import Block2 from '../../contents/package/block2/Block2'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import PageHeader from '../../contents/home/pageHeader/PageHeader'
import { navData } from '../../constants/Constant'
import Block3 from '../../contents/package/block3/Block3'
import Block4 from '../../contents/package/block4/Block4'
import Block5 from '../../contents/package/block5/Block5'
import Footer from '../../components/footer/Footer'
import Block6 from '../../contents/package/block6/Block6'
import Block7 from '../../contents/package/block7/Block7'
import { useDispatch, useSelector } from 'react-redux'
import { addPackages } from '../../redux/apiCalls'


const Package = () => {
  const packages = useSelector((state)=> state.package.packages)
  console.log(packages)

  const [sort, setSort] = useState({})
  const [query,setQuery] = useState({"$and":[{"type":"basic"}, {"durationMonths":12}]})
  const dispatch = useDispatch()
  useEffect(()=>{
    setSort({ "price": 1 })
    // setQuery({"$and":[{"category":"website"}, {"type":"basic"}]})
    addPackages(query, sort, dispatch)
  }, [])




  return (

    <Box>
      <Navbar menu={'block'} arrow={'none'} logo={'TechPyro'}/>
      <PageHeader navData={navData}  />
        <Block1/>
        <Divider></Divider>
        <Block2/>
        <Divider></Divider>
        <Block3  />
        <Divider></Divider>
         <Block4/>
        <Divider></Divider>
         <Block7/>
        <Divider></Divider>
        <Block6/>
       <Block5/>

       <Footer/>
    </Box>
  )
}

export default Package