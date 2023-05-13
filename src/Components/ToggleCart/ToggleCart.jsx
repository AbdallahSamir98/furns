import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/ShoppingCartContext';


import  './ToggleCart.css'
export default function ToggleCart() {
    const { cart, addToCart ,handlRemove,decrementCart, scrollToTop } = useContext(CartContext);
  
  

    

    return (
        
      <>
 
      
<div
            className="modal fade "
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5"
                    id="exampleModalLabel"
                  >
                    Cart
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                  
                    {cart =='' ?  <div className="modal-body ">
                  <div className="productContent animate__animated animate__bounce  text-center p-5">
                    <i className="fa-solid fa-cart-plus ms-2 fs-1 cart mb-2 "></i>
                    <h5 className="">
                      There is no Products !
                    </h5>
                  </div>
                </div>:
                <div className="modal-body ">
                    <div className=" container">


                    {cart.map((item,idx) => 
                      
                      
                      <div key={idx}>
                        <div className="row animate__animated animate__zoomIn d-flex align-items-center  py-3 ">
                        <div className="col-md-4  ">
                            <div className="cartImage">
                            <img src={item.image} alt="productimage" className="w-100 rounded" />

                            </div>
                        </div>
                        <div className="col-md-8 ">
                          <div className="cartTitle position-relative">
                          <i onClick={()=>{handlRemove(item)}} class="fa-solid fa-xmark position-absolute top-0 start-100   fs-5 text-danger cursor-pointer"></i>

                              <p className='text-danger'>{item.name}</p>
                              <table class="table">
  <thead>
    <tr>
      
      <th scope="col">quantity</th>
      <th scope="col">price</th>
      <th scope="col">total</th>
    </tr>
  </thead>
  <tbody>
    <tr  className=' '>
      
      <td className=''>        
     <span onClick={()=>{decrementCart(item)}} className=" p-2  rounded-start  cursor-pointer">-</span>
        <span className=" p-2 ">{item.quantity}</span>
         <span onClick={()=>{addToCart(item)}} className=" p-2 rounded-end cursor-pointer">+</span>
</td>
      <td>${item.price}</td>
      <td className='text-success'>${item.quantity * item.price}</td>
      
      
    </tr>
   
  </tbody>
</table>
                            
                      
                          </div>
                        </div>
                        </div>
                        <hr />
                       
                      </div>
                    
                    )}
                    </div>
                </div>}

               

               
                <div onClick={scrollToTop} data-bs-dismiss="modal" className="modal-footer d-flex justify-content-center ">
                  <Link
                    to="/cart"
                   
                  
                 
                    className=" viewChart w-75  m-auto rounded p-2 "
                    
          
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="p-2">View Cart</h6>
                      <span className=" p-2 rounded bg-light text-black">
                      <span className="text-danger p-2 rounded bg-light text-black">
                     ${  cart.map(item => item.price * item.quantity)
                         .reduce((total, value) => total + value, 0) }            
                   
                   
                         </span>
                      </span>
                    </div>
                  </Link>
                </div>

             






               
              </div>
            </div>
          </div>
          
          
      </>
  )
}
