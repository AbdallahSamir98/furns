import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/ShoppingCartContext';


export default function Cart() {
    const { cart, addToCart ,handlRemove,decrementCart } = useContext(CartContext);
 
    return (
    <div>
        
        {cart =='' ?  <div className=" ">
                  <div className="productContent  text-center p-5">
                    <i className="fa-solid fa-cart-plus ms-2 fs-1 cart mb-2 "></i>
                    <h5 className="">
                      There is no Products !
                    </h5>
                    <Link to='/home'>
                     back to home
                    </Link>
                  </div>
                </div>:
                <div className=" ">
                    <div className=" container">


                    {cart.map((item,idx) => 
                      
                      
                      <div key={idx}>
                        <div className="row  d-flex align-items-center  py-3 ">
                        <div className="col-md-4  ">
                            <div className="cartImage">
                            <img src={item.image} alt="productimage" className="w-50 ms-5 rounded" />

                            </div>
                        </div>
                        <div className="col-md-6 ">
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
                    <div className="d-flex justify-content-center align-items-center">
                      <h6 className="px-2">Total Price :</h6>
                      <span className=" p-2 rounded bg-success text-black">
                      <span className="text-white p-2 rounded  ">
                     ${  cart.map(item => item.price * item.quantity)
                         .reduce((total, value) => total + value, 0) }            
                   
                   
                         </span>
                      </span>
                    </div>
                </div>}
    </div>
  )
}
