import { Add,  CheckCircleOutline, Favorite, ThumbDown, ThumbUp, } from '@mui/icons-material'
import { Box, Checkbox, IconButton, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductsListPopulate, updateProduct } from '../../../../redux/apiCalls'
// import { update } from '../../../../../../techpyro-backend/model/product'
const ReviewWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: 'column',
  borderTop: "1px solid #EEEEEE",
  margin: "50px 20px",
}))
const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px"
}))

const Image = styled("img")(({ theme }) => ({
  width: "100px",
  height: '100px',
  objectFit: "cover",
  marginBottom:"20px"
}))
const UserDetailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  borderBottom: "1px solid #EEEEEE",



}))
const UserDetail = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems:"center",
  color: "#878787",
  [theme.breakpoints.down('sm')]: {
    gap:"5px",
    flexWrap:"wrap"


  },

}))
const UserLike = styled(Box)(({ theme }) => ({
  display: "flex",
  marginRight: "10px",
  marginBottom: "30px",
  alignItems:"center",
  [theme.breakpoints.down('sm')]: {
    gap:"20px"
  },
}))
const AllReviewButton = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "10px 50px 20px 50px",
  [theme.breakpoints.down('sm')]: {
    margin:"10px 20px"
  },
}))

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Block41 = ({product}) => {
  const id = product.data.id
const [populate, setPopulate] = useState("review.userId")
const [query, setQuery] = useState({_id:id})
const [products, setProducts] = useState();
const [liked, setLiked] = useState(false);
const [disliked, setDisliked] = useState(false);
const [likes, setLikes] = useState(new Map());
const [dislikes, setDislikes] = useState(new Map());
const [reviews , setReviews] = useState([])

  const dispatch = useDispatch()
  useEffect(()=>{
    const getData = async() =>{
      const res = await ProductsListPopulate(populate,query,dispatch)
      setProducts(res.data)
      console.log(res.data)
    }
    getData()
  }, [])

  useEffect(()=>{
    const setLikes = async() =>{
     console.log(likes)
      console.log(dislikes)
   
      // const response = await updateProduct({review:review}, id, dispatch)    

    }
  }, [])

  

  const handleLike = async(review, value) => {
    if (!liked) {
    console.log(review)
    var updatedLikes = new Map(likes);
    const updatedDislikes = new Map(dislikes)
    // console.log(updatedLikes)
    var currentLikes = updatedLikes.get(review) || value;
    const currentDislikes = updatedDislikes.get(review) || value;
    // updatedLikes.set(review, currentLikes + 1);
    setLikes(updatedLikes.set(review, currentLikes + 1));
    setLiked(true)
    console.log(likes)
    setReviews([{
     like : likes.review
      }])
    const response = await updateProduct(reviews, id, dispatch) 
    console.log(response)

    if (disliked) {
    setDislikes(updatedDislikes.set(review, currentDislikes - 1))
      setDisliked(false);
    }
    }else{
      setLikes(updatedLikes.set(review, currentLikes - 1))
      setLiked(false);
    }
  };

  const handleDislike = async(review, value) => {
    console.log(review)
    if (!disliked) {
    var updatedDislikes = new Map(dislikes);
    const updatedLikes = new Map(likes);
    const currentLikes = updatedLikes.get(review) || value;
    var currentDislikes = updatedDislikes.get(review) || value;
    // console.log(currentDislikes)
    setDislikes(updatedDislikes.set(review, currentDislikes + 1))
    setDisliked(true)
    console.log(dislikes)
    setReviews([{
      disLike : dislikes.review 
       }])
     const response = await updateProduct(reviews, id, dispatch) 
     console.log(response)
    if (liked) {
    setLikes(updatedLikes.set(review, currentLikes - 1))
      setLiked(false);
    }
    }else{
      setDislikes(updatedDislikes.set(review, currentDislikes - 1))
      setDisliked(false);
    }
  };
  return (
    <>
  <ReviewWrapper >
{products && products.data.data[0].review.map((item)=>(
    <div key={item.id} >
      <Box sx={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "20px" }} >
        {/* <Typography sx={{ display: "flex", justifyContent: 'center', alignItems: "center", background: "green", color: "white", width: { lg: "40px", xs: "45px" }, height: "25px", borderRadius: "5px", fontSize: { md: "14px", sm: "12px" }, marginTop: "10px" }} >4.2 <Star sx={{ fontSize: { md: "13px", xs: "1rem !important" }, color: "white", paddingLeft: "3px", }} /> </Typography> */}
        <Typography sx={{ fontSize: "14px", fontWeight: "400", marginTop: "10px" }}  ><b>Customer Review: </b>{item.title ? item.title :"Default Title "}</Typography>
      </Box>
      <Box sx={{ marginBottom: "20px" }} >
        <Typography>{item.discription}</Typography>
      </Box>
      <UserDetailContainer>
        <UserDetail>
          <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }} > { item && item.userId && item.userId.name && item.userId.name}<CheckCircleOutline sx={{ background: "green", color: "white", borderRadius:"50%" }} />Certified User </Typography>
          <Typography>{item && item.userId && item.userId.address && item.userId.address[0] && item.userId.address[0].city && item.userId.address[0].city}</Typography>
        </UserDetail>
        <UserLike>
        <IconButton onClick={() => handleLike(item.id, item.like)} >
          <ThumbUp />
        </IconButton>
        <span>{likes.get(item.id) || item.like}</span>
        <IconButton onClick={() => handleDislike(item.id, item.disLike)} >
          <ThumbDown />
        </IconButton>
        <span>{dislikes.get(item.id) || item.disLike}</span>
        </UserLike>
      </UserDetailContainer>
    </div>
      ))}
      <AllReviewButton>
        <Typography color="primary" sx={{ fontSize: "20px", fontWeight: "600" }} > All 111 Reviews </Typography>
        <Add sx={{ color: "#878787" }} />
      </AllReviewButton>
    </ReviewWrapper>
</>
)
}

export default Block41