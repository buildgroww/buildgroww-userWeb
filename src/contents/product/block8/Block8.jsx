import { Box, Button, Dialog, RadioGroup, Slide, Step, StepButton, Stepper, Tab, Tabs, Typography, useTheme, Zoom } from '@mui/material'
import React, { useState ,useRef, useEffect} from 'react'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'
import { useDispatch, useSelector } from 'react-redux';
import Block1 from './block1/Block1';
import Block2 from './block2/Block2';
import Block3 from './block3/Block3';
import Block4 from './block4/Block4';
import Block5 from './block5/Block5';
import { addPackages, cartListProduct, createCart } from '../../../redux/apiCalls';
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { getAddonSuccess } from '../../../redux/addOnsRedux';
import { updateCheck } from '../../../redux/cartRedux';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const steps = ['Select Package', 'Select Duration', 'Select AddOn'];

function Block8({open,setOpen,clickType}) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

  // useEffect(() => {
  //     const fetchData = async ()=>{
  //         await addPackages({category:"website"},dispatch)
  //     }
  //     fetchData();
  // }, [])
  

    const user = useSelector((state)=> state.user)
    const packages = useSelector((state)=> state.package.packages)
    const [pack, setPack] = useState({type:"",plan:"",duration:null});
    const [addOn, setAddOn] = useState([]);
    const [loading, setLoading] = useState(false);

    const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [value, setValue] = useState("1");

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    const newCompleted = completed;
    newCompleted[newActiveStep-1] = true;
    setCompleted(newCompleted);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCartButton = async (e)=>{
    e.preventDefault();

    const res = packages?.data?.data?.filter((item)=>{
      return item.category==='website' && item.type === pack.type && item.plan === pack.plan && item.durationMonths === pack.duration;
    })
    let item = {
      "productId": window.location.pathname.split('/')[2],
      "qty": 1,
      "packageId":`${res[0].id}`,
      "addonId":addOn
    }
    console.log(item)
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
      // else{
      //     dispatch(addItem(item));
      //     setClick(1);
      // }
  }

  const buyNowButton = async()=>{
      const res = packages?.data?.data?.filter((item)=>{
        return item.category.toLowerCase()==='website' && item.type.toLowerCase() === pack.type.toLowerCase() && item.plan.toLowerCase() === pack.plan.toLowerCase() && item.durationMonths === pack.duration;
      })

      let item = {
        "productId": window.location.pathname.split('/')[2],
        "qty": 1,
        "packageId":`${res[0].id}`,
        "addonId":addOn
      }
      setLoading(true);
          let objProduct = {
            "userId":`${user.currentUser?.data?.id}`,
            "products":[
                item
            ]
          }
          let query = {"userId":`${user.currentUser?.data?.id}`,"isDeleted":false}
          let sort = {"name":1}
          const resCreate = await createCart(objProduct);
          const resGet = await cartListProduct(query,sort,dispatch)
          setLoading(false)
          console.log(resCreate,resGet)
          if(resCreate.data?.status==='SUCCESS' && resGet.data?.status==='SUCCESS'){
            setOpen(false)
            dispatch(updateCheck(true))
            navigate(`/checkout/${window.location.pathname.split('/')[2]}/${res[0].id}`)
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
    
  return (
    <div>
        <Dialog 
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <Box sx={{padding:'10px',position:'relative',background:'rgb(127 127 127 / 15%);'}}>
            <Stepper sx={{width:'100%!important',background:`${theme.colors.alpha.white[100]}`,borderRadius:'5px',zIndex:1,position:"sticky",left:0,right:0,top:0,display:{sm:'flex',xs:'none'},paddingTop:'10px',paddingBottom:'10px'}} nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit">
              {label}
            </StepButton>
          </Step>
        ))}
        </Stepper>
        <Stepper sx={{width:'100%!important',background:`${theme.colors.alpha.white[100]}`,borderRadius:'5px',zIndex:1,position:"sticky",left:0,right:0,top:0,display:{sm:'none',xs:'flex'},paddingTop:'5px',paddingBottom:'5px'}} nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton sx={{".css-1yispu8-MuiStepLabel-label.MuiStepLabel-alternativeLabel":{marginTop:'5px'}}} color="inherit">
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0?<Box sx={{ width: '100%', typography: 'body1',margin:'20px 0' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList sx={{display:{sm:'flex',xs:'none'}}} onChange={handleChange}  centered>
            <Tab  label="Basic Plan" value="1" />
            <Tab label="Advance Plan" value="2" />
            <Tab label="Premium Plan" value="3" />
          </TabList>
          <TabList sx={{display:{sm:'none',xs:'flex'}}} onChange={handleChange}  centered>
            <Tab sx={{paddingLeft:'10px!important',paddingRight:'10px!important'}}  label="Basic" value="1" />
            <Tab sx={{paddingLeft:'10px!important',paddingRight:'10px!important'}} label="Advance" value="2" />
            <Tab sx={{paddingLeft:'10px!important',paddingRight:'10px!important'}} label="Premium" value="3" />
          </TabList>
        </Box>
        {/* <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={packageId}
        onChange={handleRadioChange}> */}
        <TabPanel value="1"><Block1 packages={packages} pack={pack} setPack={setPack}/> </TabPanel>
        <TabPanel value="2"><Block2 packages={packages} pack={pack} setPack={setPack}/></TabPanel>
        <TabPanel value="3"><Block3 packages={packages} pack={pack} setPack={setPack}/></TabPanel>
        {/* </RadioGroup> */}
      </TabContext>
    </Box>
:null}
{activeStep === 1?<Box sx={{ width: '100%', typography: 'body1',margin:'20px 0 40px 0', }}>
  <Block4 packages={packages} pack={pack} setPack={setPack} />
</Box>:null}
{activeStep === 2?<Box sx={{ width: '100%', typography: 'body1',margin:'20px 0 40px 0',padding:{sm:'0 40px',xs:'0 10px'} }}>
  <Block5 addOn={addOn} setAddOn={setAddOn} />
</Box>:null}
      <div style={{width:'100%!important',zIndex:100,position:"sticky",margin:'-10px',left:0,right:0,bottom:0,background:'#DA4453',}}>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button sx={{color:`${theme.colors.alpha.white[100]}`,fontFamily:'Roboto'}} onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography> */}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 ,padding:'5px 0'}}>
              <Button sx={{color:`${theme.colors.alpha.white[100]}`,background:`#DA4453`,fontFamily:'Roboto',mr: 1,borderRadius:'5px',padding:'5px 10px',gap:'3px',marginLeft:'5px'}}
                // color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                variant='contained'
              >
              <KeyboardBackspaceIcon sx={{fontSize:'23px'}}/>  Back 
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {activeStep !== 2 ?
                  <Button 
                  variant='contained'
                  sx={{color:`${theme.colors.alpha.white[100]}`,background:`#DA4453`,fontFamily:'Roboto',mr: 1,borderRadius:'5px',padding:'5px 10px',gap:'5px'}} 
                  onClick={handleNext}
                  disabled={(activeStep === 0 ?( pack.type==="" && pack.plan===""):pack.duration===null)}
                >
                  Save <EastIcon sx={{fontSize:'20px'}}/>
                </Button>:
                `${clickType}`==="addToCart" ?
                <Button 
                variant='contained'
                sx={{color:`${theme.colors.alpha.white[100]}`,background:`#DA4453`,fontFamily:'Roboto',mr: 1,borderRadius:'5px',padding:'5px 10px',gap:'3px'}} 
                onClick={handleCartButton}
                disabled={pack.duration===null && pack.type==="" && pack.plan===""}
                >
                  Add to Cart {loading ? <CircularProgress/> : <EastIcon sx={{fontSize:'20px'}}/>}
                </Button> :  
                <Button 
                variant='contained'
                sx={{color:`${theme.colors.alpha.white[100]}`,background:`#DA4453`,fontFamily:'Roboto',mr: 1,borderRadius:'5px',padding:'5px 10px',gap:'3px'}} 
                onClick={buyNowButton}
                disabled={pack.duration===null && pack.type==="" && pack.plan===""}
                >
                  Buy Now {loading ? <CircularProgress/> : <EastIcon sx={{fontSize:'20px'}}/>}
                </Button>  
              }
            </Box>
          </React.Fragment>
        )}
      </div>
      </Box>
        </Dialog>
    </div>
  )
}

export default Block8