import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AddCartContext } from '../../Context/ExampleContext';
import { CartContext } from '../../Context/ShoppingCartContext';

export default function BlogCard({blog}) {
const {addCart ,cart,scrollToTop} = useContext(AddCartContext)   
    
// console.log(blog);
// console.log(cart);

    return (
   
   
   <>
        <div className="col-md-4 mt-5" >
            
            <div class="card border-0" >

  <Link to= "/blogs" >
  <img onClick={()=>{addCart(blog) ;{scrollToTop()}}   } src={blog.image} alt="" class="w-100 card-img-top tika"/>
  </Link>
<div class="card-body">
  <Link to="/blogs">
  <h5 onClick={()=>{addCart(blog) ;{scrollToTop()}}   } class="card-title text-dark">{blog.name}</h5></Link>
  <p class="card-text fs-6" >{blog.description}</p>
  <Link onClick={()=>{addCart(blog) ;{scrollToTop()}}   } to="/blogs" class="btn ">Read more</Link>
</div>
</div>
           
        </div>
    </>
   
  )
}
