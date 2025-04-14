import React, { Component } from 'react';
import "./Content4.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img1 from "../images/Logo/TCS.webp";
import img2 from "../images/Logo/HCL.png";
import img3 from "../images/Logo/WIPRO.png";
import img4 from "../images/Logo/ZOHO1.webp";
import img5 from "../images/Logo/Amazon.png";
import img6 from "../images/Logo/Accenture.png";

class Content4 extends Component{
  render(){
    const Setting = {
      dots : true,
      Infinity : true,
      slidesToShow : 3,
      slidesToScroll : 1,
      autoplay : true,
      speed : 2000,
      autoPlaySpeed : 2000,
      cssEase : "linear",
       responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    };
    return(
      <div className='mainContainer'>
        <h2>Our Student Working at</h2>
        <Slider {... Setting}>
          <div className='Container'>
            <img src={img1}/>
          </div>
          <div className='Container'>
            <img src={img2}/>
          </div>
          <div className='Container'>
            <img src={img3}/>
          </div>
          <div className='Container'>
            <img src={img4}/>
          </div>
          <div className='Container'>
            <img src={img5} style={{height:"100px", marginTop:"40px"}}/>
          </div>
          <div className='Container'>
            <img src={img6} style={{height:"100px", marginTop:"40px"}}/>
          </div>
        </Slider>
      </div>
    )
  };
}

export default Content4;