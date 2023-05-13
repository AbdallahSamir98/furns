
import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <>
    
    
    <div className=" bg-dark container-fluid">
       <div className="row py-5 container m-auto ">
        
            <div className="col-md-3 ">
            <div className="fotterContent text-white">
                    <h6>ABOUT US</h6>
                    <p className='my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    
                        <ul className='d-flex  align-items-center   list-unstyled'>
                            <li>
                        <span><i class="fa-brands fa-facebook social " ></i></span>

                            </li>
                            <li>
                        <span><i class="fa-brands fa-twitter social ms-3"></i></span>

                            </li>
                            <li>
                        <span><i class="fa-brands fa-linkedin social ms-3"></i></span>

                            </li>
                            <li>
                        <span><i class="fa-brands fa-youtube social ms-3"></i></span>

                            </li>
                        </ul>
                    
                </div>
            </div>
            <div className="col-md-3  ">
            <div className="fotterContent ms-md-5 text-white">
                    <h6>INFORMATION</h6>
                <div className='mt-3'>
                <p>About Us</p>
                    <p>Manufactures</p>
                    <p> Tracking Order</p>
                    <p> Privacy & Policy</p>
                    <p>Terms & Conditions</p>
                        
                </div>
                    
                </div>
            </div>

            <div className="col-md-3">
            <div className="fotterContent ms-md-5  text-white">
                    <h6>MY ACCOUNT</h6>
                <div className='mt-3'>
                <p>Login </p>
                    <p>My Cart</p>
                    <p>Wishlist</p>
                    <p>Compare</p>
                    <p>My Account</p>
                        
                </div>
                    
                </div>
            </div>


            <div className="col-md-3 ">
            <div className="fotterContent  text-white">
                    <h6>NEWSLETTER</h6>
                <div className='mt-3'>
                    <input type="text" placeholder='Enter Email Address' className='form form-control' />
                     <button className='btn   mt-3'><i class="fa-solid fa-paper-plane"></i> subscribe</button>   
                </div>
                    
                </div>
            </div>

            </div>

    </div>
    
    
    
    
    
    </>
  )
}
