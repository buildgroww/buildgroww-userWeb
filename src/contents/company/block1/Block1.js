import {  ArrowDropDown, Close, Phone,  Reply, Tune, WhatsApp } from '@mui/icons-material';
import {  Box, Button, Card,  CardMedia,  Rating, Stack, Typography, styled } from '@mui/material';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";



const StyleToolbar = styled(Box)(({theme})=>({
backgroundColor:"#FFFFFF",
textAlign:"justify",
}))

function Block1({companyData}) {
  const catMenu = useRef(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const [showNumber, setShowNumber] = useState(false);
  const location = window.location.pathname.split('/')[1]
  const search = window.location.pathname.split('/')[2].replace("%20"," ");


  const closeOpenMenus = (e)=>{
    if(catMenu.current && open && !catMenu.current.contains(e.target)){
        setOpen(false)
    }
}
document.addEventListener('mousedown',closeOpenMenus);
const handleOpen = () =>{
  setOpen(true)
}
const handleClose = () =>{
  setOpen(false)
}

  return (
    <StyleToolbar>
<Box sx={{  padding:"20px",}}>
  <Typography  sx={{paddingY:"10px",fontSize:{md:"24px",sm:"24px",xs:"16px"},fontWeight:"600"}} >{search} in {location}</Typography>
  <Box sx={{display:"flex",gap:"30px",flexWrap:"wrap"}}>
<Box>
  <Button sx={{border:"1px solid #000",padding:"5px 10px",backgroundColor:"#F7F7F7",borderRadius:"5px",color:"#000","&:hover":{
    backgroundColor:'#F7F7F7',color:"black"
  }}} endIcon={<ArrowDropDown/>} >Sort by</Button>
</Box>
<Box>
  <Button sx={{border:"1px solid #000",padding:"5px 10px",backgroundColor:"#F7F7F7",borderRadius:"5px",color:"#000","&:hover":{
    backgroundColor:'#F7F7F7',color:"black"
  }}} endIcon={<ArrowDropDown/>} >Ratings</Button>
</Box>
<Box>
  <Button sx={{border:"1px solid #000",padding:"5px 10px",backgroundColor:"#F7F7F7",borderRadius:"5px",color:"#000","&:hover":{
    backgroundColor:'#F7F7F7',color:"black"
  }}} startIcon={<Tune/>} >All Filters</Button>
</Box>
  </Box>
</Box>
{companyData.companyData && companyData.companyData.data && companyData.companyData.data.data && companyData.companyData.data.data.map((item,index)=>{
    return <Box key={index} sx={{paddingY:"30px"}}>
    <Card sx={{display:"flex",padding:"20px",gap:"30px",flexDirection:{md:"row",sm:"row",xs:'column'}}}>
        <CardMedia
          onClick={()=>{navigate(`/${location}/${item && item.name}/${item && item.id}`)}}
          component="img"
          sx={{ width:{md:180,sm:180,xs:"100%"},height:200,borderRadius:"5px",cursor:'pointer' }}
          image={`${item.logo}`}
          alt={`${item.name}`}
        />
          <Box >
            <Typography onClick={()=>{navigate(`/${location}/${item && item.name}/${item && item.id}`)}} sx={{fontSize:{md:"24px",sm:"24px",xs:"18px"},fontWeight:"600",cursor:'pointer','&:hover':{color:'#65cb7a'}}}>
                {item.name}
            </Typography>
            <Box sx={{display:"flex",gap:"10px",paddingY:"10px",alignItems:"center",flexWrap:"wrap"}}>
              <Box>
                <Button sx={{backgroundColor:"#339D3A",color:"#fff",padding:"1px 3px",minWidth:"30px",borderRadius:"5px"}}>3.5</Button>
              </Box>
              <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
              </Stack>
              <Typography>15 Rating</Typography>
            </Box>
            <Typography sx={{fontSize:{md:"18px",sm:"18px",xs:"16px"},paddingY:'5px'}}>{item.title}  
            {/* <span style={{fontSize:"14px"}}>4.4km</span> */}
                 </Typography>
              <Typography sx={{fontSize:"16px"}}><span style={{color:"#339D3A"}}>Open</span> Until 9:30 pm</Typography>
              <Typography sx={{fontSize:"16px"}}>{item && item.address && item.address[0] && item.address[0].locality},{item && item.address && item.address[0] && item.address[0].city},{item && item.address && item.address[0] && item.address[0].state},{item && item.address && item.address[0] && item.address[0].country}-{item && item.address && item.address[0] && item.address[0].zipcode}</Typography>
              <Box sx={{display:'flex',alignItems:'center',flexWrap:'wrap',gap:'10px',marginY:'10px'}}>
              {item.productCategory.slice(0,5).map((i,ind)=>{
                return <Box key={ind} sx={{border:'1px solid #ccc',padding:'2px 15px',borderRadius:'10px',backgroundColor:'#eee',fontSize:'14px',cursor:'pointer'}}>
                    {i && i.name}
                </Box>
              })}
              </Box>
              <Box sx={{paddingY:"10px",display:"flex",gap:"20px",alignItems:"center",flexWrap:"wrap"}}>
                <Box >
                  {(!showNumber || showNumber !== item.id) && <Button onClick={()=>{setShowNumber(`${item.id}`)}} startIcon={<Phone />} sx={{color:"#fff",backgroundColor:"green","&:hover":{
                   backgroundColor:"#339D3A"
                  }}}>Show Number</Button>}
                  {showNumber && showNumber===item.id && <a href={`tel:${item && item.owner && item.owner.phone}`} style={{textDecoration:'none'}}><Button onClick={()=>{setShowNumber(false)}} startIcon={<Phone />} sx={{color:"#fff",backgroundColor:"green","&:hover":{
                   backgroundColor:"#339D3A"
                  }}}>{item && item.owner && item.owner.phone}</Button></a>}
                </Box>
                <a href={`https://wa.me/${item && item.owner && item.owner.country_code}${item && item.owner && item.owner.phone}`} style={{textDecoration:'none'}}>
                  <Button startIcon={<WhatsApp sx={{backgroundColor:"#25D366",color:"#fff",}}  />} sx={{color:"#000",border:"1px solid #25D366",backgroundColor:"#fff","&:hover":{
                   backgroundColor:"#F7F7F7"
                  }}}>Chat</Button>
                </a>
                {/* <Box sx={{ display: 'flex', alignItems: "center", gap: "10px", position:"relative" }}>
                  <Button onClick={handleOpen} startIcon={<Reply sx={{rotate:"360deg"}}/>} sx={{color:"#000",border:"1px solid #25D366",backgroundColor:"#fff","&:hover":{
                   backgroundColor:"#F7F7F7"
                  }}}>Share</Button>
                    <Box sx={{width:"300px", zIndex:1,height:"230px", background:"#fff", boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)", position:"absolute", bottom:0, right:"0", padding:"10px" , borderRadius:"8px"}} display={open ? "block" : "none"}>
                    <Typography variant='h5' sx={{fontSize:"12px", padding:"5px 10px 15px 10px ", display:"flex", justifyContent:"space-between",textAlign:"center"}}  > Share with your friends and family to help grow online <Close onClick={handleClose} sx={{color:"gray", padding:"0px", cursor:"pointer"}} /> </Typography>
                
                <Box sx={{display:"flex", gap:"20px", justifyContent:"center", alignItems:"center",flexWrap:"wrap",width:"100%"}}  ref={catMenu} >

            <FacebookShareButton
              url={`https://buildgroww.com/${item && item.id}`}
              quote={"Digital Service ka sahi partner"}
              hashtag='#website#Apps#dashboard#CRM'
              >
              <FacebookIcon size={40} round={true} />
              <Typography>Facebook</Typography>
            </FacebookShareButton>
            
            <WhatsappShareButton
              url={`https://buildgroww.com/${item && item.id}`}
              title={"Techpyro | Digital Service ka sahi partner"}
              separator={'  '}
              >
              <WhatsappIcon size={40} round={true} />
              <Typography>Whatsapp</Typography>
            </WhatsappShareButton>

            <EmailShareButton
              url={`https://buildgroww.com/${item && item.id}`}
              subject={"Techpyro | Digital Service ka sahi partner"}
              body={"Get everything digitized with us! We are a platform providing services like website, application, dashboard, UI/UX design, digital marketing, graphic designing, logo design, presentations, and content writing for stores, hotels, restaurants, hospitals, and institutes."}
              >
              <EmailIcon size={40} round={true} />
              <Typography>Email</Typography>
            </EmailShareButton>

            <LinkedinShareButton
              url={`https://buildgroww.com/${item && item.id}`}
              title={"Digital Service ka sahi partner"}
              summary={'Get everything digitized with us! We are a platform providing services like website, application, dashboard, UI/UX design, digital marketing, graphic designing, logo design, presentations, and content writing for stores, hotels, restaurants, hospitals, and institutes.'}
              source='Techpyro.com'
              >
              <LinkedinIcon size={40} round={true} />
              <Typography>LinkedIn</Typography>
            </LinkedinShareButton>

            <PinterestShareButton
              url={`https://buildgroww.com/${item && item.id}`}
              media={"https://techpyro.com"}
            description='Get everything digitized with us! We are a platform providing services like website, application, dashboard, UI/UX design, digital marketing, graphic designing, logo design, presentations, and content writing for stores, hotels, restaurants, hospitals, and institutes.'
              >
              <PinterestIcon size={40} round={true} />
              <Typography>PinInterest</Typography>
            </PinterestShareButton>
            
            <TwitterShareButton
              url={`https://buildgroww.com/${item && item.id}`}
              title={"Digital Service ka sahi partner"}
              hashtag={['#website','#Apps','#dashboard','#CRM','#digitalagency','#graphics', '#logo']}

              >
              <TwitterIcon size={40} round={true} />
              <Typography>Twitter</Typography>
            </TwitterShareButton>

            
            <TelegramShareButton
              url={`https://buildgroww.com/${item && item.id}`}
              title={"Digital Service ka sahi partner"}
              >
              <TelegramIcon size={40} round={true} />
              <Typography>Telegram</Typography>
            </TelegramShareButton>
              </Box>
              </Box>
              </Box> */}
              </Box>
          </Box>
        
    </Card>
  </Box>
})}


    </StyleToolbar>
  )
}

export default Block1;