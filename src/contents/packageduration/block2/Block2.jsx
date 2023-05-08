
import { ArrowForward} from '@mui/icons-material'
import { Box, Button, Card, CardActionArea, CardContent, Checkbox, FormControlLabel, IconButton, Typography, Zoom, styled } from '@mui/material'
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { cartListProduct, createCart } from '../../../redux/apiCalls';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
const Paragraph = styled(Typography)(({theme})=>({
    fontFamily:"Roboto"
}))
const Label = styled("label")(({theme})=>({
width:"100%",
height:"100%",
display:"block !important",
position:"relative"

}))

  const Input = styled("input")(({theme})=>({
width:"20px",
height:"20px",
padding:"30px",
position:"absolute",
top:"30px",
left:"30px",
}))

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Block2 = ({packages, type, plans, packagess}) => {
  console.log(type)
  console.log(plans)
  console.log(packagess)
  const user = useSelector((state)=> state.user)
  const addons = useSelector((state)=> state.addon.addons)
  console.log(addons)
  const {enqueueSnackbar} = useSnackbar();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false)
const [values, setValues] = useState(48)
const [addon, setAddon] = useState([])
const navigate = useNavigate()
const handleClickOpen = () => {
  setOpen(true);
  };
const handleClose = () => {
      setOpen(false)
  };

// const handleSelect = (e) =>{
//   const a = e.target.value
//     setValues(a)
//     console.log(values)
// }

