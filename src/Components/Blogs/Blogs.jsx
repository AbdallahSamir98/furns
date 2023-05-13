import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AddCartContext } from '../../Context/ExampleContext';
import { CartContext } from '../../Context/ShoppingCartContext';
import allBlogArray from '../../Data/allBlogArray.json'


export default function Blogs() {
//    let {name}= useParams()
   ;
   const { cart, addCart ,handlRemove,decrementCart, scrollToTop } = useContext(AddCartContext);


 
    
    return (
    <>
    
    <div 
     className="container ">
      
            {cart.map((item,idx)=>
            <div key={idx}>
              <div className="row text-center">
                <div className="col-md-12">
                <div className=''>
                      <img src={item.image} className=" mb-4 rounded" />

                      </div>
                </div>
                
              </div>
              <div className="row">
              <div className="col-md-12">
                  <div>
                  <h4 className=' text-center text-danger'>
                        {item.name}
                        
                    </h4>
                     
                      <p className='text-muted w-50 mb-3 text-center m-auto'>
                        {item.description}
                    </p>
                  </div>
                </div>
              </div>
             
            </div>
            
            )}

    </div>
    
  
    
    
    </>
  )
}




