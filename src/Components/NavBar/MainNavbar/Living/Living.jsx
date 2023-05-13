import React from 'react'
import LivingCart from './LivingCart'
import allProuducts from '../../../../Data/allProducts.json'
export default function Living() {
  
    return (
    <div className='container'>
    <h2 className='text-center m-5' >
            Our Home Furniture

        </h2>
        < div className="row my-5">
        
 { allProuducts.map((products ,idx) => 

         <>
        
         
             <LivingCart products={products} key={idx}/>           
         
         
        
      
         </>          
            )

            
            }
            
</div>
    </div>
  )
}
