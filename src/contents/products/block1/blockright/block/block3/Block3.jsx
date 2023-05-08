import { Box, FormControlLabel, Radio, RadioGroup, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { TbCheck } from 'react-icons/tb';
import "./block3.css"
import Glider from 'glider-js';
import "glider-js/glider.min.css"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    // position: !expand ? "static" : "absolute",
    // transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
const Container = styled(Box)(({theme})=>({
// marginTop:"50px",
// padding:'10px 70px',
display:"flex",
gap:"50px",
// margin:"40px 0px",
// flexWrap:"wrap",
[theme.breakpoints.down('md')]: {
  padding:'10px 30px',
     justifyContent:"center",
     gap:"50px"
},
[theme.breakpoints.down('sm')]: {
  padding:'10px 10px',
  gap:"50px"
}
        

}))
const CardContainer = styled(Box)(({theme})=>({
position:'relative',
display:"flex",
justifyContent:"center"

}))
const Paragraph = styled(Typography)(({theme})=>({
    fontFamily:"Roboto"
}))
const Button1 = styled("button")(({theme})=>({
  backgroundColor:"teal",
  borderColor:"white",
   fontSize:"20px",
   padding:"8px 30px",
   borderRadius:"8px",
   display:"flex",
   justifyContent:'center',
   alignItems:"center",
   position:"absolute",
   color:"white",
   top:"97.3%",
   zIndex:"30",
   
    "&:hover":{
      letterSpacing:"2px", transition:"all 0.3s linear", fontFamily:"Roboto"
    },
}))

const Button2 = styled("button")(({theme})=>({
    color:"white",
    width:"80%",
    height:"50px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"teal",
    fontSize:"20px",
    fontWeight:"500",
    marginTop:"40px",
    border:"none",
    fontFamily:"Roboto",

}))
const Image = styled("img")(({theme})=>({  
width:"25px",
height:"25px"

}))
const Block3 = ({packages,pack,setPack}) => {
  // console.log(packages)

    const [but, setBut] = useState("all");
    const [expanded, setExpanded] = React.useState(false);

    const result = packages && packages.data?.data?.filter(check)

    function check(item){
      return item.type.toLowerCase()==="premium"
    }

    const handleExpandClick = () => {
      setExpanded(!expanded);
      setBut(expanded ? "all" : "less")
    };

    useEffect(() => {
      let glider = document.getElementById('productsGlider3')

      if(glider){
        new Glider(document.getElementById('productsGlider3'), {
          // Optional parameters
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true,
          rewind: true,
          duration: 0.5,
          dots: ".pagination",
          arrows: {
            prev: ".productsGlider-prev3",
            next: ".productsGlider-next3"
          },
        
          // Responsive breakpoints
          // responsive: [
          //   {
          //     breakpoint: 600,
          //     settings: {
          //       slidesToShow: 2.5,
          //       draggable: true,
          //       rewind: true,
          //       duration: 0.5,
          //     }
          //   },
          //   {
          //     breakpoint: 960,
          //     settings: {
          //       slidesToShow: 3.5,
          //       scrollLock: false,
          //       rewind: true
          //     }
          //   },
          //   {
          //     breakpoint: 1200,
          //     settings: {
          //       slidesToShow: 4.5,
          //       scrollLock: false,
          //       rewind: true,
          //     }
          //   }
          // ]
        });
      }
      
    }, [])
  return (
    <div style={{position:'relative',width:'100%'}}>
    {/* <Box sx={{margin:"50px 0px 40px 0px"}}>
    <Paragraph variant='h2' sx={{fontSize:{md:"2.5rem", xs:"2rem"}, fontWeight:"500", textAlign:"center", color:"teal"}} >Choose Basics Website Plans</Paragraph>
    </Box> */}
  <Container sx={{">div":{gap:'10px'}}} className='productsGlider-inner3' id='productsGlider3'>
    {result && result.map((item,index)=>(
      <CardContainer onClick={()=>{setPack({type:`${item.type}`,plan:`${item.plan}`,duration:null})}} key={index}>
        <Card sx={{ width:{md:"400px", sm:"300px", xs:"250px"}, }}>
        <Radio checked={pack.type===item.type && pack.plan===item.plan}/>
      <CardContent sx={{padding:`${but}`==="all"?"0px 10px 30px 20px":"0px 10px 0px 20px",marginTop:'-33px', display:"flex", justifyContent:'center', alignItems:"space-between", flexDirection:"column"}}>
        <Paragraph variant="h4" color="teal" sx={{fontSize:"24px",marginBottom:"5px",textAlign:"center", letterSpacing:"1px" }}>
        {item.plan} Plans for {item.category}
        </Paragraph>
        <Paragraph variant="body1" sx={{textAlign:"center"}} >Ideal Solution for personal website</Paragraph>
        <Box sx={{display:"flex", justifyContent:"center", width:"100%", gap:"5px", marginTop:"20px"}} >
          <Paragraph variant='body1' sx={{textDecoration:"line-through",fontSize:"20px", color:"#333"}} >₹899.00 </Paragraph>
       <Box sx={{width:"120px", height:"30px", background:"teal", color:"white", borderRadius:"15px", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"20px", fontWeight:"500"}}>Save 80%</Box>
        </Box>
        <Box sx={{display:"flex", justifyContent:"center",alignItems:"center", gap:"1px", marginTop:"10px"}}>
        <Paragraph sx={{fontSize:"20px", fontWeight:"500"}} >₹</Paragraph>

            <Paragraph sx={{fontSize:"30px", fontWeight:"600"}} >{item.price}</Paragraph>
            <Paragraph sx={{fontSize:"16px", fontWeight:"500"}}>/half-year</Paragraph>
        </Box>
        {/* <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", paddingBottom:"30px",borderBottom:"2px solid #eee"}} >
        <Button2>Add To Cart</Button2>
        </Box> */}

     <Paragraph sx={{fontSize:"18px", fontWeight:"600", marginBottom:""}} >Top Feature</Paragraph>
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> {item && item.features.website} Website (Static)
        </Paragraph>

{item.features.sourceCode ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> Source Code
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
     Source code
     </Paragraph>
    </Box>
}


{item.features.adminPanel ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> Admin Panel
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
     Admin Panel
     </Paragraph>
    </Box>
}


{item.features.responsive ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> Responsive
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
     Responsive
     </Paragraph>
    </Box>
}


{item.features.customizeDesign ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> Customize Design
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
     Customize Design 
     </Paragraph>
    </Box>
}

<Paragraph sx={{fontSize:"18px", fontWeight:"600", margin:"10px 0px"}} >Domain</Paragraph>

{item.domain.mainDomain ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> Domain
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
    Domain
     </Paragraph>
    </Box>
}

{item.domain.subDomain ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />Subdomain
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
    Subdomain
     </Paragraph>
    </Box>
}

{item.domain.ssl ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />SSL
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
    SSL
     </Paragraph>
    </Box>
}

    </CardContent>
    <CardActions sx={{display:"flex", justifyContent:"center"}} >
        <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        sx={{display:'flex', justifyContent:"center", fontSize:"16px", fontFamily:"Roboto", fontWeight:"450", color:"teal",position:"absolute",bottom:"0%"}}
        >
        View {but} Services
        </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent sx={{padding:"0px 10px 30px 20px", display:"flex", justifyContent:'center', alignItems:"space-between", flexDirection:"column"}} >

    <Paragraph sx={{fontSize:"18px", fontWeight:"600", margin:"10px 0px"}} >Hosting</Paragraph>

{item.hosting.server ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> {item.hosting.server}
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
      Server
     </Paragraph>
    </Box>
}
{item.hosting.database ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> Database -  {item.hosting.database}
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
      Server
     </Paragraph>
    </Box>
}

{item.hosting.storage ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> Storage -  {item.hosting.storage}
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
     Storage
     </Paragraph>
    </Box>
}

{item.hosting.weaklyBackup ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />Weekly Backup
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
    Weekly Backup
     </Paragraph>
    </Box>
}
{item.hosting.cronjobs ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> Cronjobs
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
    Cronjobs
     </Paragraph>
    </Box>
}
{item.hosting.bandWidth ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />Bandwidth - {item.hosting.bandWidth}
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
    BandWidth
     </Paragraph>
    </Box>
}

<Paragraph sx={{fontSize:"18px", fontWeight:"600", margin:"10px 0px"}} >Security</Paragraph>

{item.security.protectedNameServer ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> Protected Nameservers
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
    Protected NameServers
     </Paragraph>
    </Box>
}

<Paragraph sx={{fontSize:"18px", fontWeight:"600", margin:"10px 0px"}} >Free Bonuses</Paragraph>
{item.freeBonus.buisnessEmail.status ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> {item.freeBonus.buisnessEmail.value} Business Email
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
    Business Email
     </Paragraph>
    </Box>
}

{item.freeBonus.logo ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />  Logo
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
    Logo
     </Paragraph>
    </Box>
}

{item.freeBonus.seo ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} />  SEO
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
    SEO
     </Paragraph>
    </Box>
}

    <Paragraph sx={{fontSize:"18px", fontWeight:"600", margin:"10px 0px"}} >Products</Paragraph>
    {item.products.singleProduct ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> Single Product
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
      Single Product
     </Paragraph>
    </Box>
}

{item.products.multiProduct ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> Multi Product
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
      Multiple Product
     </Paragraph>
    </Box>
}


<Paragraph sx={{fontSize:"18px", fontWeight:"600", margin:"10px 0px"}} >Technical</Paragraph>

{item.technicalDetails.gitAccess ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> Git Access
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
      Git Access
     </Paragraph>
    </Box>
}

{item.technicalDetails.sshAccess ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> SSH Access
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
      SSH Access
     </Paragraph>
    </Box>
}
{item.technicalDetails.dns ? 
        <Paragraph variant="body1" sx={{fontSize:"14px",display:"flex", alignItems:"center", gap:"20px",marginTop:"5px" }}>
         <TbCheck style={{color:"green", fontSize:"30px", fontWeight:"1000"}} /> DNS
        </Paragraph>
      :    
        <Box variant="body1" sx={{fontSize:"14px",display:"flex",  alignItems:"center", gap:"20px",marginTop:"5px", paddingBottom:"30px" }}>
      <Image src="/images/category/packagedetails/cross.png"  />
     <Paragraph>
      DNS
     </Paragraph>
    </Box>
}


    </CardContent>
    </Collapse>
    </Card>
        </CardContainer>
          ))}
    
  </Container>
  <span role="tablist" className="pagination"></span>
        <span className="productsGlider-prev3"><ChevronLeftIcon/></span>
        <span className="productsGlider-next3"><ChevronRightIcon/></span>
          </div>
  )
}

export default Block3