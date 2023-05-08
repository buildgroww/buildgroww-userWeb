import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
import Item from './item/Item';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import Header from './header/Header';
import "./block9.css";
import Glider from 'glider-js';
import "glider-js/glider.min.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SliderContainer = styled('div')({
width:"99%",
height:"auto",
margin:"0 0 10px 2px",
overflow:"hidden",
// boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
// "@media (max-width: 1490px)": {
//  margin:"2% -1.5%"

// },
// "@media (max-width: 1200px)": {
//   width:"95%",
//   margin:"1% 1rem"
 
//  },

})
const SliderInnerContainer = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent:"space-between",
  flexDirection:"column",
  boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  padding:"0 10px 0 20px",
  [theme.breakpoints.down('sm')]: {
    padding:"0 0 0 4px",
},
}));


// const PreviousBtn = (props) =>{
//   const {className,onClick} = props;
  
//    return (
//          <div className={className}   onClick={onClick}>
//           <ChevronLeftOutlined style={{color:'black',zIndex:'10',fontSize:'2.5rem' }} />
//          </div>  
//    )
// }

// const NextBtn = (props) =>{
//    const {className,onClick} = props;
//    return (
//      <div  className={className}  onClick={onClick}>
//        <ChevronRightOutlined style={{color:'black',  zIndex:'10',fontSize:'2.5rem'}} />
//      </div>
//    )
// }

export default function Block9(props) {

  // const settings = {
  //   dots: false,
  //   arrows:true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3.5,
  //   slidesToScroll: 3,
  //   autoplay: false,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  //   initialSlide:0,
  //   prevArrow:<PreviousBtn />,
  //   nextArrow:<NextBtn />,
  //     responsive: [
  //       {
  //         breakpoint: 1200,
  //         settings: {
  //           slidesToShow: 3.5,
  //           slidesToScroll: 3,
  //           speed: 300,
  //           arrows:false,
  //         },
  //       },
  //        {
  //         breakpoint: 960,
  //         settings: {
  //           slidesToShow: 2.5,
  //           slidesToScroll: 2,
  //           speed: 300,
  //           arrows:false,
  //         },
  //       },
  //       {
  //         breakpoint: 800,
  //         settings: {
  //           slidesToShow: 2.5,
  //           slidesToScroll: 2,
  //           speed: 300,
  //           arrows:false,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 1.3,
  //           slidesToScroll: 1,
  //           speed: 300,
  //           arrows:false,
  //         },
  //       },
  //       // {
  //       //   breakpoint: 500,
  //       //   settings: {
  //       //     slidesToShow: 3,
  //       //     slidesToScroll: 2,
  //       //     speed: 300,
  //       //     arrows:false,
  //       //   },
  //       // },
  //       // {
  //       //   breakpoint: 365,
  //       //   settings: {
  //       //     slidesToShow: 3,
  //       //     slidesToScroll: 2,
  //       //     speed: 300,
  //       //     arrows:false,
  //       //   },
  //       // },
  //   ]
  // };

  useEffect(() => {
    let slider = document.getElementById('slider9')

    if(slider){
      new Glider(document.getElementById('slider9'), {
        // Optional parameters
        slidesToShow: 1.3,
        slidesToScroll: 1,
        draggable: true,
        rewind: true,
        duration: 0.5,
        // dots: ".pagination",
        arrows: {
          prev: ".slider-prev9",
          next: ".slider-next9"
        },

        // Responsive breakpoints
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2.5,
              draggable: true,
              rewind: true,
              duration: 0.5,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2.5,
              scrollLock: false,
              rewind: true,
            }
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3.5,
              scrollLock: false,
              rewind: true,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3.5,
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
        <Header/>
        <section className="section9 slider-section9">
          <div className="container9 slider-column9">
            <div className='slider-inner9' id='slider9'>
              { props.websitesData?.map((item,index)=>(
                <Item posterLinks={item && item} key={index} />
              ))}
            </div>
              <span className="slider-prev9"><ChevronLeftIcon/></span>
              <span className="slider-next9"><ChevronRightIcon/></span>
          </div>
          </section>
      </SliderInnerContainer>  
    </SliderContainer>
    </>
  )
}
