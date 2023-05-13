import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/ShoppingCartContext';


import './HomeProducts.css'
export default function HomeProducts() {
    const {  scrollToTop } = useContext(CartContext);
 
    return (
    <>
        <div className="container my-5">

            <div className="row">

                <div onClick={scrollToTop} className="col-md-6 mt-5">
                 <Link to='/products'>
                 <div className="imageCardContenet position-relative ">
               
                <img src="images\75 (2).jpeg" alt="product image" className='w-100' />

                        <div className="textProductLeft text-dark">
                        <h3 class=" ">Sale Furniture 
                        <br />
                        For Summer</h3>
                        <p className='text-danger'>Great Discounts Here</p>
                        </div>
                       
                        
                    </div>
                 </Link>
                </div>
                <div onClick={scrollToTop} className="col-md-6 mt-5">
            
            <Link to='/products'>
            <div className="imageCardContenet position-relative">
                        <img src="images\75 (3).jpeg" alt="product image" className='w-100' />
                        <div className="textProductRight text-dark">
                        <h3 class=" ">Office Chair  
                        <br />
                        For Best Offer</h3>
                        <p className='text-danger'>Great Discounts Here</p>
                        </div>
                    </div>

            </Link>
                   
                </div>
            </div>

        </div>
    
    </>
  )
}
