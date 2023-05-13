import React, { useContext } from "react";
import { CartContext } from "../../Context/ShoppingCartContext";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { AddCartContext } from "../../Context/ExampleContext";
import { Link } from "react-router-dom";

export default function OnSale(products) {
 
      const {addToCart ,cart} = useContext(CartContext)
;
const {addCart ,scrollToTop} = useContext(AddCartContext)   

const notify = () => 
  toast.success('successfully add', {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })
;

  return (
    <>
      {products.products.onsale == true?<div className="col-md-3 my-2">
        <div className="content">
          

          <div class="card border-0" >
           
           
           
            <div className="imageCard position-relative">
            <Link to='/productdetail'>

<img onClick={()=>{addCart(products.products) ;{scrollToTop()}}   } src={products.products.image} class="card-img-top" alt="img" />
   
 </Link>            {products.products.onsale == true?<div className="badge saleBadge m-2 bg-danger">-{products.products.sale} %</div>:''}

            
            <div className="d-flex  justify-content-center ">
            <button onClick={()=>{addToCart(products.products) ;  notify()}   }    className="btn btn-outline-danger  ProButton  w-75 ">Add to cart</button>
            
            <div>
      

            <ToastContainer

/>
    
              
    </div>


            </div>
            </div>






            <h5 class="card-title text-center mt-3">{products.products.name}</h5>
               <h6 class="card-text text-center">$
               {products.products.sale?products.products.price- (products.products.price*products.products.sale)/100  : products.products.price}
             
              </h6>
              
            
          </div>
        </div>
      </div>:''}
      
    </>
  );
}
