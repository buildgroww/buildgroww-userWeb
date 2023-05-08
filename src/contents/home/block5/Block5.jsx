import React, { useEffect } from 'react'
import { styled } from '@mui/styles';
import Item from './item/Item';
// import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import Header from './header/Header';
import "./block5.css";
import Glider from 'glider-js';
import "glider-js/glider.min.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SliderContainer = styled('div')({
width:"99%",
height:"auto",
margin:"0 2px 10px 2px",
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

export default function Block5(props) {

    // const settings = {
    //     dots: false,
    //     arrows:true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4.5,
    //     slidesToScroll: 3,
    //     autoplay: false,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear",
    //     initialSlide:0,
    //     prevArrow:<PreviousBtn />,
    //     nextArrow:<NextBtn />,
    //       responsive: [
    //         {
    //           breakpoint: 1200,
    //           settings: {
    //             slidesToShow: 3.5,
    //             slidesToScroll: 3,
    //             speed: 300,
    //             arrows:false,
    //           },
    //         },
    //          {
    //           breakpoint: 960,
    //           settings: {
    //             slidesToShow: 2.5,
    //             slidesToScroll: 3,
    //             speed: 300,
    //             arrows:false,
    //           },
    //         },
    //         {
    //           breakpoint: 800,
    //           settings: {
    //             slidesToShow: 2.5,
    //             slidesToScroll: 2,
    //             speed: 300,
    //             arrows:false,
    //           },
    //         },
    //         {
    //           breakpoint: 600,
    //           settings: {
    //             slidesToShow: 1.5,
    //             slidesToScroll: 1,
    //             speed: 300,
    //             arrows:false,
    //           },
    //         },
    //         // {
    //         //   breakpoint: 500,
    //         //   settings: {
    //         //     slidesToShow: 3,
    //         //     slidesToScroll: 2,
    //         //     speed: 300,
    //         //     arrows:false,
    //         //   },
    //         // },
    //         // {
    //         //   breakpoint: 365,
    //         //   settings: {
    //         //     slidesToShow: 3,
    //         //     slidesToScroll: 2,
    //         //     speed: 300,
    //         //     arrows:false,
    //         //   },
    //         // },
    //     ]
    //   };

      useEffect(() => {
        let glider = document.getElementById('glider3')

        if(glider){
          new Glider(document.getElementById('glider3'), {
            // Optional parameters
            slidesToShow: 1.5,
            slidesToScroll: 1,
            draggable: true,
            rewind: true,
            duration: 0.5,
            // dots: ".pagination",
            arrows: {
              prev: ".glider-prev3",
              next: ".glider-next3"
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
                breakpoint: 960,
                settings: {
                  slidesToShow: 3.5,
                  scrollLock: false,
                  rewind: true
                }
              },
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4.5,
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
        <Header sliderH={props.sliderData.category}/>
        <section className="section3 glider-section3">
          <div className="container3 glider-column3">
            <div className='glider-inner3' id='glider3'>
              { props.sliderData?.data?.map((item,index)=>(
                <Item posterLinks={item} key={index} />
              ))}
            </div>
              <span className="glider-prev3"><ChevronLeftIcon/></span>
              <span className="glider-next3"><ChevronRightIcon/></span>
          </div>
          </section>
      </SliderInnerContainer>  
    </SliderContainer>
    </>
  )
}