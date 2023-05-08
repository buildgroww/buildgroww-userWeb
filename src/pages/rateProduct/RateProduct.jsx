import React from 'react'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import { navData } from '../../constants/Constant'
import Block1 from '../../contents/rateproduct/Block1'
import PageHeader from '../../contents/home/pageHeader/PageHeader'

const RateProduct = () => {
  return (
    <>
       <Navbar menu={'block'} arrow={'none'} logo={'TechPyro'}/>
    <PageHeader navData={navData}/>
    <Block1/>
    </>
  )
}

export default RateProduct
