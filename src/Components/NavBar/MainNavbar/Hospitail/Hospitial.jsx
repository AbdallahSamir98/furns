import React from 'react'
import allProuducts from '../../../../Data/allProducts.json'
import HospitialCart from './HospitialCart'
export default function Hospitial() {
  
    return (
    <div className='container'>
    <h2 className='text-center m-5' >
            Our Hospitial Furniture

        </h2>
        < div className="row my-5">
        
 { allProuducts.map((products ,idx) => 

         <>
        
         
             <HospitialCart products={products} key={idx}/>           
         
         
        
      
         </>          
            )

            
            }
            
</div>
    </div>
  )
}
