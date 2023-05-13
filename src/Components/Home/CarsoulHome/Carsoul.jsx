import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import 'animate.css';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
  
<>
<div className='home '>
<Carousel variant="light" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
     <div className="slider1 container  mt-5  ">
   
       <div className="row container ">
        <div className="col-md-6  ">
        <div className="d-flex h-100 justify-content-center  flex-column  cursoltext ">
      <h5 className='animate__animated animate__fadeInUpBig'>NEW PRODUCTS</h5>
        <h2 className='animate__animated animate__fadeInUpBig'>Flexible Chair</h2>
        <p className='animate__animated animate__fadeInUpBig animate__slow'>Take a look at these seating essentials that will help you
          <br /> get through your day with ease.</p>
          <Link to='/products'><button className='btn1 btn w-25 animate__animated animate__fadeInUpBig animate__delay-1s'>Shop Now</button></Link>
      </div>
        </div>
        <div className="col-md-6  ">
          <div>
          <img
          className=" imageslider animate__animated animate__fadeInUpBig"
          src="images/slider-1.png"
          alt="First slide"
        />
          </div>
        </div>
       </div>
      

        
     </div>
      </Carousel.Item>

      <Carousel.Item>
     <div className="slider1 container  mt-5 ">
   
       <div className="row container">
        <div className="col-md-6">
        <div className="d-flex h-100 justify-content-center  flex-column  cursoltext ">
      <h5 className='animate__animated animate__fadeInUpBig'>Best Seller</h5>
        <h2 className='animate__animated animate__fadeInUpBig'>Creative Sofa</h2>
        <p className='animate__animated animate__fadeInUpBig animate__slow'>Take a look at these seating essentials that will help you
          <br /> get through your day with ease.</p>
          <Link to='/products'><button className='btn1 btn w-25 animate__animated animate__fadeInUpBig animate__delay-1s'>Shop Now</button></Link>
      </div>
        </div>
        <div className="col-md-6 ">
          <div>
          <img
          className=" imageslider animate__animated animate__fadeInUpBig"
          src="images/slider-2.png"
          alt="First slide"
        />
          </div>
        </div>
       </div>
      

        
     </div>
      </Carousel.Item>
     
    </Carousel>
</div>
</>

  
  );
}

