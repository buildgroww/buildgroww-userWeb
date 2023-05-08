import React, { useEffect } from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
import "./pageHeader.css"
import Item from './item/Item';
import Glider from 'glider-js';
import "glider-js/glider.min.css"

const SliderContainer = styled('div')({
width:"100%",

// height:"auto",
margin:"67px 0 8px 0px",
overflow:"hidden",
boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
// "@media (max-width: 1490px)": {
//  margin:"2% -1.5%"
// },

"@media (max-width: 600px)": {
  // width:"95%",
  margin:"100px 0 8px 0px",
 
 },

})
const SliderInnerContainer = styled('div')({
  width:"100%",
  // display: "flex",
  // justifyContent:"center",
  // alignItems:"space-between",
  // flexDirection:"column",
  boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  padding:"0px 200px",
  "@media (max-width:900px)":{
    padding:"0px 40px",
  },
  "@media (max-width: 600px)": {
    // width:"95%",
    padding:"0px 5px",
   
   },
})

export default function PageHeader(props) {

    // const settings = {
    //     dots: false,
    //     arrows:false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 9,
    //     // slidesToScroll: 1,
    //     autoplay: false,
    //     // autoplaySpeed: 2000,
    //     // cssEase: "linear",
    //     initialSlide:0,
    //     // prevArrow:<PreviousBtn />,
    //     // nextArrow:<NextBtn />,
    //       responsive: [
    //         {
    //           breakpoint: 1200,
    //           settings: {
    //             slidesToShow: 5,
    //             // slidesToScroll: 2,
    //             speed: 300,
    //             // arrows:true,
    //           },
    //         },
    //          {
    //           breakpoint: 980,
    //           settings: {
    //             slidesToShow: 5,
    //             swipeToSlide: true,
    //             // slidesToScroll: 1,
    //             // speed: 300,
    //             arrows:false,
    //           },
    //         },
    //         {
    //           breakpoint: 800,
    //           settings: {
    //             slidesToShow: 5,
    //             swipeToSlide: true,
    //             // slidesToScroll: 1,
    //             // speed: 300,
    //             arrows:false,
    //           },
    //         },
    //         {
    //           breakpoint: 680,
    //           settings: {
    //             slidesToShow: 5,
    //             swipeToSlide: true,
    //             // slidesToScroll: 1,
    //             speed: 300,
    //             arrows:false,
    //           },
    //         },
    //         {
    //           breakpoint: 500,
    //           settings: {
    //             slidesToShow: 5,
    //             swipeToSlide: true,
    //             // slidesToScroll: 1,
    //             speed: 300,
    //             arrows:false,
    //           },
    //         },
    //     ]
    //   };

    useEffect(() => {
      let glider = document.getElementById('homeHeader1')

      if(glider){
        new Glider(document.getElementById('homeHeader1'), {
          // Optional parameters
          slidesToShow: 5,
          slidesToScroll: 1,
          draggable: true,
          rewind: true,
          duration: 0.5,
          // dots: ".pagination",
          // arrows: {
          //   prev: ".homeHeader-prev1",
          //   next: ".homeHeader-next1"
          // },
        
          // Responsive breakpoints
          responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 5,
                draggable: true,
                rewind: true,
                duration: 0.5,
              }
            },
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 5,
                scrollLock: false,
                rewind: true
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow:5,
                scrollLock: false,
                rewind: true,
              }
            }
          ]
        });
      }
      
    }, [])

  return (
    <>
    <SliderContainer>       
       <SliderInnerContainer>
       <div className='homeHeader-inner1' id='homeHeader1'>
     { props.navData.map((item,index)=>(
      <Item posterLinks={item} key={index} />
      ))}
    </div>
      </SliderInnerContainer>  
    </SliderContainer>

      
    </>
  )
}
