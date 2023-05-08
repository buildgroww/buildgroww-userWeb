import React, { useState } from "react";
import { Container, Typography, TextField, Box, Rating, Button, Grid, Paper, Divider, Avatar, Dialog, DialogContent, DialogContentText } from "@mui/material";
import styled from "@mui/material/styles/styled";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Check } from "@mui/icons-material";
import { updateProduct } from "../../redux/apiCalls";

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  marginTop: (theme) => theme.spacing(4),
});

const StyledTitle = styled(Typography)({
  marginBottom: (theme) => theme.spacing(2),
});

const StyledTextField = styled(TextField)({
  marginBottom: (theme) => theme.spacing(2),
});

const StyledBox = styled(Box)({
  marginBottom: (theme) => theme.spacing(2),
});

const StyledButton = styled(Button)({
  marginBottom: (theme) => theme.spacing(2),
});
const Paragraph = styled(Typography)(({theme})=>({
    fontFamily:'Roboto'
}))
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding:"12.5px 10px ",
    borderRadius:"0px!important",
  }));
const Block1 = () => {
  const navigate = useNavigate();
const OrderProducts = useSelector((state)=>state.order.products)    
console.log(OrderProducts)
const userId = OrderProducts.data.data[0].userId;
const location = useLocation()
const url = location.pathname.split("/")[2]
// console.log(url)
var mainData;
      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
      const [rates, setRates] = useState(null);
      const [rate, setRate] = useState([])
      const [review, setReview] = useState([])
      const [open, setOpen] = useState(false)
      const [error, setError] = useState(false);
  const productmain =  OrderProducts && OrderProducts.data.data.map((item)=>{
    // console.log(item)
  mainData = item.products.filter((data)=>{
    // console.log(data.productId.id)
   return data.productId!==undefined && data?.productId.id == url
  })
  // console.log(mainData)
})
const dispatch = useDispatch()
      const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(`Title: ${title}`);
        console.log(`Description: ${description}`);
        console.log(`Rating: ${rates}`);
       setReview([{userId: userId,
        title:title,
      discription:description
      }])
      setRate([
        {
            userId:userId,
            value:rates
        }
    ])
    console.log(rate)
    console.log(review)
     const response = await updateProduct({rating:rate, review:review} ,url, dispatch)
        console.log(response)
        setTitle("")
        setDescription("")
        setRates(0)
        if (response.data.status === "SUCCESS") {
          navigate('/orderdetails')
          setOpen(true)
          setTimeout(()=>{
            setOpen(false);
          },4000)
    } else {
          setError(false)
    }
      }
      return (
        <>
  <Dialog open={error} sx={{overflow:"hidden"}}>
        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
           
          }}
        >
          <Avatar
            src="https://www.freeiconspng.com/uploads/error-icon-4.png"
            sx={{
              height: { md: "100px", xs: "80px" },
              width: { md: "100px", xs: "80px" },
              background: "#fff",
            }}
          />
          <DialogContentText>
            <Typography sx={{ fontSize: { md: "30px", xs: "20px" },textAlign: "center",fontWeight: "600",}}>Oops!</Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { md: "24px", xs: "20px" },
                textAlign: "center",
                paddingY: "10px",
                fontWeight: "600",
              }}
            >
               Something went Wrong
            </Typography>
            <Box sx={{display:"flex",justifyContent:"center"}}>
           <Button sx={{color:'#fff',background:"red","&:hover":{
            background:"red"
           }}} variant="contained" onClick={()=>setError(false)}>try again</Button>
           </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>


           <Dialog open={open}>
        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Avatar
            src="https://www.shutterstock.com/image-vector/checkmark-icon-vector-on-white-260nw-1265668291.jpg"
            sx={{
              height: { md: "120px", xs: "80px" },
              width: { md: "120px", xs: "80px" },
            }}
          />
          <DialogContentText>
            <Typography
              variant="h1"
              sx={{
                fontSize: { md: "30px", xs: "20px" },
                textAlign: "center",
                paddingY: "10px",
                fontWeight: "600",
              }}
            >
              Thank You! For you Feedback
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { md: "18px", xs: "14px" },
                textAlign: "center",
                fontWeight: "500",
                paddingY: "10px",
              }}
            >
              Your review has been saved.
            </Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>

              <Grid spacing={2} container >



                <Grid item xs={12} sx={{ display:"flex",alignItems:"center", justifyContent:"space-between", height:"auto", width:"100%", background:"#fff", margin:"20px 0px", padding:{sm:"0px 70px!important", xs:"5px 10px !important"}, flexDirection:{sm:"row", xs:"column"}}}  >
            <Box sx={{display:"flex", alignItems:"center",}} >
                    <Typography sx={{fontSize:"24px", fontWeight:"600",}} >Rating and Reviews</Typography>
                      </Box>
                    <Box sx={{display:"flex", alignItems:"center", justifyContent:"flex-end",}} >
                      <Box sx={{display:"flex", alignItems:"flex-end", flexDirection:"column", paddingRight:"15px"}} >

                      <Typography variant="h5" sx={{textTransform:"capitalize"}} >{mainData[0].productId?.title?.shortTitle}</Typography>
                      <Typography variant="body1" sx={{textTransform:"capitalize"}} >{mainData[0].packageId?.name}</Typography>
                      <Typography variant="h5"  >Addons: </Typography>
                      {mainData[0]?.addonId.map((item)=>(
                        <Typography> <Check sx={{fontSize:"12px"}} /> {item.name}</Typography>
                        ))}
                      </Box>
                      <Avatar src={mainData[0].productId.image} sx={{width:"80px", height:"100px", borderRadius:"0px!important"}} ></Avatar>

                    </Box>
                </Grid>
            <Grid item xs={12} sm={12} md={3} sx={{margin:"5px 20px"}} >
            <Item  >
        <Box sx={{display:"flex",justifyContent:"center", flexDirection:"column" }} >   
            <Paragraph variant='h4' sx={{fontSize:"20px", fontWeight:"500", color:"#333",marginBottom:"8px", textAlign:"left"}} >What makes you good review</Paragraph> 
        </Box>
    </Item>
    <Divider></Divider>

        <Item>
        <Box sx={{display:"flex",justifyContent:"center", flexDirection:"column" }} >   
            <Paragraph variant='h6' sx={{fontSize:"20px", fontWeight:"400", color:"#333",marginBottom:"8px"}} >Have you use this Product? </Paragraph>
            <Paragraph variant='body1' sx={{fontSize:"14px", fontWeight:"400"}} >Your review should be about your experience with the product.</Paragraph>   
        </Box>
    </Item>
