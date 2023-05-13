import React from 'react'
import allProuducts from '../../../Data/allProducts.json'
import ChairCart from './ChairCart'
export default function Chair() {
  
    return (
    <div className='container'>
    <h2 className='text-center m-5' >
            Our Lounge & Chairs
        </h2>
        < div className="row my-5">
        
 { allProuducts.map((products ,idx) => 
         <>
        
         
             <ChairCart products={products} key={idx}/>           
         
         
        
      
         </>          
            )

            
            }
            
</div>
    </div>
  )
}
