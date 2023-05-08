import React from 'react'
import Navbar from '../../../layout/mainLayout/navbar/Navbar'
import PageHeader from "../../../contents/logo/pageHeader/PageHeader"
import Block1  from "../../../contents/logo/block1/Block1"
import { navData } from '../../../constants/Constant'
import Block2 from '../../../contents/logo/block2/Block2'
import Block3 from '../../../contents/logo/block3/Block3'
import Block4 from '../../../contents/logo/block4/Block4'
import Block5 from '../../../contents/logo/block5/Block5'
import Footer from "../../../components/footer/Footer"
const Logo = () => {
  return (
    <>
      <Navbar menu={'block'} arrow={'none'} logo={'TechPyro'}/>
      <PageHeader navData={navData}/>
      <Block2/>
      <Block1/>
      <Block3/>
      <Block4/>
      <Block5/>
      <Footer/>
    </>
  )
}

export default Logo