import React from 'react'
import './About.css'

export default function About() {
  return (
    <>
        <div className="container ">

            <h3 className=' text-danger mt-5 fs-1 animate__animated animate__slideInLeft'>ABOUT US :</h3>
            <h6 className='fs-4 text-dark animate__animated animate__slideInLeft'>
            Furns is a global furniture destination for somethings. We sell cutting-edge <br /> furniture and offer a wide variety of fashion-related content.
            </h6>


            <div className="row mt-5 ">
                <div className="col-md-6 animate__animated animate__fadeInUpBig">
                    <div className="aboutContent">
                        <img src="images/75 (1).jpeg " alt="image " className=' aboutImages   rounded mb-3' />
                          <h4 className='mb-3'>OUR STORES</h4>
                          <p>We started in 2015, We make it easier for you to get your home stuff with just one click to your doorstep. We built our platform to help our new homeowners to furnish their own houses with much easier steps.</p>              
                        
                    </div>
                </div>

                <div className="col-md-6 animate__animated animate__fadeInUpBig">
                    <div className="aboutContent">
                        <img src="images/75.jpeg " alt="image " className=' aboutImages rounded mb-3' />
                          <h4 className='mb-3'>OUR MISSION</h4>
                          <p>Our lives happen around our furniture. Every day, our bed frames, dining tables, dressers, and coffee tables support us, often without thanks and appreciation. Here we’re taking a look back at some of the best acknowledgements of the importance our furniture play.</p>              
                        
                    </div>
                </div>
              

            </div>


        </div>
    
    
    </>
  )
}
