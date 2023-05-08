import { Box, styled, Typography } from '@mui/material'
import React from 'react'
const Image = styled("img")(({theme})=>({
    width:"50px",
    height:"50px",
    objectFit:"cover",
}))
const Block4 = () => {
  return (
    <Box sx={{padding:{md:"40px 120px",sm:"30px 40px", xs:"20px 10px"}}}>

    <Box sx={{ width:"100%", display:"flex", justifyContent:"center",alignItems:"center"}}>
    <Box sx={{display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column", width:{sm:"70%", xs:'100%'}, gap:{md:"20px", xs:"10px"}}} >
        <Typography variant='h2' sx={{fontFamily:"Roboto", fontSize:{md:"36px",sm:"32px", xs:"28px" }, color:"#090B17", fontWeight:"700", textAlign:"center"}} > <span style={{color:"teal", fontStyle:"italic", textAlign:"center"}} > TechPyro</span> provides you a personal Designer</Typography>
        <Typography variant='body' sx={{fontFamily:"Roboto", fontSize:{sm:"20px", xs:"16px"}, color:"#676E8B", fontWeight:"400", textAlign:"center"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iste accusantium quam sunt adipisci autem quibusdam numquam, earum aliquid neque dolores, rerum minima ullam rem provident possimus dicta perferendis porro.</Typography>
    </Box>
    </Box>
    <Box sx={{display:"flex", gap:"10px", justifyContent:"center", flexDirection:{sm:"row", xs:"column"}, paddingLeft:{sm:"5px", xs:"16px"}}} >
    <Box sx={{display:'flex', justifyContent:"center", flexDirection:"column" }} >
        <Box sx={{width:"80px", height:"80px", borderRadius:"50%", backgroundColor:"lightgreen", display:"flex", justifyContent:"center", alignItems:"center", margin:"20px 0px"}} >
        <Image src="/images/category/logo/mockup.png" alt='logo brand' />
        </Box>
        <Typography variant='h6' >1. Logo Design</Typography>
        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography>Initial consultation to understand your brand and goals </Typography>
        </Box>

        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography>Concept development and design </Typography>
        </Box>

        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography>Custom logo design concepts based on your input and feedback </Typography>
        </Box>

        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography>Revisions and refinements to the chosen design until you are completely satisfied </Typography>
        </Box>
    </Box>
    <Box>
        <Box sx={{width:"80px", height:"80px", borderRadius:"50%", backgroundColor:"lightblue", display:"flex", justifyContent:"center", alignItems:"center", margin:"20px 0px"}} >
        <Image src="/images/category/logo/color.png" alt='logo brand' />
        </Box>
        <Typography variant='h6' >2. Brand Kit</Typography>
        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography>Choose a color scheme that reflects your brand's personality and values.   </Typography>
        </Box>

        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography> Develop a set of icons or symbols that can be used to represent your brand. </Typography>
        </Box>

        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography>Establish a consistent tone of voice and messaging style that aligns with your brand's personality and values.  </Typography>
        </Box>
    </Box>

    <Box>
        <Box sx={{width:"80px", height:"80px", borderRadius:"50%", backgroundColor:"lightyellow", display:"flex", justifyContent:"center", alignItems:"center", margin:"20px 0px"}} >
        <Image src="/images/category/logo/folder.png" alt='logo brand' />
        </Box>
        <Typography variant='h6' >3. Files</Typography>
        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography>High-resolution file types include SVG, PNG, EPS & PDF  </Typography>
        </Box>

        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography>They allow for easy scalability without losing resolution or quality.  </Typography>
        </Box>

        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography> Include a list of your brand's primary and secondary colors, along with their corresponding hex codes.  </Typography>
        </Box>
    </Box>

    

    </Box>

    <Box sx={{display:"flex", gap:"10px", justifyContent:{md:"center", sm:"space-between"}, flexDirection:{sm:"row", xs:"column"}, paddingLeft:{sm:"5px", xs:"16px"}}} >
    <Box>
        <Box sx={{width:"80px", height:"80px", borderRadius:"50%", backgroundColor:"lightcyan", display:"flex", justifyContent:"center", alignItems:"center", margin:"20px 0px"}} >
        <Image src="/images/category/logo/social.png" alt='logo brand' />
        </Box>
        <Typography variant='h6' >4. Social Media</Typography>
        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography>Techpyro provides logo for social media </Typography>
        </Box>
        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography>Include a properly sized version of your client's logo that can be used as their profile picture on social media platforms.  </Typography>
        </Box>
    </Box>
    <Box>
        <Box sx={{width:"80px", height:"80px", borderRadius:"50%", backgroundColor:"lightpink", display:"flex", justifyContent:"center", alignItems:"center", margin:"20px 0px"}} >
        <Image src="/images/category/logo/cards.png" alt='logo brand' />
        </Box>
        <Typography variant='h6' >5. Business Card Design</Typography>
        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography>Include a high-resolution version of your client's primary logo that can be used on their business card. </Typography>
        </Box>
        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography>Professional-quality design templates as your starting point  </Typography>
        </Box>
        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography>Provide templates when designing their business card. </Typography>
        </Box>
    </Box>

    <Box>
        <Box sx={{width:"80px", height:"80px", borderRadius:"50%", backgroundColor:"lightgoldenrodyellow", display:"flex", justifyContent:"center", alignItems:"center", margin:"20px 0px"}} >
        <Image src="/images/category/logo/brand.png" alt='logo brand' />
        </Box>
        <Typography variant='h6' >6. Brand Design</Typography>
        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography> Include a comprehensive set of brand guidelines that outline the client's brand strategy, including messaging, tone of voice, imagery style, and brand positioning.  </Typography>
        </Box>
        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography>If applicable, provide design templates for brochures, flyers, posters, or other marketing materials that incorporate the client's brand identity. </Typography>
        </Box>
        <Box sx={{display:"flex", gap:"5px", padding:"10px 10px"}} >
        <img src="/images/category/logo/check.png" alt="check" style={{width:"15px", height:"15px"}}  />
        <Typography>Build a consistent and memorable brand across all mediums </Typography>
        </Box>
    </Box>

    

    </Box>

    </Box>
  )
}

export default Block4