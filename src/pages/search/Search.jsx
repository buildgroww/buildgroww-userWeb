import { Box ,styled,IconButton,TextField,useTheme, Typography, Grid, Paper, Divider, Button} from '@mui/material'
import React, { useState } from 'react';
import WestIcon from '@mui/icons-material/West';
import { Link, useNavigate } from 'react-router-dom';
import HistoryIcon from '@mui/icons-material/History';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchProduct, updateQuery } from '../../redux/SearchRedux';
import { ProductsList } from '../../redux/apiCalls';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MyLocationIcon from '@mui/icons-material/MyLocation';

const SearchField = styled(TextField)(({theme}) => ({
    fontSize: 'unset',
    width:'100%' ,
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    color: theme.colors.alpha.black[100],
    right:'12px',
}));

const HistoryContainer = styled(Box)(({ theme }) => ({
    display:'flex',
    alignItems:'center',
    minHeight:'40px',
    gap:'20px',
    padding:'5px 20px',
    borderBottom:`1px solid ${theme.colors.alpha.black[10]}`

}));

const LinkButton = styled(Link)(({ theme }) => ({
    textDecoration:'none',
    cursor:'none',
    margin:'5px 0 5px 20px',
}));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    minWidth:'150px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  


export default function Search() {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchProducts = useSelector((state)=>state.search);
    const [list, setList] = useState(null);
    const [showLocation, setShowLocation] = useState(false);

    const handleEnter = (e)=>{
        if(e.target.value!=="" && e.key ==='Enter'){
            dispatch(addSearchProduct({key:e.target.value,value:list}));
            dispatch(updateQuery(e.target.value));
            if(window.location.pathname!=='/products'){
                navigate('/products');
            }
        } 
    }
    const handleChange = async(e)=>{
        if(e.target.value!==""){
            const query = {"title.longTitle":{"$regex":`${e.target.value}`,"$options":"i"},}
            const sort = {"name":1}
            const res = await ProductsList(query,sort);
            if(res?.data?.status==='SUCCESS'){
                setList(res.data.data);
            }
            else{
                setList(null);
            }
        }
        else{
            setList(null);
        } 
    }
  return (
    <Box sx={{display:{sm:'none',xs:'block'}}}>
        <Box sx={{display:'flex',padding:'5px 20px',}}>
            <MenuButton sx={{}} onClick={()=>navigate(-1)}>
                    <WestIcon/>
            </MenuButton>
            {!showLocation && <Button onClick={()=>{setShowLocation(true)}} type='text' sx={{display:'flex',gap:'5px',color:'#000'}}><LocationOnIcon/>Haridwar<ExpandMoreIcon/></Button>}
            {showLocation && <Button onClick={()=>{setShowLocation(false)}} type='text' sx={{color:'#000'}}>Your Location</Button>}
            
        </Box>

        {/* for category or other like product search */}

        {!showLocation && <Box>
        <Box sx={{margin:'5px 10px'}}>
            <SearchField autoFocus placeholder='Search for websites, apps and more...' sx={{ "& fieldset": { borderRadius:'5px' }, '& .MuiInputBase-input': {
            padding: "8px",
            },}} onChange={(e)=>handleChange(e)} onKeyDown={(e)=>handleEnter(e)}  />
         </Box>
        <Box>
        {list===null?null:
            list.data.map((item,index)=>(
                <HistoryContainer key={index} sx={{gap:'15px'}} onClick={()=>{dispatch(updateQuery(item?.title?.shortTitle));
                    if(window.location.pathname!=='/products'){
                        navigate('/products');
                    }
                }} button>
                    <img style={{width:'50px',height:'50px'}} src={`${item.productImages[0].path}`} alt='product'/>
                    <Typography>{item?.title?.shortTitle}</Typography>
                </HistoryContainer>
            ))}            
            <Divider/>
            {searchProducts.searchList.map((item,index)=>(
                <HistoryContainer key={index} onClick={()=>{dispatch(updateQuery(item.key));
                    if(window.location.pathname!=='/products'){
                        navigate('/products');
                    }}} sx={{gap:'10px'}} button divider>
                    <HistoryIcon/>
                    <Typography>{item.key}</Typography>
                </HistoryContainer>
            ))}
        </Box>
        </Box>}

        {/* for location search */}

        {showLocation && <Box>
        <Box sx={{margin:'5px 10px'}}>
            <SearchField autoFocus placeholder='Search Location' sx={{ "& fieldset": { borderRadius:'5px' }, '& .MuiInputBase-input': {
            padding: "8px",
            },}} onChange={(e)=>handleChange(e)} onKeyDown={(e)=>handleEnter(e)}  />
         </Box>
         <Box>
            <Button type='text' sx={{display:'flex',gap:'10px'}}><MyLocationIcon/>Current Location</Button>
         </Box>
        <Box>
        {list===null?null:
            list.data.map((item,index)=>(
                <HistoryContainer key={index} sx={{gap:'15px'}} onClick={()=>{dispatch(updateQuery(item?.title?.shortTitle));
                    if(window.location.pathname!=='/products'){
                        navigate('/products');
                    }
                }} button>
                    <img style={{width:'50px',height:'50px'}} src={`${item.productImages[0].path}`} alt='product'/>
                    <Typography>{item?.title?.shortTitle}</Typography>
                </HistoryContainer>
            ))}            
            <Divider/>
            {searchProducts.searchList.map((item,index)=>(
                <HistoryContainer key={index} onClick={()=>{dispatch(updateQuery(item.key));
                    if(window.location.pathname!=='/products'){
                        navigate('/products');
                    }}} sx={{gap:'10px'}} button divider>
                    <HistoryIcon/>
                    <Typography>{item.key}</Typography>
                </HistoryContainer>
            ))}
        </Box>
        </Box>}
        {/* <Box >
            <Box sx={{padding:'10px 20px',fontSize:'18px'}}>Trending</Box>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={0} columns={12}>
                    <LinkButton to={'/websites'}>
                        <Grid item xs={4}>
                            <Item>Top Websites</Item>
                        </Grid>
                    </LinkButton>
                    <LinkButton to={'/'}>
                        <Grid item xs={4}>
                            <Item>Top Apps</Item>
                        </Grid>
                    </LinkButton>
                    <LinkButton to={'/'}>
                        <Grid item xs={4}>
                            <Item>Ui/Ux designs</Item>
                        </Grid>
                    </LinkButton>
                    <LinkButton to={'/'}>
                        <Grid item xs={4}>
                            <Item>Digital Marketing</Item>
                        </Grid>
                    </LinkButton>
                    <LinkButton to={'/'}>
                        <Grid item xs={4}>
                            <Item>Graphics designs</Item>
                        </Grid>
                    </LinkButton>
                    <LinkButton to={'/'}>
                        <Grid item xs={4}>
                            <Item>video editing</Item>
                        </Grid>
                    </LinkButton>
                    <Typography sx={{textAlign:'center',height:'30px',width:'70px',margin:'10px 0 0 5px',fontSize:'16px'}}>More...</Typography>
                </Grid>
            </Box> 
        </Box>*/}
    </Box>
  )
}
