
import React from 'react'
import Footer from '../../components/footer/Footer'
import Block1 from '../../contents/service/Block1'
import Block2 from '../../contents/service/Block2'
import Block3 from '../../contents/service/Block3'
import Block4 from '../../contents/service/Block4'
import Block5 from '../../contents/service/Block5'
import Block6 from '../../contents/service/Block6'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import PageHeader from '../../contents/home/pageHeader/PageHeader'
import { navData } from '../../constants/Constant'

const Services = () => {
  return (
<>
<Navbar menu={'none'} arrow={'block'} logo={'Services'}/>

<PageHeader navData={navData}  />

<Block1/>
<Block2/>
<Block3/>
<Block4/>
<Block5/>
<Block6/>
<Footer/>
</>
  )
}

export default Services