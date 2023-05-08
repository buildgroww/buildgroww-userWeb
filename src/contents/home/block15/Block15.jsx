import React, { useEffect } from 'react'
import { styled } from '@mui/styles';
import Item from './item/Item';
// import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import Header from './header/Header';
import "./block15.css";
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

export default function Block15(props) {

  useEffect(() => {
    let glider = document.getElementById('glider15')

    if(glider){
      new Glider(document.getElementById('glider15'), {
        // Optional parameters
        slidesToShow: 1.3,
        slidesToScroll: 1,
        draggable: true,
        rewind: true,
        duration: 0.5,
        // dots: ".pagination",
        arrows: {
          prev: ".glider-prev15",
          next: ".glider-next15"
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
        <Header sliderH={props.sliderData.category}/>
        <section className="section15 glider-section15">
          <div className="container15 glider-column15">
            <div className='glider-inner15' id='glider15'>
              { props.sliderData?.data?.map((item,index)=>(
                <Item posterLinks={item} key={index} />
              ))}
            </div>
              <span className="glider-prev15"><ChevronLeftIcon/></span>
              <span className="glider-next15"><ChevronRightIcon/></span>
          </div>
          </section>
      </SliderInnerContainer>  
    </SliderContainer>
    </>
  )
}
