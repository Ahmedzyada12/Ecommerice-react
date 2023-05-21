import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"

 export default function Slide() {
   

    const settings = {
       
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2500,
            autoplaySpeed: 2000,
            cssEase: "linear"
      };

  return (
    <div>
    
    <Slider  {...settings}>

              <div className='col-md-8'>
                       <h1 class="title-h1"><span>50% </span> Off For Your First Shopping</h1>
                       <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque iste rem recusandae </h3> 
                       <img src={require("../imeges/slide/slide-1.png")} className=" slide1  rounded-3 " alt="" />
                        <a href="#!" class="card-link mt-2">Visit Collections</a>
                      

                 </div>
              <div className='col-md-8'>
                       <h1 class="title-h1"><span>50% </span> Off For Your First Shopping</h1>
                       <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque iste rem recusandae </h3> 

                      <img src={require("../imeges/slide/slide-2.png")} className="slide2  rounded-3 " alt="" />

                       <a href="#!" class="card-link mt-3">Visit Collections</a>

                 </div>
              <div className='col-md-8'>
                       <h1 class="title-h1"><span>50% </span> Off For Your First Shopping</h1>
                       <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque iste rem recusandae </h3> 
                       <img src={require("../imeges/slide/slide-3.png")} className=" slide2   rounded-3 " alt="" />
                       <a href="#!" class="card-link mt-3">Visit Collections</a>

                 </div>
              <div className='col-md-8'>
                       <h1 class="title-h1"><span>50% </span> Off For Your First Shopping</h1>
                       <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque iste rem recusandae </h3> 
                       <img src={require("../imeges/slide/slide-4.png")} className=" slide4   rounded-3 " alt="" />
                       <a href="#!" class="card-link mt-3">Visit Collections</a>

                 </div>
                           
                        
            </Slider>
        
      </div>
 
  )
}