<Divider></Divider>
    <Item>
        <Box sx={{display:"flex",justifyContent:"center", flexDirection:"column" }} >   
            <Paragraph variant='h6' sx={{fontSize:"20px", fontWeight:"400", color:"#333",marginBottom:"8px"}} >Why review a product?
</Paragraph>
            <Paragraph variant='body1' sx={{fontSize:"14px", fontWeight:"400"}} >Your valuable feedback will help fellow shoppers decide!</Paragraph>   
        </Box>
    </Item>

<Divider></Divider>
    <Item>
        <Box sx={{display:"flex",justifyContent:"center", flexDirection:"column" }} >   
            <Paragraph variant='h6' sx={{fontSize:"20px", fontWeight:"400", color:"#333",marginBottom:"8px"}} >How to review a product?</Paragraph>
            <Paragraph variant='body1' sx={{fontSize:"14px", fontWeight:"400"}} >Your review should include facts. An honest opinion is always appreciated. If you have an issue with the product or service please contact us from the help centre.</Paragraph>   
        </Box>
    </Item>
  </Grid>

  <Grid item xs={12} sm={12} md={8} sx={{margin:"5px 20px"}} >
    <Item>
        <StyledContainer >
            <StyledBox component="fieldset" mb={3} borderColor="transparent" sx={{display:"flex", alignItems:"center", gap:"10px"}} >
              <Typography component="legend" sx={{fontSize:"24px", marginBottom:"10px" }} >Rate this Product</Typography>
              <Rating
                name="rating"
                value={rates}
                sx={{fontSize:"30px"}}
                onChange={(event, newValue) => {
                    setRates(newValue);
                }}
                />
            </StyledBox>
            <Divider></Divider>
            <Typography sx={{fontSize:"24px", margin:"20px 0px"}} >Review This Product</Typography>
          <form onSubmit={handleSubmit} >
            <StyledTextField
              label="Title"
              variant="outlined"
              fullWidth
              sx={{marginBottom:"10px"}}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
            <StyledTextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              sx={{marginBottom:"10px"}}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              />
            {(rates !== null || description!=="") ? <StyledButton variant="contained" color="primary" type="submit">
              Submit
            </StyledButton> : <StyledButton variant="contained" color="primary" type="submit" disabled >
              Submit
            </StyledButton> }
          </form>
        </StyledContainer>
              </Item>
            </Grid>
          </Grid>
                </>
      );
    };

export default Block1
