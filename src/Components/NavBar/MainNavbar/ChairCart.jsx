import React, { useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { CartContext } from '../../../Context/ShoppingCartContext';
import ProductCard from '../../Products/ProductCard';
import '../../Products/products.css'
export default function ChairCart(products) {
const {addToCart ,cart} = useContext(CartContext)
   


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

   {products.products.type=="chair"?
  
  <div className="col-md-3 my-2">
        
  <div className="content">
    

    <div class="card border-0" >
     
     
     
      <div className="imageCard position-relative">
      <img src={products.products.image} class="card-img-top" alt="img" />
      {products.products.onsale == true?<div className="badge saleBadge m-2 bg-danger">-{products.products.sale} %</div>:''}

      
      <div className="d-flex  justify-content-center ">
      <button onClick={()=>{addToCart(products.products) ;  notify()}   }    className="btn btn-outline-danger  ProButton  w-75 ">Add to cart</button>
      
      <div>


      <ToastContainer

/>

        
</div>


      </div>
      </div>






      <h5 class="card-title text-center mt-3">{products.products.name}</h5>
         <h6 class="card-text text-center"><span className="text-danger Linethrough">{products.products.sale?'$'+products.products.price  : ''} </span>
         
          ${products.products.sale?products.products.price- (products.products.price*products.products.sale)/100  : products.products.price}
       
        </h6>
        
      
    </div>
  </div>
</div>
   :''}
    
  </>
  )
}
