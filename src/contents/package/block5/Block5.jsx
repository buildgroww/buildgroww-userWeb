import { Box, styled } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Container = styled(Box)(({theme})=>({
width:"100%",
padding:"100px",

display:"flex", 
gap:"50px",
justifyContent:"center",
[theme.breakpoints.down('md')]: {
  padding:'10px 30px',

  },
  [theme.breakpoints.down('sm')]: {
    flexDirection:"column",
    padding:"50px 20px",
    gap:"20px"
  
    }


}))
const Block5 = () => {
    const [expanded, setExpanded] = React.useState(false);
    // const [expanded1, setExpanded1] = React.useState(false);


    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    // const handleChange1 = (panel) => (event, isExpanded) => {
    //   setExpanded1(isExpanded ? panel : false);
    // };
  return (
    <>
    <Typography variant='h1' sx={{ fontStyle:"Roboto", color:"#1D2A3B", textAlign:"center", marginTop:"40px"}} >Frequently Asked Questions</Typography>
    <Container>

      <Box sx={{display:'flex', flexDirection:'column', gap:'20px', width:{sm:'45%', xs:"100%"}}} >
      <Accordion sx={{width:"100%"}}  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
          <Typography variant='h4'  sx={{letterSpacing:"0.9px", color:"teal"}} >What is Website Maintenance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1' sx={{lineHeight:"20px"}} >

          Well, a website is just like your health. If you don’t go for regular check-up; your health may fall apart. Website maintenance is the act of ongoing checking or taking care of your website from minor security updates, errors, bug issues, mistakes, content updates to platform upgrades or migration.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{width:"100%"}}  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
          <Typography variant='h4'  sx={{letterSpacing:"0.9px", color:"teal"}} >What is Website Maintenance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant='body1' sx={{lineHeight:"20px"}} >

Well, a website is just like your health. If you don’t go for regular check-up; your health may fall apart. Website maintenance is the act of ongoing checking or taking care of your website from minor security updates, errors, bug issues, mistakes, content updates to platform upgrades or migration.

</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{width:"100%"}}  expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
       <Typography variant='h4'  sx={{letterSpacing:"0.9px", color:"teal"}} >What is Website Maintenance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant='body1' sx={{lineHeight:"20px"}} >

Well, a website is just like your health. If you don’t go for regular check-up; your health may fall apart. Website maintenance is the act of ongoing checking or taking care of your website from minor security updates, errors, bug issues, mistakes, content updates to platform upgrades or migration.

</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{width:"100%"}}  expanded={expanded === 'panel5'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
   <Typography variant='h4'  sx={{letterSpacing:"0.9px", color:"teal"}} >What is Website Maintenance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant='body1' sx={{lineHeight:"20px"}} >

Well, a website is just like your health. If you don’t go for regular check-up; your health may fall apart. Website maintenance is the act of ongoing checking or taking care of your website from minor security updates, errors, bug issues, mistakes, content updates to platform upgrades or migration.

</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{width:"100%"}}  expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
           <Typography variant='h4'  sx={{letterSpacing:"0.9px", color:"teal"}} >What is Website Maintenance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant='body1' sx={{lineHeight:"20px"}} >

Well, a website is just like your health. If you don’t go for regular check-up; your health may fall apart. Website maintenance is the act of ongoing checking or taking care of your website from minor security updates, errors, bug issues, mistakes, content updates to platform upgrades or migration.

</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{width:"100%"}}  expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
       <Typography variant='h4'  sx={{letterSpacing:"0.9px", color:"teal"}} >What is Website Maintenance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant='body1' sx={{lineHeight:"20px"}} >

Well, a website is just like your health. If you don’t go for regular check-up; your health may fall apart. Website maintenance is the act of ongoing checking or taking care of your website from minor security updates, errors, bug issues, mistakes, content updates to platform upgrades or migration.

</Typography>
        </AccordionDetails>
      </Accordion>
          </Box>



          <Box sx={{display:'flex', flexDirection:'column', gap:'20px', width:{sm:'45%', xs:"100%"}}} >
      <Accordion sx={{width:"100%"}}  expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
            <Typography variant='h4'  sx={{letterSpacing:"0.9px", color:"teal"}} >What is Website Maintenance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant='body1' sx={{lineHeight:"20px"}} >

Well, a website is just like your health. If you don’t go for regular check-up; your health may fall apart. Website maintenance is the act of ongoing checking or taking care of your website from minor security updates, errors, bug issues, mistakes, content updates to platform upgrades or migration.

</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{width:"100%"}}  expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
      <Typography variant='h4'  sx={{letterSpacing:"0.9px", color:"teal"}} >What is Website Maintenance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant='body1' sx={{lineHeight:"20px"}} >

Well, a website is just like your health. If you don’t go for regular check-up; your health may fall apart. Website maintenance is the act of ongoing checking or taking care of your website from minor security updates, errors, bug issues, mistakes, content updates to platform upgrades or migration.

</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{width:"100%"}}  expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
       <Typography variant='h4'  sx={{letterSpacing:"0.9px", color:"teal"}} >What is Website Maintenance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant='body1' sx={{lineHeight:"20px"}} >

Well, a website is just like your health. If you don’t go for regular check-up; your health may fall apart. Website maintenance is the act of ongoing checking or taking care of your website from minor security updates, errors, bug issues, mistakes, content updates to platform upgrades or migration.

</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{width:"100%"}}  expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
        <Typography variant='h4'  sx={{letterSpacing:"0.9px", color:"teal"}} >What is Website Maintenance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant='body1' sx={{lineHeight:"20px"}} >

Well, a website is just like your health. If you don’t go for regular check-up; your health may fall apart. Website maintenance is the act of ongoing checking or taking care of your website from minor security updates, errors, bug issues, mistakes, content updates to platform upgrades or migration.

</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{width:"100%"}}  expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
   <Typography variant='h4'  sx={{letterSpacing:"0.9px", color:"teal"}} >What is Website Maintenance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant='body1' sx={{lineHeight:"20px"}} >

Well, a website is just like your health. If you don’t go for regular check-up; your health may fall apart. Website maintenance is the act of ongoing checking or taking care of your website from minor security updates, errors, bug issues, mistakes, content updates to platform upgrades or migration.

</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{width:"100%"}}  expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
   <Typography variant='h4'  sx={{letterSpacing:"0.9px", color:"teal"}} >What is Website Maintenance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant='body1' sx={{lineHeight:"20px"}} >

Well, a website is just like your health. If you don’t go for regular check-up; your health may fall apart. Website maintenance is the act of ongoing checking or taking care of your website from minor security updates, errors, bug issues, mistakes, content updates to platform upgrades or migration.

</Typography>
        </AccordionDetails>
      </Accordion>
          </Box>


    </Container>
            </>
  )
}

export default Block5