const handleCheck = (e) => {
  const { value, checked } = e.target;
  if(checked){
      setAddon([...addon, value]);
    }else{
      setAddon(addon.filter((e)=>e!==value))
    }
    console.log(addon)
  };
  const dispatch = useDispatch()
  // useEffect(()=>{
    // addAddOns(dispatch)
    // }, [])
    const handleCart = async(e) =>{

        e.preventDefault();
        
        const res = packages?.data?.data?.filter((item)=>{
          return item.category===type && item.type === plans && item.plan === packagess && item.durationMonths === +values;
        })
        let item = {
          // "productId": window.location.pathname.split('/')[2],
          "qty": 1,
          "packageId":`${res[0].id}`,
          "addonId":addon
        }
          if(user.currentUser===null || (user.currentUser.data && user.currentUser.data===null)){
              navigate('/login');
          }
          else{
            setLoading(true);
              let objProduct = {
                "userId":`${user.currentUser?.data?.id}`,
                "products":[
                    item
                ]
              }
              console.log(objProduct)
              let query = {"userId":`${user.currentUser?.data?.id}`,"isDeleted":false}
              let sort = {"name":1}
              const resCreate = await createCart(objProduct);

              const resGet = await cartListProduct(query,sort,dispatch)
              setLoading(false)
              console.log(resCreate,resGet)
              if(resCreate.data?.status==='SUCCESS' && resGet.data?.status==='SUCCESS'){
                setOpen(false)
                enqueueSnackbar('Product added successfully in your cart', {
                  variant: 'success',
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                  },
                  TransitionComponent: Zoom
                });
              }
              else{
                enqueueSnackbar('Some Error Occured', {
                  variant: 'error',
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                  },
                  TransitionComponent: Zoom
                  });
              }
          }
      }
    return (
      <>
      <Box sx={{margin:"50px 0px 40px 0px"}}>
    <Paragraph variant='h2' sx={{fontSize:{md:"2.5rem", xs:"2rem"}, fontWeight:"500", textAlign:"center", color:"#1D2A3B"}} >Choose Your Duration</Paragraph>
    </Box>

   <Box sx={{padding:{md:"0px 80px", xs:"0px 10px"}, display:"flex",gap:{lg:"10px", md:"25px", xs:"25px" }, justifyContent:{lg:"space-between", xs:"center"}, alignItems:"center", flexDirection:{sm:"row", xs:"column"}, flexWrap:"wrap"}} >
{packages.data && packages.data.data.map((item)=>(

  <Card sx={{ width: {lg:"20vw", md:"300px",sm:"300px", xs:"340px",},  overflow:"visible !important"}}>
      <CardActionArea sx={{display:"flex", justifyContent:"center", flexDirection:"column"}} >
      <Label>

      <Box sx={{width:"150px", height:"30px", background:"teal", borderRadius:"8px", position:"absolute",top:"-10px", left:"28%", display:"flex", justifyContent:"center", alignItems:"center", zIndex:"200"}} >
      <Typography sx={{fontSize:"16px", fontWeight:"500", color:"white"}} >
      Save ₹999.00
      </Typography>
    </Box>

      <Input type='radio' name="package" value={item.durationMonths} onChange={(e)=>setValues(e.target.value)}  />
        <CardContent sx={{display:"flex",justifyContent:"center", flexDirection:"column", textAlign:"center"}} >
          <Paragraph variant="h5" sx={{fontSize:"24px", fontWeight:"500",marginTop:"20px"}}>
            {item.durationMonths} Month
          </Paragraph>
          <Paragraph variant="h2" sx={{fontSize:"50px", fontWeight:"600", marginTop:"40px"}}>
          ₹{item.price}.00
          </Paragraph>
          <Paragraph variant="h2" color="text.secondary"  sx={{fontSize:"18px", fontWeight:"400"}}>
          INR per {item.durationMonths} month
          </Paragraph>
          <Paragraph variant="h2" color="text.secondary"  sx={{fontSize:"18px", fontWeight:"400", marginTop:"40px"}}>
          Plan renews at ₹{item.renewPrice}.00/year
          </Paragraph>
        </CardContent>
      </Label>
      </CardActionArea>
    </Card>
))}



   </Box>
     <Box sx={{display:"flex", justifyContent:"flex-end", padding:"20px 80px 50px 0px"}} >
   {values !== null  ? 
      <Button variant="contained" sx={{fontSize:"18px", background:"teal !important", borderRadius:"0px !important", width:"120px !important", height:"50px !important", "&:hover":{background:"white !important", color:"teal", transition:"all 0.5s linear alternate", letterSpacing:"2px"}}} size='large' endIcon={<ArrowForward/>} onClick={handleClickOpen} >Next</Button>
      :  <Button variant="contained" sx={{fontSize:"18px", background:"teal !important", borderRadius:"0px !important", width:"120px !important", height:"50px !important", "&:hover":{background:"white !important", color:"teal", transition:"all 0.5s linear alternate", letterSpacing:"2px"}}} size='large' endIcon={<ArrowForward/>} disabled >Next</Button>}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" sx={{textAlign:"center", fontSize:"20px", padding:"10px 50px" , background:"#eee"}} onClose={handleClose}>
           Select Add-ons Integrations
        </BootstrapDialogTitle>
        <DialogContent dividers>
        {/* <Typography sx={{fontSize:"24px",fontWeight:"500", textAlign:"center"}} >Integrations</Typography> */}
        <Box sx={{display:"flex", alignItems:"flex-end", justifyContent:"center",}} >
        <Box sx={{display:"flex", alignItems:"flex-start", justifyContent:"center"}} >
        <Typography sx={{fontSize:"16px",fontWeight:"500", color:"teal", letterSpacing:"1px"}} > ₹</Typography>
        <Typography sx={{fontSize:"24px",fontWeight:"500", color:"teal", letterSpacing:"1px"}} > 1000.00</Typography>
        </Box>
        <Typography sx={{fontSize:"14px",fontWeight:"500", color:"gray"}} > /Service</Typography>
        </Box>

      <Box  sx={{display:"flex", flexDirection:"column"}}>
{addons.data && addons.data.data.map((data)=>(
  <FormControlLabel
  name={data.name}
  control={<Checkbox />}
          value={data.id}
          label={data.name}
          onChange={(e)=>handleCheck(e)}
          />
   ))} 

          </Box>
        </DialogContent>
        <DialogActions>
          <Button sx={{background:"teal", color:"white", width:"100%", height:"40px","&:hover":{background:"teal", color:"white", letterSpacing:"1.5px", transition:"all 0.4s linear alternate"}, fontSize:"18px", fontWeight:"500", transition:"all 0.4s linear alternate" }} onClick={handleCart}>
            Add To Cart
          </Button>
        </DialogActions>
      </BootstrapDialog>
</Box>

    </>
  )
}

export default Block2