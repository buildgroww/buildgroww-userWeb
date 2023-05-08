import { NavigateBefore } from '@mui/icons-material'
import { Autocomplete, Box, Checkbox, Chip, FormControlLabel, FormGroup, Slider, styled, TextField, Typography, } from '@mui/material'
import React, { useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import "./leftbar.css"
const LeftContainer = styled(Box)(({ theme }) => ({
  flex: "1",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  background: "#fff",
  justifyContent: "space-between",
  alignItems: "flex-start",
  paddingLeft: "16px",
  height: "100vh",
  paddingTop: "10px",
  overflowY: "scroll",
  overflowX: "hidden",
  position: "sticky",
  top: "70px",
  [theme.breakpoints.down('md')]: {
    display: "none"
  },

}))
const Wrapper = styled(Box)((theme) => ({
  maxHeight: "100vh",
  marginBottom: "20px"



}))
const LeftItems = styled(Box)((theme) => ({
  width: "100%",
  marginBottom: "20px"
}))

function valuetext(value) {
  return `Rs${value}`;
}

const LeftBar = ({ sort, setSort, query, setQuery, setMinValue, minvalue, maxvalue, setMaxValue, value, setValue, rating, setRating, filter, setFilter }) => {
  const search = useSelector((state)=>state.search)
//   const products = useSelector((state)=>state.product?.products);
// console.log(products)
// products.data.data.forEach(item => {
//   rating = 0
//   item.reviewAndRating.forEach(element => {
//     rating += element.rating
//   })
//   console.log(rating/2.0) 
// });

const [values, setValues] = useState({"30":false,"40":false,"50":false,"60":false,"70":false});

    useEffect(() => {
      console.log(values)
      if(values){
          if(values[30]){
            setQuery({"$and":[{"price.discount":{"$gte":"30%"}},{"title.longTitle":{"$regex":`${search.query!==null?search.query:""}`,"$options":"i"}}]})
          }
          else if(!values[30]&&values[40]){
            setQuery({"$and":[{"price.discount":{"$gte":"40%"}},{"title.longTitle":{"$regex":`${search.query!==null?search.query:""}`,"$options":"i"}}]})
          }
          else if(!values[30]&&!values[40]&&values[50]){
            setQuery({"$and":[{"price.discount":{"$gte":"50%"}},{"title.longTitle":{"$regex":`${search.query!==null?search.query:""}`,"$options":"i"}}]})
          }
          else if(!values[30]&&!values[40]&&!values[50]&&values[60]){
            setQuery({"$and":[{"price.discount":{"$gte":"60%"}},{"title.longTitle":{"$regex":`${search.query!==null?search.query:""}`,"$options":"i"}}]})
          }
          else if(!values[30]&&!values[40]&&!values[50]&&!values[60]&&values[70]){
            setQuery({"$and":[{"price.discount":{"$gte":"70%"}},{"title.longTitle":{"$regex":`${search.query!==null?search.query:""}`,"$options":"i"}}]})
          }
          else{
            setQuery({"title.longTitle":{"$regex":`${search.query!==null?search.query:""}`,"$options":"i"}})
          }
      }
    }, [values]) // eslint-disable-line react-hooks/exhaustive-deps


  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    setQuery({"$and":[{"price.cost":{"$gte":value[0] || 500, "$lte":value[1] || 10000}},{"title.longTitle":{"$regex":`${search.query!==null?search.query:""}`,"$options":"i"}}]})
    setFilter(true)
  };

  useEffect(()=>{
    if((minvalue || maxvalue)){  
      if(maxvalue===MaxPrice[MaxPrice.length-1].value2){
        setQuery({"$and":[{"price.cost":{"$gte":minvalue || 0}},{"title.longTitle":{"$regex":`${search.query!==null?search.query:""}`,"$options":"i"}}]})
      }else if(maxvalue===null){
        setQuery({"$and":[{"price.cost":{"$gte":minvalue || 500}},{"title.longTitle":{"$regex":`${search.query!==null?search.query:""}`,"$options":"i"}}]})
      }
      else{
        setQuery({"$and":[{"price.cost":{"$gte":minvalue || 500, "$lte":maxvalue || 10000}},{"title.longTitle":{"$regex":`${search.query!==null?search.query:""}`,"$options":"i"}}]})
      }
      setFilter(true)
      
    }
    
    // eslint-disable-next-line
  }, [minvalue, maxvalue])
  
const handleChip = () =>{
  

}
const handleDelete = () =>{
  setFilter(false)
  setQuery({})
}
// const handlechecked = (e) =>{
// const check = +e.target.value;
// console.log(typeof(check))
// setQuery({"$and":[{"price.cost":{"$gte":minvalue || 500, "$lte":maxvalue || 10000}}, {"reviewAndRating.rating":{"gte":check || 1}}]})
// setFilter(true)
// }


const handleCheck = (e)=>{
  
  if(e.target.value==="1"){
      setValues({...values,"30":e.target.checked})
  }
  else if(e.target.value==="2"){
      setValues({...values,"40":e.target.checked})
  }
  else if(e.target.value==="3"){
      setValues({...values,"50":e.target.checked})
  }
  else if(e.target.value==="4"){
      setValues({...values,"60":e.target.checked})
  }
  else if(e.target.value==="5"){
      setValues({...values,"70":e.target.checked})
  }

}



  const MinPrice = [
    {
      value1: 500,
      label1: "500",
    },
    {
      value1: 1000,
      label1: "1000",
    },
    {
      value1: 3000,
      label1: "3000",
    },
    {
      value1: 5000,
      label1: "5000",
    },
  ];
  const MaxPrice = [
    {
      value2: 2000,
      label2: "2000",
    },
    {
      value2: 3000,
      label2: "3000",
    },
    {
      value2: 5000,
      label2: "5000",
    },
    {
      value2: 10000,
      label2: "10000+",
    },
  ];
  const marks = [
    {
      value: 0,
      label: '1000',
    },
    {
      value: 20,
      label: '2000',
    },
    {
      value: 37,
      label: '3000',
    },
    {
      value: 100,
      label: '5000',
    },
  ];

  return (
    <LeftContainer>
      <Wrapper>

        <LeftItems>
          <Typography sx={{ fontSize: "20px", marginBottom: "10px" }} variant="h6">Filters</Typography>
            { filter  &&  <Chip
          label="Price"
          sx={{marginBottom:"20px"}}
          onClick={handleChip}
          onDelete={handleDelete}
        /> }
          <Box width="100%" height="1px" sx={{ background: "#EEEEEE", marginBottom: "20px" }}></Box>
          <Typography variant="body2" sx={{ fontSize: "16px", letterSpacing: "0.8px", marginBottom: "10px" }}>CATEGORIES</Typography>
          <Box mb={1} sx={{ display: "flex", justifyContent: 'flex-start', alignItems: "center", padding: "0px" }}>
            <NavigateBefore sx={{ fontSize: "24px" }} />
            <Typography variant="body2">Website</Typography>
          </Box>
          <Typography variant="h6">Website</Typography>
        </LeftItems>
        <LeftItems>
          <Box width="100%" height="1px" sx={{ background: "#EEEEEE", marginBottom: "20px" }}></Box>
          <Typography variant="body2" sx={{ fontSize: "16px", letterSpacing: "0.8px", marginBottom: "10px", fontWeight: "500" }}>Price</Typography>
          <Box>
            <Slider
              getAriaLabel={() => 'Price Range'}
              defaultValue={3000}
              valueLabelDisplay="auto"
              onChange={handleChange}
              marks={marks}
              value={value}
              step={2000}
              min={500}
              bgColor="white"
              max={10000}
              getAriaValueText={valuetext}
              sx={{
                color: 'primary',
                '& .MuiSlider-track': {
                  border: 'none',
                },
                '& .MuiSlider-thumb': {
                  width: 20,
                  height: 20,
                  backgroundColor: '#fff',
                  '&:before': {
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                  },
                  '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: 'none',
                  },
                },
              }}
            />
            <Box sx={{ display: "flex", gap: "10px", justifyContent: "space-between", alignItems: 'center' }}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={MinPrice}
                size="small"
                isOptionEqualToValue={(option, value) => option.value1 === value.value1}
                // defaultValue={MinPrice[MinPrice.length-1]}
                onChange={(e, value) => setMinValue(value.value1)}
                getOptionLabel={(Option) => Option.label1 || ""}
                sx={{ width: 90 }}
                renderInput={(params) => <TextField {...params} label="Min" />}
              />
              To

              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={MaxPrice}
                isOptionEqualToValue={(option, value) => option.value2 === value.value2}
                // defaultValue={MaxPrice[MaxPrice.length-1]}
                size="small"
                onChange={(e, value) => setMaxValue(value.value2)}
                getOptionLabel={(options) =>options.label2 || ""}
                sx={{ width: 80 }}
                renderInput={(params) => <TextField  {...params} label="Max" />}
              />
            </Box>
          </Box>
        </LeftItems>
        {/* <LeftItems>
          <Box width="100%" height="1px" sx={{ background: "#EEEEEE", marginBottom: "20px" }}></Box>
          <Typography variant="body2" sx={{ fontSize: "16px", letterSpacing: "0.8px", marginBottom: "10px", fontWeight: "500" }}>Customer Ratings</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }} >
            <FormGroup>
              <FormControlLabel control={<Checkbox name='rating' value={4}  onClick={(e)=>handlechecked(e)}  />} label={`4 star Rating and above`}  />
              <FormControlLabel control={<Checkbox name='rating' value={3}  onClick={(e)=>handlechecked(e)} />} label={`3 star Rating and above`} />
              <FormControlLabel control={<Checkbox name='rating' value={2}  onClick={(e)=>handlechecked(e)} />} label={`2 star Rating and above`} />
            </FormGroup>
          </Box>
        </LeftItems> */}

        <LeftItems>
          <Box width="100%" height="1px" sx={{ background: "#EEEEEE", marginBottom: "20px" }}></Box>
          <Typography variant="body2" sx={{ fontSize: "16px", letterSpacing: "0.8px", marginBottom: "10px", fontWeight: "500" }}>Discounts</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }} >
          <FormGroup>
              <FormControlLabel control={<Checkbox value={1} onChange={(e)=>handleCheck(e)} />} label={`30% or more`} />
              <FormControlLabel control={<Checkbox value={2} onChange={(e)=>handleCheck(e)}/>} label={`40% or more`} />
              <FormControlLabel control={<Checkbox value={3} onChange={(e)=>handleCheck(e)}/>} label={`50% or more`} />
              <FormControlLabel control={<Checkbox value={4} onChange={(e)=>handleCheck(e)}/>} label={`60% or more`} />
              <FormControlLabel control={<Checkbox value={5} onChange={(e)=>handleCheck(e)}/>} label={`70% or more`} />
            </FormGroup>
          </Box>
        </LeftItems>

        <LeftItems>
          <Box width="100%" height="1px" sx={{ background: "#EEEEEE", marginBottom: "20px" }}></Box>
          <Typography variant="body2" sx={{ fontSize: "16px", letterSpacing: "0.8px", marginBottom: "10px", fontWeight: "500" }}>GST Invoice available</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }} >
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label={`GST Invoice Available`} />
            </FormGroup>
          </Box>
        </LeftItems>

      </Wrapper>
    </LeftContainer>
  )
}

export default LeftBar