import { Box, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { TbCheck } from 'react-icons/tb';


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
marginTop:"50px",
padding:'40px 100px',
display:"flex",
gap:"50px",
margin:"40px 0px",
flexWrap:"wrap",
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
  backgroundColor:"#063992",
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

const Block4 = () => {
  const [but, setBut] = useState("all");
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
      setBut(expanded ? "all" : "less")
    };
  return (
    <>
    <Box sx={{margin:"80px 0px 40px 0px"}}>
    <Paragraph variant='h2' sx={{fontSize:{md:"2.5rem", xs:"2rem"}, fontWeight:"500", textAlign:"center", color:"#0F73EE"}} >Select Maintenance Plans</Paragraph>
    </Box>
  <Container>
        <CardContainer  >
        <Card sx={{ width:{md:"400px", sm:"300px", xs:"350px"}, padding:"30px 10px",border:"1px solid #0F73EE",  }}>
      <CardContent sx={{padding:"50px 10px 30px 20px", display:"flex", justifyContent:'center', alignItems:"space-between", flexDirection:"column"}} >
        <Paragraph variant="h4" color="#0F73EE" sx={{fontSize:"20px",marginBottom:"30px" }}>
         START-UPS
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>




     


      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"center"}} >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{display:'flex', justifyContent:"center", fontSize:"16px", fontFamily:"Roboto", fontWeight:"450", color:"#0F73EE",position:"absolute",top:"90%"}}
        >
          View {but} Services
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent sx={{padding:"30px 10px 30px 20px", display:"flex", justifyContent:'center', alignItems:"space-between", flexDirection:"column"}} >

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
          <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px", paddingBottom:"80px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>
      </CardContent>
      </Collapse>
    </Card>
      <Button1>Add package</Button1>
        </CardContainer>

        <CardContainer  >
        <Card sx={{ width:{md:"400px", sm:"300px", xs:"350px"}, padding:"30px 10px",border:"1px solid #0F73EE",  }}>
      <CardContent sx={{padding:"50px 10px 30px 20px", display:"flex", justifyContent:'center', alignItems:"space-between", flexDirection:"column"}} >
        <Paragraph variant="h4" color="#0F73EE" sx={{fontSize:"20px",marginBottom:"30px" }}>
         START-UPS
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>




     


      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"center"}} >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{display:'flex', justifyContent:"center", fontSize:"16px", fontFamily:"Roboto", fontWeight:"450", color:"#0F73EE",position:"absolute",top:"90%"}}
        >
          View {but} Services
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent sx={{padding:"30px 10px 30px 20px", display:"flex", justifyContent:'center', alignItems:"space-between", flexDirection:"column"}} >

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
          <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px", paddingBottom:"80px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>
      </CardContent>
      </Collapse>
    </Card>
      <Button1>Add package</Button1>
        </CardContainer>

        <CardContainer  >
        <Card sx={{ width:{md:"400px", sm:"300px", xs:"350px"}, padding:"30px 10px",border:"1px solid #0F73EE",  }}>
      <CardContent sx={{padding:"50px 10px 30px 20px", display:"flex", justifyContent:'center', alignItems:"space-between", flexDirection:"column"}} >
        <Paragraph variant="h4" color="#0F73EE" sx={{fontSize:"20px",marginBottom:"30px" }}>
         START-UPS
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>




     


      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"center"}} >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{display:'flex', justifyContent:"center", fontSize:"16px", fontFamily:"Roboto", fontWeight:"450", color:"#0F73EE",position:"absolute",top:"90%"}}
        >
          View {but} Services
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent sx={{padding:"30px 10px 30px 20px", display:"flex", justifyContent:'center', alignItems:"space-between", flexDirection:"column"}} >

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
          <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px", paddingBottom:"80px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>
      </CardContent>
      </Collapse>
    </Card>
      <Button1>Add package</Button1>
        </CardContainer>


        <CardContainer  >
        <Card sx={{ width:{md:"400px", sm:"300px", xs:"350px"}, padding:"30px 10px",border:"1px solid #0F73EE",  }}>
      <CardContent sx={{padding:"50px 10px 30px 20px", display:"flex", justifyContent:'center', alignItems:"space-between", flexDirection:"column"}} >
        <Paragraph variant="h4" color="#0F73EE" sx={{fontSize:"20px",marginBottom:"30px" }}>
         START-UPS
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>




     


      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"center"}} >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{display:'flex', justifyContent:"center", fontSize:"16px", fontFamily:"Roboto", fontWeight:"450", color:"#0F73EE",position:"absolute",top:"90%"}}
        >
          View {but} Services
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent sx={{padding:"30px 10px 30px 20px", display:"flex", justifyContent:'center', alignItems:"space-between", flexDirection:"column"}} >

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
          <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px", paddingBottom:"80px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>
      </CardContent>
      </Collapse>
    </Card>
      <Button1>Add package</Button1>
        </CardContainer>


        <CardContainer  >
        <Card sx={{ width:{md:"400px", sm:"300px", xs:"350px"}, padding:"30px 10px",border:"1px solid #0F73EE",  }}>
      <CardContent sx={{padding:"50px 10px 30px 20px", display:"flex", justifyContent:'center', alignItems:"space-between", flexDirection:"column"}} >
        <Paragraph variant="h4" color="#0F73EE" sx={{fontSize:"20px",marginBottom:"30px" }}>
         START-UPS
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>




     


      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"center"}} >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{display:'flex', justifyContent:"center", fontSize:"16px", fontFamily:"Roboto", fontWeight:"450", color:"#0F73EE",position:"absolute",top:"90%"}}
        >
          View {but} Services
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent sx={{padding:"30px 10px 30px 20px", display:"flex", justifyContent:'center', alignItems:"space-between", flexDirection:"column"}} >

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
          <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>

        <Paragraph variant="body1" sx={{fontSize:"16px",display:"flex", justifyContent:"space-between", alignITems:"center", gap:"20px",marginTop:"20px", paddingBottom:"80px" }}>
         <TbCheck style={{color:"green", fontSize:"35px", fontWeight:"1000"}} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Paragraph>
      </CardContent>
      </Collapse>
    </Card>
      <Button1>Add package</Button1>
        </CardContainer>





  </Container>
          </>
  )
}

export default Block4